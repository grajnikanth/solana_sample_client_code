import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

// const payer = Keypair.generate();
const secret = Uint8Array.from([85,89,126,84,179,86,67,158,239,60,198,13,19,48,81,216,189,165,10,82,225,220,53,159,33,81,29,129,112,42,101,177,208,124,81,230,166,183,89,200,103,160,90,64,138,100,126,144,19,193,186,53,87,125,251,117,43,97,201,154,229,178,203,160]);
const keypair1 = Keypair.fromSecretKey(secret);

console.log(`${keypair1.publicKey}`);

const connection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed'
);

const airdropSignature = await connection.requestAirdrop(
  keypair1.publicKey,
  2*LAMPORTS_PER_SOL,
);

await connection.confirmTransaction(airdropSignature);