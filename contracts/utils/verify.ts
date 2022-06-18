import { run } from 'hardhat';

export const verify = async (contractAddress: string, args: any[]) => {

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error: any) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.warn("Already verified!");
    } else {
      console.error(error);
    }
  }
} ;
