# Ethagen
Ethereum Account Generator -> Ethagen

Stupid simple command-line utility for generating bip39 mnemonics and ethereum accounts. Prints QR codes by default so that addresses are easily scannable.

### Example Output

QR Code looks like crap here, but scans fine when shown in a terminal.

```
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
```

### Options

Taken straight from the help text:

```
  --version                Show version number                         [boolean]
  -p, --hdPath             The hierarchical deterministic (HD) path to use when
                           generating addresses from the PRNG seed
                                                    [default: "m/44'/60'/0'/0/"]
  -e, --entropyBits        The number of bits of entropy to be used when
                           generating the bip39 mnemonic. Must be >8 and a power
                           of two.                       [number] [default: 256]
  -m, --mnemonic           Use this argument to specify a mnemonic rather than
                           generating one from random bits.             [string]
  -s, --silent             if true, no output will be produced
                                                      [boolean] [default: false]
  -n, --accountPrintCount  The number of accounts to generate from the bip39
                           mnemonic                        [number] [default: 1]
  --printPublicKey         Whether or not to print the public key to the console
                                                      [boolean] [default: false]
  --printPrivateKey        Whether or not to print the private key to the
                           console                    [boolean] [default: false]
  -q, --printQrCode        Whether or not to print a QR code for each address to
                           the console                 [boolean] [default: true]
  -h, --help               Show help                                   [boolean]
```
