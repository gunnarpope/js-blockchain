// main.js
// by: Gunnar Pope on 4/15/2016
// Just learning how to program javascript and build blockchain technologies
// This example follows the Medium tutorial at:
// https://medium.com/digital-alchemy-holdings/learn-build-a-javascript-blockchain-part-1-ca61c285821e

const SHA256 = require('crypto-js/sha256')


class Block {

	// set the initial settings of the genesis block
	constructor(timestamp, data){
		this.index = 0;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = "0";
		this.hash = this.calculateHash();
		this.nonce = 0;
	}

	//create yoru own hash function to verify blocks added.
	//this function takes EVERY piece of block info to produce the hash (very secure!)
	calculateHash(){
		return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();

	}

	mineBlock(difficulty){

	}
}

class Blockchain{
	constructor(){
		this.chain = [this.createGenesis()]
	}

	createGenesis(){
		return new Block(0,"01/01/2017","Genesis Block", "0")
	}

	latestBlock(){
		return this.chain[this.chain.length - 1]
	}

	// this function creates a new block, that is initialized 
	// with a timestamp and data in the Block constructor
	addBlock(newBlock){
		newBlock.previousHash = this.latestBlock().hash;
		newBlock.index = this.latestBlock().index + 1;
		newBlock.hash = newBlock.calculateHash();
		this.chain.push(newBlock);
	}

	checkValid() {
		for(let i = 1; i < this.chain.length; i++){
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i-1];

			if (currentBlock.hash !== currentBlock.calculateHash()){
				return false;
			}

			if (currentBlock.previousHash !== previousBlock.hash){
				return false;
			}
		}
	}
}

let jsChain = new Blockchain();
jsChain.addBlock(new Block("03/15/2018",{amount: 5}));
jsChain.addBlock(new Block("03/16/2018",{amount: 20}));

console.log(JSON.stringify(jsChain, null, 4));
console.log("Is blockchain valid?" + jsChain.checkValid());