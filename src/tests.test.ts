import {User} from "./user";

describe('tests',() => {
    it('should create User and 2 wallets', () => {
        const user = new User()
        const wallet1 = user.createWallet()
        const wallet2 = user.createWallet()

        expect(user.wallets.length).toBe(2)
        expect(wallet1.owner).toBe(user)
        expect(wallet2.owner).toBe(user)
        expect(wallet2.balance).toBe(0)
    })

    it('should add money to User wallet', () => {
        const user = new User()
        const wallet1 = user.createWallet()

        user.addMoneyToBalance(100, wallet1)
        expect(wallet1.balance).toBe(100)
        expect(user.getTotalBalance()).toBe(100)
    })

    it('should not add money to User wallet if money amount -100', () => {
        const user = new User()
        const wallet1 = user.createWallet()

        const func = () => user.addMoneyToBalance(-100, wallet1)
        expect(func).toThrowError()
    })

    it('total balance should be equal sum wallets', () => {
        const user = new User()
        const wallet1 = user.createWallet()
        const wallet2 = user.createWallet()

        user.addMoneyToBalance(100, wallet1)
        user.addMoneyToBalance(100, wallet2)

        expect(user.getTotalBalance()).toBe(user.wallets.reduce((acc, w) => {
            acc += acc + w.balance
            return acc
        }, 0))
    })


    it('should not add money to other User wallet', () => {
        const user1 = new User()
        const user2 = new User()
        const wallet2 = user2.createWallet()

        const func = () => user1.addMoneyToBalance(-100, wallet2)
        expect(func).toThrowError()
    })
})