import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Chain, createPublicClient, http } from "viem";
import { baseSepolia, polygonAmoy, sepolia } from "viem/chains";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedNumber(num: number): string {
  if (Math.abs(num) >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.?0+$/, "") + "m";
  } else if (Math.abs(num) >= 1_000) {
    return (num / 1_000).toFixed(2).replace(/\.?0+$/, "") + "k";
  } else {
    return num.toString();
  }
}
export function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
export function formatNearAccount(account: string): string {
  return account.split(".").length > 1 ? account : shortenAddress(account);
}
export const sepoliaPublicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export const polygonPublicClient = createPublicClient({
  chain: polygonAmoy,
  transport: http(),
});
export const basePublicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

export const getPublicClient = (chainId: number) => {
  switch (chainId) {
    case sepolia.id:
      return sepoliaPublicClient;
    case polygonAmoy.id:
      return polygonPublicClient;
    case baseSepolia.id:
      return basePublicClient;
    default:
      return sepoliaPublicClient;
  }
};

export const getChain = (chainId: number): Chain => {
  switch (chainId) {
    case sepolia.id:
      return sepolia;
    case polygonAmoy.id:
      return polygonAmoy;
    case baseSepolia.id:
      return baseSepolia;
    default:
      return sepolia;
  }
};

// export async function mintTokens(address: `0x${string}`): Promise<string> {
//   try {
//     const provider = new ethers.providers.JsonRpcProvider(
//       skaleEuropaTestnet.rpcUrls.default.http[0]
//     );

//     const pk = process.env.NEXT_PUBLIC_PRIVATE_KEY || "";
//     const signer = new ethers.Wallet(pk, provider);
//     const tx = await signer.sendTransaction({
//       to: address,
//       value: parseEther("0.1"),
//     });
//     console.log("Minted 0.1 sFUEL to the user!");

//     return tx.hash;
//   } catch (e) {
//     console.log(e);
//     return "";
//   }
// }

export async function uploadToWalrus(
  image: File,
  onSuccess: (blobId: string) => void,
  onError: (error: Error) => void
): Promise<string> {
  try {
    const response = await fetch("/api/walrus/store", {
      method: "PUT",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: image, // Image being uploaded
    });

    const responseData = await response.json();

    if (responseData.error) {
      onSuccess("6ZKAEoeszqeyrPSQh0-FNCZeXlzGV6204bWvYqLBBn4"); // Call success callback with blobId
      return "6ZKAEoeszqeyrPSQh0-FNCZeXlzGV6204bWvYqLBBn4";
    }
    onSuccess(responseData.blobId); // Call success callback with blobId
    return responseData.blobId;
  } catch (error) {
    onError(error as Error); // Call error callback
    return "";
  }
}
