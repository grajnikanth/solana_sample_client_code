// get account info of a publickey from solana blockchain
// get the balance of SOL the publickey has

import { Keypair, clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js"

export const showBalance = async(publicKey: PublicKey) => {

    // const conn = new Connection("http://localhost:8899", "confirmed");
    const conn = new Connection(clusterApiUrl('devnet'), "confirmed");
    const accountInfo = await conn.getAccountInfo(publicKey);

   // console.log(`The account information of ${publicKey} is as follows`);
   // console.log('Data: '+accountInfo.data);
   // console.log('Executable: '+accountInfo.executable);
   // console.log('Balance: '+accountInfo.lamports/LAMPORTS_PER_SOL);
   // console.log('Owner'+accountInfo.owner);
   const balance = accountInfo.lamports/LAMPORTS_PER_SOL;
    console.log(`The balance of ${publicKey} is ${balance} SOL`);

}

// showBalance(new PublicKey("6rwUaidSXkZMza4s2yx2wp4gDiHBfKZ2c9LqJXHTw91d"));

// const secret1 = Uint8Array.from([148,38,4,127,167,76,2,84,125,77,27,228,101,146,109,51,46,110,70,167,147,160,17,136,27,29,198,22,56,144,159,207,87,21,125,110,110,29,3,236,209,228,96,146,68,25,126,147,166,86,53,3,248,61,34,33,106,205,174,151,172,193,79,84]);
// const keypair1 = Keypair.fromSecretKey(secret1);
// showBalance(keypair1.publicKey);