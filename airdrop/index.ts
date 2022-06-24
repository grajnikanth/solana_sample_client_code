// Program to airdrop solana into a wallet
import {PublicKey, Connection, LAMPORTS_PER_SOL} from "@solana/web3.js";

export const airdrop = async (toAddress: PublicKey, amount: number) => {


    // connect to a solana nodes
    const conn = new Connection("http://localhost:8899", "confirmed");
    const signature = await conn.requestAirdrop(toAddress, amount*LAMPORTS_PER_SOL);

    await conn.confirmTransaction(signature);
}

// airdrop(new PublicKey("6rwUaidSXkZMza4s2yx2wp4gDiHBfKZ2c9LqJXHTw91d"), 4);