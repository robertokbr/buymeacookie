/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FundMe, FundMeInterface } from "../../contracts/FundMe";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MINIMUM_USD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressToAmountFunded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "funders",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "i_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060805160601c610d4461006d6000396000818161026701526104990152610d446000f3fe6080604052600436106100595760003560e01c80633ccfd60b146100725780633e47d6f31461007c5780636b69a592146100b9578063b60d4288146100e4578063dba6335f146100ee578063dc0d3dff1461011957610068565b3661006857610066610156565b005b610070610156565b005b61007a610265565b005b34801561008857600080fd5b506100a3600480360381019061009e91906106f6565b610472565b6040516100b0919061073c565b60405180910390f35b3480156100c557600080fd5b506100ce61048a565b6040516100db919061073c565b60405180910390f35b6100ec610156565b005b3480156100fa57600080fd5b50610103610497565b6040516101109190610766565b60405180910390f35b34801561012557600080fd5b50610140600480360381019061013b91906107ad565b6104bb565b60405161014d9190610766565b60405180910390f35b6802b5e3af16b1880000610169346104fa565b10156101aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a190610837565b60405180910390fd5b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461025c9190610886565b92505081905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102bd57600080fd5b60005b600080549050811015610362576000600160008084815481106102e6576102e56108dc565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808061035a9061090b565b9150506102c0565b50600067ffffffffffffffff81111561037e5761037d610954565b5b6040519080825280602002602001820160405280156103ac5781602001602082028036833780820191505090505b50600090805190602001906103c29291906105ec565b5060003373ffffffffffffffffffffffffffffffffffffffff16476040516103e9906109b4565b60006040518083038185875af1925050503d8060008114610426576040519150601f19603f3d011682016040523d82523d6000602084013e61042b565b606091505b505090508061046f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046690610a15565b60405180910390fd5b50565b60016020528060005260406000206000915090505481565b6802b5e3af16b188000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600081815481106104cb57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080610505610534565b90506000670de0b6b3a7640000848361051e9190610a35565b6105289190610abe565b90508092505050919050565b600080738a753747a1fa494ec906ce90e9f37563a8af630e905060008173ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561059657600080fd5b505afa1580156105aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ce9190610b7c565b5050509150506402540be400816105e59190610bf7565b9250505090565b828054828255906000526020600020908101928215610665579160200282015b828111156106645782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061060c565b5b5090506106729190610676565b5090565b5b8082111561068f576000816000905550600101610677565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106c382610698565b9050919050565b6106d3816106b8565b81146106de57600080fd5b50565b6000813590506106f0816106ca565b92915050565b60006020828403121561070c5761070b610693565b5b600061071a848285016106e1565b91505092915050565b6000819050919050565b61073681610723565b82525050565b6000602082019050610751600083018461072d565b92915050565b610760816106b8565b82525050565b600060208201905061077b6000830184610757565b92915050565b61078a81610723565b811461079557600080fd5b50565b6000813590506107a781610781565b92915050565b6000602082840312156107c3576107c2610693565b5b60006107d184828501610798565b91505092915050565b600082825260208201905092915050565b7f546865206d696e696d756d2066756e642076616c756520697320353020555344600082015250565b60006108216020836107da565b915061082c826107eb565b602082019050919050565b6000602082019050818103600083015261085081610814565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061089182610723565b915061089c83610723565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156108d1576108d0610857565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061091682610723565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561094957610948610857565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b600061099e600083610983565b91506109a98261098e565b600082019050919050565b60006109bf82610991565b9150819050919050565b7f43616c6c20686173206661696c65640000000000000000000000000000000000600082015250565b60006109ff600f836107da565b9150610a0a826109c9565b602082019050919050565b60006020820190508181036000830152610a2e816109f2565b9050919050565b6000610a4082610723565b9150610a4b83610723565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610a8457610a83610857565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610ac982610723565b9150610ad483610723565b925082610ae457610ae3610a8f565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b610b0e81610aef565b8114610b1957600080fd5b50565b600081519050610b2b81610b05565b92915050565b6000819050919050565b610b4481610b31565b8114610b4f57600080fd5b50565b600081519050610b6181610b3b565b92915050565b600081519050610b7681610781565b92915050565b600080600080600060a08688031215610b9857610b97610693565b5b6000610ba688828901610b1c565b9550506020610bb788828901610b52565b9450506040610bc888828901610b67565b9350506060610bd988828901610b67565b9250506080610bea88828901610b1c565b9150509295509295909350565b6000610c0282610b31565b9150610c0d83610b31565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615610c4c57610c4b610857565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615610c8957610c88610857565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615610cc657610cc5610857565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0582126000841260008412161615610d0357610d02610857565b5b82820290509291505056fea264697066735822122070993e16ef24fbdb23e0a3ba83f02b62a93bdfa9baf1b2b86b427d95c2b5a5ec64736f6c63430008080033";

type FundMeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundMeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundMe__factory extends ContractFactory {
  constructor(...args: FundMeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FundMe> {
    return super.deploy(overrides || {}) as Promise<FundMe>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FundMe {
    return super.attach(address) as FundMe;
  }
  override connect(signer: Signer): FundMe__factory {
    return super.connect(signer) as FundMe__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundMeInterface {
    return new utils.Interface(_abi) as FundMeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FundMe {
    return new Contract(address, _abi, signerOrProvider) as FundMe;
  }
}