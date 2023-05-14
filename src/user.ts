import {Wallet} from "./wallet";

export class User{
    public wallets: Wallet[] = []

    getTotalBalance(){
        return this.wallets.reduce((acc, w) => {
            acc += acc + w.balance
            return acc
        }, 0)
    }

    createWallet (){
        const newWallet = new Wallet(this);
        this.wallets.push(newWallet)
        return newWallet
    }

    addMoneyToBalance(amount: number, wallet: Wallet){
        if(wallet.owner !== this) throw Error("Money can be add to balance only by owner")

        wallet.addMoneyToBalance(amount)
    }
}