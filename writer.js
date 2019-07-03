const QR = require('qrcode-terminal')

const defaultSilent = false
const defaultAccountPrintCount = 1
const defaultPrintPublicKey = false
const defaultPrintPrivateKey = false
const defaultPrintQrCode = true
const defaultSmallQrCode = true
const defaultJsonOutput = false
const defaultLog = console.log

class WalletWriter {
  constructor(options) {
    this.silent = options.silent !== undefined ? options.silent : defaultSilent
    this.accountPrintCount = options.accountPrintCount !== undefined ? options.accountPrintCount : defaultAccountPrintCount
    this.printPublicKey = options.printPublicKey !== undefined ? options.printPublicKey : defaultPrintPublicKey
    this.printPrivateKey = options.printPrivateKey !== undefined ? options.printPrivateKey : defaultPrintPrivateKey
    this.printQrCode = options.printQrCode !== undefined ? options.printQrCode : defaultPrintQrCode
    this.smallQrCode = options.smallQrCode !== undefined ? options.smallQrCode : defaultSmallQrCode
    this.json = options.json !== undefined ? options.json : defaultJsonOutput
    this.log = options.log || defaultLog
  }

  static initArgs(yargs) {
    return yargs.option('s', {
      alias: 'silent',
      default: defaultSilent,
      boolean: true,
      describe: 'if true, no output will be produced',
      demandOption: false
    })
    .option('n', {
      alias: 'accountPrintCount',
      default: defaultAccountPrintCount,
      number: true,
      describe: 'The number of accounts to generate from the bip39 mnemonic',
      demandOption: false
    })
    .option('printPublicKey', {
      default: defaultPrintPublicKey,
      boolean: true,
      describe: 'Whether or not to print the public key to the console',
      demandOption: false
    })
    .option( 'printPrivateKey', {
      default: defaultPrintPrivateKey,
      boolean: true,
      describe: 'Whether or not to print the private key to the console',
      demandOption: false
    })
    .option('q', {
      alias: 'printQrCode',
      default: defaultPrintQrCode,
      boolean: true,
      describe: 'Whether or not to print a QR code for each address to the console',
      demandOption: false,
    })
    .option('j', {
      alias: 'json',
      default: defaultJsonOutput,
      boolean: true,
      describe: 'Prints accounts in a JSON object',
      demandOption: false
    })
  }

  writeAccount(account) {
    if(this.silent) return

    if (this.printQrCode) {
      this.log('')
      let qrOpts = { small: this.smallQrCode }

      // prints to stdout unless callback provided as final arg
      QR.generate(account.address, qrOpts, this.log)
      this.log('')
    }

    this.log(`Address: ${account.address}`)
    if (this.printPublicKey) {
      this.log(`Public Key: ${account.publicKey}`)
    }

    if (this.printPrivateKey) {
      this.log(`Private Key: ${account.privateKey}`)
    }
  }

  writeDetails(wallet) {
    if(this.silent) return

    if (this.json) {
      this.writeDetailsJson(wallet)
    } else {
      this.writeDetailsDefault(wallet)
    }
    this.log('')
  }

  writeDetailsJson(wallet) {
    const output = {
      mnemonic: wallet.mnemonic,
      hdPath: wallet.hdPath,
      accounts: range(this.accountPrintCount).map((i) => wallet.getAccount(i))
    }

    this.log(
      JSON.stringify(output, null, 2)
    )
  }

  writeDetailsDefault(wallet) {
    this.log(`HD Path: ${wallet.hdPath}$index`)
    this.log(`Mnemonic: ${wallet.mnemonic}`)
    for (let i = 0; i < this.accountPrintCount; i++) {
      this.writeAccount(wallet.getAccount(i))
    }
  }
}

function range(i) {
  return Array.from(Array(i).keys())
}

module.exports = exports = WalletWriter
