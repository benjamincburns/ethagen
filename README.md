#Ethagen
Ethereum Account Generator -> Ethagen

A stupid simple command-line utility to generate Ethereum accounts from bip39 mnemonics. Prints QR codes by default so that addresses are easily scannable.

### Example Output

HD Path: m/44'/60'/0'/0/$index
Mnemonic: artwork utility pig gravity camera wheat need gentle carpet desert fun track genre fatal crater tongue melody sun income fabric exist electric milk mystery

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▀█ █▄▀▀▀▄▄▀▄▀█ ▄▄▄▄▄ █
█ █   █ █▀▀▀█ ▀▀▀▄▀▄▀▀█ █   █ █
█ █▄▄▄█ █▀ █▀▀█▀▀▄█▄▄██ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄▀ ▀▄█ ▀ █ █▄█▄▄▄▄▄▄▄█
█  ▄▄▄█▄ ▄▄▀▄▀▄▀▄▀▄▀▀▄▄▀▄▀▄█▄▀█
█ ▄ ▄▀ ▄█▄█▄█▀█▄ ▄▄ █  ▀█ ▀█▄▀█
█▀▄███▄▄ █ ▄█▄▄▀▄▀▄▄▀▀▀▀▄▀▀▄█▀█
█ ▀▄█▀▄▄  ▀█ ▄▄█▄▄█ █▄▀▀▀ ▄█ ██
█▀██▀  ▄▀▀▄ ▄▀▄▄▄▀▄▄▀▄▀▀▀▀ ▄▄ █
█ █ ██▄▄▀█▄ █▀█  ▄█ ▀▀▄▀▄▀▀█▀██
█▄█▄█▄█▄█▀ ██▄ ▀█▄▄▀▀ ▄▄▄ ▀▄▄▀█
█ ▄▄▄▄▄ █▄▀█ ▄██▄▄▄▄▄ █▄█ █▄ ▀█
█ █   █ █ ▀▄▄▀▀█▄▄▄▀█ ▄▄▄▄ ▄  █
█ █▄▄▄█ █ ▄▀█▀ ▄▄▄▄  ▀▄▄   █ ██
█▄▄▄▄▄▄▄█▄███▄█▄▄█▄███▄██▄█▄███


Address: 0x70e4f5acd02fcd661e098db00cbc39cadffe42e8

###Options:
  --version                       Show version number                  [boolean]
  -p, --hdPath, --printPublicKey  Whether or not to print the public key to the
                                  console             [boolean] [default: false]
  -e, --entropyBits               The number of bits of entropy to be used when
                                  generating the bip39 mnemonic. Must be >8 and
                                  a power of two.        [number] [default: 256]
  -m, --mnemonic                  Use this argument to specify a mnemonic rather
                                  than generating one from random bits. [string]
  -s, --silent                    if true, no output will be produced
                                                      [boolean] [default: false]
  -n, --accountPrintCount         The number of accounts to generate from the
                                  bip39 mnemonic           [number] [default: 1]
  -k, --printPrivateKey           Whether or not to print the private key to the
                                  console             [boolean] [default: false]
  -q, --printQrCode               Whether or not to print a QR code for each
                                  address to the console
                                                       [boolean] [default: true]
  -h, --help                      Show help                            [boolean]
