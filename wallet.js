const hdkey = require('ethereumjs-wallet/hdkey')
const crypto = require('crypto')
const bip39 = require('bip39')
const utils = require('ethereumjs-util')

const defaultHdPath = "m/44'/60'/0'/0/"
const defaultEntropyBits = 256


class Wallet {
  constructor (options) {
    this.hdPath = options.hdPath || defaultHdPath
    this.entropyBits = options.entropyBits || defaultEntropyBits
    this.mnemonic = options.mnemonic || bip39.entropyToMnemonic(crypto.randomBytes(this.entropyBits/8).toString('hex'))

    this._wallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(this.mnemonic))
  }

  getAccount(index) {
    const acct = this._wallet.derivePath(`${this.hdPath}${index}`)

    const privateKey = acct.getWallet().getPrivateKey()
    const publicKey = utils.privateToPublic(privateKey)

    const address = utils.publicToAddress(publicKey)

    return {
      address: `0x${address.toString('hex')}`,
      privateKey: `0x${privateKey.toString('hex')}`,
      publicKey: `0x${publicKey.toString('hex')}`
    }
  }
}

module.exports = exports = Wallet
