# Notarization

::: warning
This specification is still on Draft state
:::

[[toc]]

## Definitions

- A Hash H is a one-way function calculating a checksum on any data with the guarantee that no two inputs return the some output
- A Notarization is the act of storing a hash on Blockchain as a proof of the existence of data at the point in time of the transaction T
- A Signer S is the owner of public private key pair enabling to create and sign a transaction T on Blockchain
- An Identity I is given to any entity by the public key for which it controls the private key.
- An Attestation of the Identity of party P is the publication of the public key PK and further data such as name on Blockchain.
- Key derivation is a mechanism to derive new public private key pairs from one seed.

## Simple Notarization

Hashes H1..n ares calculated by parties P1..j and sent to service provider which creates and signs transaction T1..n with hash as payload. The service provider controls the private key PK1 controlled by service provider.

| Advantages                               | Drawbacks                                                            |
| ---------------------------------------- | -------------------------------------------------------------------- |
| Serves the basic purpose of notarization | Easy to fake data — every party can send faked data of other parties |
| Simple to use                            |                                                                      |

Remark: this is the approach used by S1Seven with the demo system available at https://demo.notarization.en10204.io

## Transparent Notarization with Identity

The Identity of party P with public key PK is attested on Blockchain.
Party P calculates Hashes H1..n of data sets D1..n and notarizes each in a transaction with public key PK.

| Advantages                                                                   | Drawbacks                                                                                             |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Serves the basic purpose of notarization                                     | Notarizations can be clearly linked to a party                                                        |
| The signer of a notarization is linked to the attestation via the public key | Information on the number and timings of notarizations become transparent for each market participant |

## Blinded Notarization with Unverifiable Identity

The Identity of party P with public key PK is attested on Blockchain.
Party P calculates Hashes H1..n of data sets D1..n. For each transaction a new public private key pair Pi created by key derivation is used.

| Advantages                                                        | Drawbacks                                                                  |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Serves the basic purpose of notarization                          | Identity of signer cannot be verified - neither manually nor automatically |
| Transactions cannot be linked back to signer                      |                                                                            |
| No third party can observe the transaction history                |                                                                            |
| Signer can prove ownership of keys used for signing a transaction |                                                                            |

## Blinded Notarization with Verifiable identity

The Identity of party P with public key PK is attested on Blockchain.
Party P calculates Hashes H1..n of data sets D1..n. For each hash Hi a signature Si with the private key of PK is created. Both Hi and Si are stored in a transaction for which a new public private key pair Pi is created by key derivation.

| Advantages                                                                                                                                                 | Disadvantages                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Serves the basic purpose of notarization                                                                                                                   | Verification of signature requires information about the signers identity, which could typically require the hashed data itself |
| Transaction cannot be linked back to signer                                                                                                                |                                                                                                                                 |
| Signer of a transaction can be validated by verifying the signature with the attested public key                                                           |                                                                                                                                 |
| No third party can learn about the identity of a transaction signer without additional knowledge about the transaction signer, e.g. the name of the party  |
| Signer can prove ownership of keys used for signing a transaction                                                                                          |                                                                                                                                 |

# Implementation Aspects

Basically we could let customers decide which approach the want to apply to their notarizations (and now to be mad, it could be driven by data types (facepalm).
