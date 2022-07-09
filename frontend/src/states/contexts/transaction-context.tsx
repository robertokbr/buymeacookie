import { useToast } from "@chakra-ui/react";
import { createContext, useCallback, useEffect, useState } from "react";
import { ethers } from 'ethers';
import { abi, contractAddress } from "../../constants";
import axios from "axios";
import { etherToCookie } from "../../utils/ether-to-cookie";

type FundMe = any;

type Transaction = { value: string; message?: string; github?: string };

interface ITransactionContext {
  handleConnectWallet(): Promise<void>;
  currentAccount: string;
  userBalance: string;
  sendTransaction(data: Transaction): Promise<void>;
  contractOwner: string;
  handleWithdraw(): Promise<void>;
  ethPrice: string;
}

let ethereum: any;
let contract: FundMe;

if (typeof window !== "undefined") {
  ethereum = (window as any).ethereum; 
  const provider = new ethers.providers.Web3Provider(ethereum, "any");
  const signer = provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer) as FundMe;
}

export const TransactionContext = createContext({} as ITransactionContext);

export function TransactionContextProvider({ children }) {
  const [ethPrice, setEthPrice] = useState("0");
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();
  const [userBalance, setUserBalance] = useState("0");
  const [_currentChainId, setChainId] = useState(0);
  const [contractOwner, setContractOwner] = useState("");
  const toast = useToast();
  
  useEffect(() => {
    axios.get(
      "https://api.coinbase.com/v2/prices/ETH-USD/spot"
    ).then(({ data }) => setEthPrice(data.data.amount));
  },[]);

  const handleWalletData = useCallback(async (reqAccounts?: string[]) => {
    try {
      // Currently, only allowing rinkeby
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      
      if (chainId !== "0x4") {
        toast({ 
          status: 'error', 
          title: "Please, change your network to Rinkeby!" 
        });
        return;
      }
      
      const [account] = reqAccounts || await ethereum?.request({ 
        method: "eth_accounts" 
      });

      if (!account) return;
      
      const [weiBalance, owner] = await Promise.all([
        contract.provider.getBalance(account), 
        contract.getOwner(),
      ]);

      const balance = ethers.utils.formatUnits(weiBalance).slice(0,5);
      
      setChainId(chainId);
      setUserBalance(balance);
      setCurrentAccount(account);
      setContractOwner(owner.toLowerCase());
    } catch (error) {
      console.error(error);
    }
  }, [toast]);

  const handleConnectWallet = useCallback(async () => {
    if (!ethereum) {
      toast({ title: "Please, install MetaMask!" });
      return;
    };

    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      await handleWalletData(accounts);
    } catch(error) {
      toast({ status: "error", title: error?.error?.message || "Connection has failed" });
      console.error(error);
    }
  }, [toast, handleWalletData]);

  const sendTransaction = useCallback(async ({
    value,
    github,
    message,
  }: Transaction) => {
    try {
      if (!currentAccount) return;

      const transactionResponse = await contract.fund({ 
        value: ethers.utils.parseEther(value),
      });

      await axios.post('/api/transactions', {
        txHash: transactionResponse.hash,     
        address: currentAccount,
        github, 
        amount: etherToCookie(value, ethPrice), 
        message: message,
      });

      toast({ title: 'Transaction sent', status: 'success' });
    } catch (error) {
      toast({ title: error?.error?.message || "Internal error", status: 'error' });
      console.error(error);
    }
  }, [currentAccount, ethPrice, toast]);

  const handleWithdraw = useCallback(async () => {
    try {
      const transaction = await contract.withdraw();
      toast({ status: "success", title: "Trasaction sent" });
      transaction.wait(5).then(() => 
        toast({ status: "success", title: "Withdraw completed" }),
      );
    } catch (error) {
      toast({ 
        status: "error", 
        title: error?.error?.message || "Trasaction failed" 
      });
    }
  }, [toast]);

  useEffect(() => {
    if (!ethereum) return;
    handleWalletData();
  }, [handleWalletData]);

  useEffect(() => {
    if (!ethereum) return;
    ethereum.on('chainChanged', () => handleWalletData());
    ethereum.on('accountsChanged', handleWalletData);

    return () => {
      ethereum.removeListener('chainChanged', () => handleWalletData());
      ethereum.removeListener('accountsChanged', handleWalletData);
    }
  }, [handleWalletData]);

  return (
    <TransactionContext.Provider value={{
      ethPrice,
      contractOwner,
      handleWithdraw,
      handleConnectWallet,
      currentAccount,
      userBalance,  
      sendTransaction,
    }}>
      {children}
    </TransactionContext.Provider>
  );
}