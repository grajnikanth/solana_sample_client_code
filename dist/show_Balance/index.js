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
    const conn = new web3_js_1.Connection("http://localhost:8899", "confirmed");
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
//# sourceMappingURL=index.js.map