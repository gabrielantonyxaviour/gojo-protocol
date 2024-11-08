import { baseSepolia, polygonAmoy, sepolia } from "viem/chains";
import { Agent, Chain } from "./type";

export const idToChain: Record<number, Chain> = {
  [sepolia.id]: {
    name: "Ethereum Sepolia",
    image: "/chains/eth.png",
    chainId: sepolia.id,
  },
  [polygonAmoy.id]: {
    name: "Polygon Amoy",
    image: "/chains/pol.png",
    chainId: polygonAmoy.id,
  },

  [baseSepolia.id]: {
    name: "Base Sepolia",
    image: "/chains/base.png",
    chainId: baseSepolia.id,
  },
};

export const chains: Chain[] = [
  {
    name: "Etheruem Sepolia",
    chainId: sepolia.id,
    image: "/chains/eth.png",
  },

  { name: "Polygon Amoy", chainId: polygonAmoy.id, image: "/chains/pol.png" },
  { name: "Base Sepolia", chainId: baseSepolia.id, image: "/chains/base.png" },
];

export const agents: Agent[] = [
  {
    id: 1,
    name: "Chainlink",
    image: "/agents/chainlink.jpg",
  },
  {
    id: 2,
    name: "Sign Protocol",
    image: "/agents/sign.jpg",
  },
  {
    id: 3,
    name: "LayerZero",
    image: "/agents/layerzero.png",
  },
];

export const MPC_CONTRACT = "v1.signer-prod.testnet";
export const GOJO_CONTRACT = "gojo-protocol.testnet";
export const GOJO_TOKEN_CONTRACT = "token.gojo-protocol.testnet";
export const DERIVATION_PATH = "gojo";

export const MAX_GAS = "300000000000000";
export const TWO_HUNDRED_GAS = "200000000000000";
export const THIRTY_GAS = "30000000000000";
export const ALT_CODE = ` pragma solidity ^0.8.0;

              contract Counter {
                  uint256 public count;

                  event CountChanged(uint256 newCount);

                  constructor() {
                      count = 0;
                  }

                  function increment() public {
                      count += 1;
                      emit CountChanged(count);
                  }

                  function decrement() public {
                      require(count > 0, "Counter: count can't go below zero");
                      count -= 1;
                      emit CountChanged(count);
                  }

                  function getCount() public view returns (uint256) {
                      return count;
                  }
              }`;

export const AI_HOSTED_URL = "https://gojo-protocol.onrender.com/chat";
export const AI_LOCAL_URL = "http://127.0.0.1:8000/chat";
export const COMPILE_HOSTED_URL =
  "https://gojo-compile-server.onrender.com/chat";
export const COMPILE_LOCAL_URL = "http://localhost:3001/compile";
