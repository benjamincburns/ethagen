const hdkey = require('ethereumjs-wallet/dist/hdkey').default
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

  }

  async init() {
    this._wallet = hdkey.fromMasterSeed(await bip39.mnemonicToSeed(this.mnemonic))
  }

  static initArgs(yargs) {
    return yargs.option('p', {
      alias: 'hdPath',
      default: defaultHdPath,
      describe: 'The hierarchical deterministic (HD) path to use when generating addresses from the PRNG seed',
      demandOption: false
    })
    .option('e', {
      alias: 'entropyBits',
      default: defaultEntropyBits,
      number: true,
      describe: 'The number of bits of entropy to be used when generating the bip39 mnemonic. Must be >8 and a power of two.',
      // fast bitwise test for powers of two
      // powers of two have only one set bit in pos 2^n (e.g. 32 = 0010 0000)
      // subtracting 1 from a power of two gives you set bits in pos 0..n-1
      // a bitwise and between a power of two and its value minus 1 must therefore be zero
      check: val => val >= 8 && (val & (val - 1)) === 0,
      demandOption: false
    })
    .option('m', {
      alias: 'mnemonic',
      describe: 'Use this argument to specify a mnemonic rather than generating one from random bits.',
      string: true,
      demandOption: false
    })
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
