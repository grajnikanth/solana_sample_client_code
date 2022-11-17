// Creating and minting new token using spl-token library

import { createMint, getMint} from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import { airdrop } from "../airdrop"

// Function to initialize a new token
const mintNewToken = async (mintWallet: Keypair) => {
    const connection = new Connection("http://localhost:8899", "confirmed");

    // create and initialize a new mint - That create a new token on the chain
    // Retruns address of new Mint
    const newTokenAddress = await createMint(
        connection,
        mintWallet, // payer of this trasaction
        mintWallet.publicKey, // public key which will have authority to create new token
        null,
        8); //Rest of the arguments in this function were optional
    
    // get information about the above mint
    const mintInfo = await getMint(connection, newTokenAddress);
    console.log(`Mint information: isInitialized: ${mintInfo.isInitialized}
        total supply = ${mintInfo.supply}`);
    return newTokenAddress;
    
}

// Function to create new tokens and transfer it to a separate account
// tokenAddress - address of the Token which was created in the previous step
const transferTokens = async(tokenAddress: PublicKey, 
     mintingWallet: Keypair, // keypair which has the authority to create new tokens
     toAddress: PublicKey) => {

    const connection = new Connection("http://localhost:8899", "confirmed");
     
        


}


(async() => {
    // mintingWallet will be the public private key which will be createing the
    // new token
    // We create a new Keypair using the generate() function
    const mintingWallet = Keypair.generate()
    // Need some SOL to pay for transactions
    // so airdrop some SOL tokens
    await airdrop(mintingWallet.publicKey, 5); 

    const newTokenAddress = mintNewToken(mintingWallet);

    //


})()