"use strict";
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
exports.airdrop = void 0;
// Program to airdrop solana into a wallet
const web3_js_1 = require("@solana/web3.js");
const airdrop = (toAddress, amount) => __awaiter(void 0, void 0, void 0, function* () {
    // connect to a solana nodes
    // const conn = new Connection("http://localhost:8899", "confirmed");
    const conn = new web3_js_1.Connection("https://api.devnet.solana.com", "confirmed");
    const blockHeight = yield conn.getBlockHeight();
    console.log('Block Height is ' + blockHeight);
    const signature = yield conn.requestAirdrop(toAddress, amount * web3_js_1.LAMPORTS_PER_SOL);
    const confirmation = yield conn.confirmTransaction(signature);
    console.log('Receipt of the transaction is ' + confirmation);
});
exports.airdrop = airdrop;
// const newWallet = Keypair.generate();
// console.log(`Publickey of new wallet is ${newWallet.publicKey}`);
// airdrop(newWallet.publicKey, 4);
// airdrop(new PublicKey('6rwUaidSXkZMza4s2yx2wp4gDiHBfKZ2c9LqJXHTw91d'), 4);
// const secret1 = Uint8Array.from([148,38,4,127,167,76,2,84,125,77,27,228,101,146,109,51,46,110,70,167,147,160,17,136,27,29,198,22,56,144,159,207,87,21,125,110,110,29,3,236,209,228,96,146,68,25,126,147,166,86,53,3,248,61,34,33,106,205,174,151,172,193,79,84]);
// const keypair1 = Keypair.fromSecretKey(secret1);
// airdrop(keypair1.publicKey, 5);
//# sourceMappingURL=index.js.map