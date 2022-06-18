import { useToast } from "@chakra-ui/react";
import { createContext, useCallback, useEffect, useState } from "react";
import { ethers, utils } from 'ethers';
import { configs } from "../../configs";
import Web3 from "web3";

interface ITransactionContext {
  handleConnectWallet(): Promise<void>;
  currentAccount: string;
  userTokenAmount: string;
  sendTransaction(value: number, message: string): Promise<void>;
}

let ethereum: any;
let web3: Web3;

if (typeof window !== "undefined") {
  ethereum = (window as any).ethereum; 
  web3 = new Web3(ethereum);
}

export const TransactionContext = createContext({} as ITransactionContext);

export function TransactionContextProvider({ children }) {
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();
  const [userTokenAmount, setUserTokenAmount] = useState("0");
  const [currentChainId, setCurrentChainId] = useState(0);
  const toast = useToast();
  
  const handleWalletData = useCallback(async (reqAccount?: string) => {
    const [account] = reqAccount ? [reqAccount] : await web3.eth.getAccounts();
    if (!account) return;
    const chainId = await web3.eth.getChainId();
    const balance = await web3.eth.getBalance(account);
    const formattedBalance = web3.utils.fromWei(balance); 
    setCurrentChainId(chainId);
    setUserTokenAmount(Number(formattedBalance).toFixed(4));
    setCurrentAccount(account);
  }, []);

  useEffect(() => {
    if (!ethereum) return;
    handleWalletData();
    ethereum.on('chainChanged', () => handleWalletData());
  }, [handleWalletData]);

  const handleConnectWallet = useCallback(async () => {
    if (!ethereum) {
      toast({ title: "Please, install MetaMask!" });
      return;
    };

    try {
      const [reqAccount] = await ethereum.request({ method: "eth_requestAccounts" });
      await handleWalletData(reqAccount);
    } catch(error) {
      toast({ status: "error", title: "Connection has failed" });
      console.error(error);
    }
  }, [toast, handleWalletData]);

  const sendTransaction = useCallback(async (
    _value: number,
    _message: string,
  ) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    toast({ title: 'Transaction performed', status: 'success' })
  }, [toast]);

  return (
    <TransactionContext.Provider value={{
      handleConnectWallet,
      currentAccount,
      userTokenAmount,  
      sendTransaction,
    }}>
      {children}
    </TransactionContext.Provider>
  );
}