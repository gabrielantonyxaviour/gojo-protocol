import { getChainRpcAndExplorer } from "../utils";
import { sendNearMpcTx } from "./sendNearMpcTx";
import { Wallet } from "../services/near-wallet";
import { ethers } from "ethers";

export const deployContract = async (
  sender: string,
  chainId: number,
  byteCode: string,
  wallet: Wallet
) => {
  const chain = getChainRpcAndExplorer(chainId);
  const provider = new ethers.providers.JsonRpcProvider(chain.rpcUrl);
  const gasPrice = await provider.getGasPrice();
  const nonce = await provider.getTransactionCount(sender);
  const baseTx = {
    to: null,
    nonce,
    data: byteCode,
    value: 0,
    gasLimit: 1_000_000, // 1m
    gasPrice,
    chainId,
  };
  await sendNearMpcTx(sender, baseTx, chainId, wallet, chain, provider);
};
