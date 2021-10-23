# Self-Attestion and Notarization

::: warning
This specification is still on Draft state
:::

[[toc]]

## Introduction

This SEP outlines different options to self-attest or notarize any arbitrary input on Blockchain. It starts with essential definitions continuing with the application of modern cryptography to build solutions for the use-case.

## Definitions

- A hash function is a one-way function calculating a fix-sized output of any abritary data (see [hash functions](https://en.wikipedia.org/wiki/Hash_function)).
- **Self-Attestion** and **Notarization** is the act of storing arbitary data or a hash of it in a transaction on Blockchain creating an immutable proof of the existence of the data at the time of the transaction.
- A prerequiste for a robust application is that the hash function applied to the input is collison free, which means that no two inputs result in the same output (see [collision-free hash function](https://en.wikipedia.org/wiki/One-way_function#Related_concepts)).
- A signer is the entity owning the private key used to sign a transaction on Blockchain.
- If the entity owning the input data and the entity owning the private key to sign the transaction are the same entity, the process should be called **Self-Attestion**. In an analog world the equivalent is the signing a document by its creator.
- If the entity owning the input data and the entity owning the private key to sign the transaction are different entities, the process should be called **Notarization**. In an analog world the equivalent is the signing a document by a third party such as a notary.

Fromt the definitions it should become clear that there at least two dimensions of **Self-Attestion** and or **Notarization**. First, there is a social dimension: who has the autority to sign statements about the real world? Second a there is a technical dimension: who controls the private keys to sign statements about the real world?

Before going into a more technical discussion of how to apply cryptography to the problem the definition of a [notary public](https://www.merriam-webster.com/dictionary/notary) should be cited for contextual orientation:

> a public officer who attests or certifies writings (such as a deed) to make them authentic and takes affidavits, depositions, and protests of negotiable paper

Based on the definitions above the following distinctive applications are possible.

## Notarization

The notary controls a key pair KP<sub>0</sub>. Users submit data to the notary which calculates the hash and stores it on Blockchain signed with the public key of KP<sub>0</sub>.

| Advantages                           | Drawbacks        |
| ------------------------------------ | ---------------- |
| Serves the purpose of notarization   | No ownership distinction Data ownership i |
| Low technical requirements for users |                  |

## Transparent atttestion with verifiable identity

Party P controls a key pair KP<sub>0</sub>. The public key of KP<sub>0</sub> is used as verifiable identifier on Blockchain. Party P attests data by calculating the hash of it and storing the hash of it on Blockchain signed with the public key of KP<sub>0</sub>.

| Advantages                                                              | Drawbacks                                                                                           |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Serves the purpose of attestation                                       | All attestations can be linked to a party                                                           |
| The attesting party is identified by one public key                     | Number and timing of attestations might contain information not wanted to be provided to the public |
| Ownership of a public key can be proofed by signing a challenge request | Higher technical requirements as the key pair must be stored in a safe manner                       |

## Stealth attestation with unverifiable identity

Party P controls a key pair KP<sub>0</sub>. It calculates the hash of data and stores it on Blockchain signing each transaction with a new individual derived key KP<sub>i</sub>.

| Advantages                                                              | Drawbacks                                                                    |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Serves the purpose of attestation                                       | Identity of signer cannot be verified - neither manually nor automatically   |
| Transactions cannot be linked back to signer                            | Higher technical requirements as key management must support key deriviation |
| No third party can observe the transaction history                      |                                                                              |
| Ownership of a public key can be proofed by signing a challenge request |                                                                              |

## Stealth attestation with verifiable identity

Party P controls a key pair KP0. The public key of KP<sub>0</sub> is used as verifiable identifier on Blockchain. Party P calculates the hash of data and signs it with the public KP<sub>0</sub>. It stores both the hash and the signature on Blockchain signing each transaction with a new individual derived key KP<sub>i</sub>.

| Advantages                                                           | Disadvantages                                                                  |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Serves the purpose of attestation                                    | Complex                                                                        |
| Identity of transaction signer can be verified via signature of hash | Identity verification only possible if hashed data contains identity of signer |
| Transactions cannot be linked back to signer                         |                                                                                |
| Signer can prove ownership of keys                                   |                                                                                |
