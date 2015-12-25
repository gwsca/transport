# Transport

## What is Transport?

Transport is a secure file transfer platform, designed to route strictly threw tor to hidden service servers listening using the server file. Written completely in Javascript (NodeJS), it allows for fast communication, and no peering eyes. We use a TCP Socket, with a strong random generated password each session of 128 characters. The password is only usable for the session. It changes every session randomly.

## How does transport help me?

Ever wanted to transfer secure files without peering eyes? This is your tool, it's fast, reliable, and secure. It doesn't take a lot of bandwidth, and is secure. Built-in functions to use AES256 encryption to transfer the file, with a random 32-char key generator.

## Install instructions?

On linux, simply: nodejs server.js - it will spew out a key,

On linux, the client to send accepts 2 arguments, like so:

` nodejs client.js [file name to send] [key] `

You pass the designated file to send, and the key. In the client you configure the distination host, and port.

If you are transfering over the TOR network, please run torify nodejs client.js and torify nodejs server.js, so it forces all traffic threw tor. It can be used with and without tor, up to user choice.

## License

MIT Licence