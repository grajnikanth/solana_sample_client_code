// Program to airdrop solana into a wallet
import {clusterApiUrl, PublicKey, Connection, LAMPORTS_PER_SOL, Keypair} from "@solana/web3.js";

export const airdrop = async (toAddress: PublicKey, amount: number) => {


    // connect to a solana nodes
    // const conn = new Connection("http://localhost:8899", "confirmed");
    const conn = new Connection("https://api.devnet.solana.com", "confirmed");
    const blockHeight = await conn.getBlockHeight();
    console.log('Block Height is '+blockHeight);
    const signature = await conn.requestAirdrop(toAddress, amount*LAMPORTS_PER_SOL);

    const confirmation = await conn.confirmTransaction(signature);
    console.log('Receipt of the transaction is '+confirmation);
}

// const newWallet = Keypair.generate();
// console.log(`Publickey of new wallet is ${newWallet.publicKey}`);
// airdrop(newWallet.publicKey, 4);

// airdrop(new PublicKey('6rwUaidSXkZMza4s2yx2wp4gDiHBfKZ2c9LqJXHTw91d'), 4);

// const secret1 = Uint8Array.from([148,38,4,127,167,76,2,84,125,77,27,228,101,146,109,51,46,110,70,167,147,160,17,136,27,29,198,22,56,144,159,207,87,21,125,110,110,29,3,236,209,228,96,146,68,25,126,147,166,86,53,3,248,61,34,33,106,205,174,151,172,193,79,84]);
// const keypair1 = Keypair.fromSecretKey(secret1);

// airdrop(keypair1.publicKey, 5);
