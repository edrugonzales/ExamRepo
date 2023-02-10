/*const Cryptr = require('cryptr');*/
const crypto = require("crypto")
const fs = require('fs');


// Using a function generateKeyFiles
function generateKeyFiles() {
  
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 520,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'hellokey'
           
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'hellokey'
        }
    });
    // Creating private key file
    fs.writeFileSync("publicpem", keyPair.publicKey);
    fs.writeFileSync("privatepem", keyPair.privateKey);
}
  
// Generate keys
  generateKeyFiles();
  
// Creating a function to encrypt string
function encryptString (plaintext, privateKeyFile, publicKeyFile) {
     //ß const privateKey = fs.readFileSync(privateKeyFile, "utf8");  
     // Set RSA publicKey

    const publicKey = fs.readFileSync(publicKeyFile, "utf8"); 
    const privateKey = fs.readFileSync(privateKeyFile, "utf8"); 

    //signature creation:
    /*const sigstr = crypto.sign('SHA256', plaintext, {key:privateKey, passphrase:'Hello world'}).toString('base64')*/
    const sigstr = crypto.sign('SHA256', plaintext, {key:privateKey, passphrase:'hellokey'})
    const verifiedSignature = crypto.verify('SHA256', plainText, publicKey, sigstr); //insert code here to verify the signature*/
    
    console.log("sig verified using pub key?: ", verifiedSignature);
    
    return "ok";
    
}
  
// Defining a text to be encrypted
const plainText = Buffer.from("Hello world");

// Defining encrypted text
/*const encrypted = encryptString(plainText, "./private.pem","./public.pem");*/
const encrypted = encryptString(plainText, "./privatepem","./publicpem");
