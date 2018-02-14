const yargs = require('yargs')
const Wallet = require('./wallet')
const WalletWriter = require('./writer')

module.exports = exports = Wallet
module.exports.WalletWriter = WalletWriter

// handle case where we're not a library, but a command-line tool
if (require.main === module) {
  let y = Wallet.initArgs(yargs)
  let options = WalletWriter.initArgs(y)
  .showHelpOnFail(false, 'Specify --help for available options') 
  .help('h')
  .alias('h', 'help')
  .parse()

  let wallet = new Wallet(options)
  let writer = new WalletWriter(options)
  writer.writeDetails(wallet)
}

