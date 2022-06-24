// get account info of a publickey from solana blockchain
// get the balance of SOL the publickey has

import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js"

export const showBalance = async(publicKey: PublicKey) => {

    const conn = new Connection("http://localhost:8899", "confirmed");
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