# js-blockchain
Learn how to build a simple blockchain  in javascript


By: Gunnar Pope 3/16/2018

## Dependencies
* Node.js
* Understanding of basic terminal commands

## Notes: I built this blockchain application using a tutorial from [This Excellent Post on Medium](https://medium.com/digital-alchemy-holdings/learn-build-a-javascript-blockchain-part-1-ca61c285821e)

## Output:
* Using this program, you can build a simple blockchain application where users can add data, validate blocks using SHA256, and learn basic blockchain fundamentals. Here is an example output for the first 10 blocks in the blockchain:
```
js-blockchain$ node main.js 
{
    "chain": [
        {
            "index": 0,
            "timestamp": 0,
            "data": "2018:03:16 20:34:39.265",
            "previousHash": "0",
            "hash": "d2f0ef2d3bf7883f1b200db81d36f13e5be1d48e41b2a3e8db6d1691f691ce71",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": "2018:03:16 20:34:39.267",
            "data": {
                "amount": 1
            },
            "previousHash": "d2f0ef2d3bf7883f1b200db81d36f13e5be1d48e41b2a3e8db6d1691f691ce71",
            "hash": "80dc64341020636a8891d735c907f927c725614517d00e427f3255854f097a6f",
            "nonce": 0
        },
        {
            "index": 2,
            "timestamp": "2018:03:16 20:34:39.268",
            "data": {
                "amount": 2
            },
            "previousHash": "80dc64341020636a8891d735c907f927c725614517d00e427f3255854f097a6f",
            "hash": "a5f15562c5640888761c3f7a3c6b37db1845fc929e775670c61714f788e9e872",
            "nonce": 0
        },
        {
            "index": 3,
            "timestamp": "2018:03:16 20:34:39.268",
            "data": {
                "amount": 3
            },
            "previousHash": "a5f15562c5640888761c3f7a3c6b37db1845fc929e775670c61714f788e9e872",
            "hash": "bd4f430974dd08b0ad1c7d0a28fb6b1c8bcd7a68598ee76ecff9ac2688dfbb5e",
            "nonce": 0
        },
        {
            "index": 4,
            "timestamp": "2018:03:16 20:34:39.268",
            "data": {
                "amount": 4
            },
            "previousHash": "bd4f430974dd08b0ad1c7d0a28fb6b1c8bcd7a68598ee76ecff9ac2688dfbb5e",
            "hash": "438a07114d5662a83e11aca248a94324c6b78231c42c8ef950b0fd3dfdf29f98",
            "nonce": 0
        },
        {
            "index": 5,
            "timestamp": "2018:03:16 20:34:39.269",
            "data": {
                "amount": 5
            },
            "previousHash": "438a07114d5662a83e11aca248a94324c6b78231c42c8ef950b0fd3dfdf29f98",
            "hash": "eeeda4ce3117593e296293d2cecf4ef43eeebef50f30c1f60f8e9287bc3c800b",
            "nonce": 0
        },
        {
            "index": 6,
            "timestamp": "2018:03:16 20:34:39.269",
            "data": {
                "amount": 6
            },
            "previousHash": "eeeda4ce3117593e296293d2cecf4ef43eeebef50f30c1f60f8e9287bc3c800b",
            "hash": "1c3db15dde877db00d268a9b63a93578e9401396a374667855c074968f45d53a",
            "nonce": 0
        },
        {
            "index": 7,
            "timestamp": "2018:03:16 20:34:39.272",
            "data": {
                "amount": 7
            },
            "previousHash": "1c3db15dde877db00d268a9b63a93578e9401396a374667855c074968f45d53a",
            "hash": "3489490a8773fda49890053f29a131e0ade68991c496be7b766123a57aa29567",
            "nonce": 0
        },
        {
            "index": 8,
            "timestamp": "2018:03:16 20:34:39.272",
            "data": {
                "amount": 8
            },
            "previousHash": "3489490a8773fda49890053f29a131e0ade68991c496be7b766123a57aa29567",
            "hash": "93e7b833594409bc3852cd69ab99112807d1c916cf5caf6c01c18b01d8e4592c",
            "nonce": 0
        },
        {
            "index": 9,
            "timestamp": "2018:03:16 20:34:39.273",
            "data": {
                "amount": 9
            },
            "previousHash": "93e7b833594409bc3852cd69ab99112807d1c916cf5caf6c01c18b01d8e4592c",
            "hash": "2dac3a2f0429bc5f9673d223b7df409f71ce1e8f1cff71e5546cdd022feb1c5d",
            "nonce": 0
        }
    ]
}
Is blockchain valid? true
```

### Come join me in the learning process!
### -Gunnar

