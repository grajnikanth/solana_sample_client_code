"use strict";
// Transfer from one account to the other
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferSol = void 0;
const web3_js_1 = require("@solana/web3.js");
const airdrop_1 = require("../airdrop");
const show_Balance_1 = require("../show_Balance");
// class Keypair - an account keypair used for signing transactions
// Transfer calls a function of a smart contract deployed on solana Blockchain
const transferSol = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    // const connection = new Connection("http://localhost:8899", "confirmed");
    const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'), "confirmed");
    const transaction = new web3_js_1.Transaction();
    const instruction = web3_js_1.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: web3_js_1.LAMPORTS_PER_SOL * amount
    });
    // add the instruction to the transaction object. Once all 
    // transactions are added, then the transaction can be sent to blockchain
    transaction.add(instruction);
    // the [from] is the Keypair which can sign the transaction
    // it is an array because you can have mutliple signers
    // Internally, this function creates the signature for this transaction using
    // secret key in the Keypair
    yield (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [from]);
    console.log("Transaction sent and confirmed");
});
exports.transferSol = transferSol;
// get a keypair for the new wallet
const secret = Uint8Array.from([85, 89, 126, 84, 179, 86, 67, 158, 239, 60, 198, 13, 19, 48, 81, 216, 189, 165, 10, 82, 225, 220, 53, 159, 33, 81, 29, 129, 112, 42, 101, 177, 208, 124, 81, 230, 166, 183, 89, 200, 103, 160, 90, 64, 138, 100, 126, 144, 19, 193, 186, 53, 87, 125, 251, 117, 43, 97, 201, 154, 229, 178, 203, 160]);
console.log('Secret Uint8Array is: ');
console.log(secret);
// create a keypair from the Unit8Array using the Keypair class
// creates a keypair from a raw key byte array. 
// Typically used from a previously generated keypair elsewhere
const fromKeypair = web3_js_1.Keypair.fromSecretKey(secret);
// get the publickey for the "to" address
// const toPublicKey = new PublicKey("6rwUaidSXkZMza4s2yx2wp4gDiHBfKZ2c9LqJXHTw91d");
const toSecret = Uint8Array.from([148, 38, 4, 127, 167, 76, 2, 84, 125, 77, 27, 228, 101, 146, 109, 51, 46, 110, 70, 167, 147, 160, 17, 136, 27, 29, 198, 22, 56, 144, 159, 207, 87, 21, 125, 110, 110, 29, 3, 236, 209, 228, 96, 146, 68, 25, 126, 147, 166, 86, 53, 3, 248, 61, 34, 33, 106, 205, 174, 151, 172, 193, 79, 84]);
const toKeypair = web3_js_1.Keypair.fromSecretKey(toSecret);
// execute function to run the above transfer function
(() => __awaiter(void 0, void 0, void 0, function* () {
    // airdrop of SOL into the new wallet
    yield (0, airdrop_1.airdrop)(fromKeypair.publicKey, 5);
    yield (0, show_Balance_1.showBalance)(fromKeypair.publicKey);
    yield (0, show_Balance_1.showBalance)(toKeypair.publicKey);
    yield (0, exports.transferSol)(fromKeypair, toKeypair.publicKey, 3);
    yield (0, show_Balance_1.showBalance)(fromKeypair.publicKey);
    yield (0, show_Balance_1.showBalance)(toKeypair.publicKey);
}))();
//# sourceMappingURL=index.js.map