// Transfer from one account to the other

import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { airdrop } from "../airdrop";
import { showBalance } from "../show_Balance";

// class Keypair - an account keypair used for signing transactions
// Transfer calls a function of a smart contract deployed on solana Blockchain
export const transferSol = async (from: Keypair, to: PublicKey, amount: number) => {

    const connection = new Connection("http://localhost:8899", "confirmed");

    const transaction = new Transaction();

    const instruction = SystemProgram.transfer(
        {
            fromPubkey: from.publicKey,
            toPubkey: to,
            lamports: LAMPORTS_PER_SOL * amount
        }
    );

    // add the instruction to the transaction object. Once all 
    // transactions are added, then the transaction can be sent to blockchain
    transaction.add(instruction);

    // the [from] is the Keypair which can sign the transaction
    // it is an array because you can have mutliple signers
    // Internally, this function creates the signature for this transaction using
    // secret key in the Keypair
    await sendAndConfirmTransaction(connection, transaction, [from]);

    console.log("Transaction sent and confirmed")



}

// get a keypair for the new wallet
const secret = Uint8Array.from([85,89,126,84,179,86,67,158,239,60,198,13,19,48,81,216,189,165,10,82,225,220,53,159,33,81,29,129,112,42,101,177,208,124,81,230,166,183,89,200,103,160,90,64,138,100,126,144,19,193,186,53,87,125,251,117,43,97,201,154,229,178,203,160]);
console.log('Secret Uint8Array is: ');
console.log(secret);

// create a keypair from the Unit8Array using the Keypair class
// creates a keypair from a raw key byte array. 
// Typically used from a previously generated keypair elsewhere
const fromKeypair = Keypair.fromSecretKey(secret);

// get the publickey for the "to" address
const toPublicKey = new PublicKey("6rwUaidSXkZMza4s2yx2wp4gDiHBfKZ2c9LqJXHTw91d");

// execute function to run the above transfer function
(async () => {

    // airdrop of SOL into the new wallet
    await airdrop(fromKeypair.publicKey, 5);

    await showBalance(fromKeypair.publicKey);
    await showBalance(toPublicKey);

    await transferSol(fromKeypair, toPublicKey, 3);

    await showBalance(fromKeypair.publicKey);
    await showBalance(toPublicKey);


})()
