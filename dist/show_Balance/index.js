"use strict";
// get account info of a publickey from solana blockchain
// get the balance of SOL the publickey has
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
exports.showBalance = void 0;
const web3_js_1 = require("@solana/web3.js");
const showBalance = (publicKey) => __awaiter(void 0, void 0, void 0, function* () {
    // const conn = new Connection("http://localhost:8899", "confirmed");
    const conn = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'), "confirmed");
    const accountInfo = yield conn.getAccountInfo(publicKey);
    // console.log(`The account information of ${publicKey} is as follows`);
    // console.log('Data: '+accountInfo.data);
    // console.log('Executable: '+accountInfo.executable);
    // console.log('Balance: '+accountInfo.lamports/LAMPORTS_PER_SOL);
    // console.log('Owner'+accountInfo.owner);
    const balance = accountInfo.lamports / web3_js_1.LAMPORTS_PER_SOL;
    console.log(`The balance of ${publicKey} is ${balance} SOL`);
});
exports.showBalance = showBalance;
// showBalance(new PublicKey("6rwUaidSXkZMza4s2yx2wp4gDiHBfKZ2c9LqJXHTw91d"));
// const secret1 = Uint8Array.from([148,38,4,127,167,76,2,84,125,77,27,228,101,146,109,51,46,110,70,167,147,160,17,136,27,29,198,22,56,144,159,207,87,21,125,110,110,29,3,236,209,228,96,146,68,25,126,147,166,86,53,3,248,61,34,33,106,205,174,151,172,193,79,84]);
// const keypair1 = Keypair.fromSecretKey(secret1);
// showBalance(keypair1.publicKey);
//# sourceMappingURL=index.js.map