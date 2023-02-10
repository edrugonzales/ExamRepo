After running the exam script

1st Error encountered

 - crypto is not defined

Resolution

 - Install and import crypto package
 
2nd Error encountered
 
 - The value "undefined" is invalid for option "privateKeyEncoding.passphrase"
 
Resolution
 
 - We use crypto as our encryption tech but haven't use passphrase as option
 - So did some research on how passphrase work and learn that i just need to put it in the option and the key generated buy crypto will have a passphrase within the ecrypted key
 
3rd Error encountered
 
 - fs is not defined
 
Resolution
 
 - Import file system
 - We use fs in writing reports and manipulating docs like clearance
 
4th Error encountered
 
 - No such file or directory, open './public.pem'
 - No such file or directory, open './private.pem'
 
Resolution
 
 - Change filepath of './public.pem' and './private.pem' to '.privatepem' due to fs save the encrypted key to a file called 'publicpem' and 'privatepem'

5th Error encounered

 - The "data" argument must be an instance of Buffer for variable 'plaintext'

Resolution
 
 - Research how to convert string type variables to Buffer
 - Use Buffer.from() function to convert string data type to buffer
 
6th Error encountered

 - EVP_DecryptFinal_ex:bad decrypt
 
Resolution

 - Passphrase use when creating sign and verifying privateKey is 'Hello World'
 - Change passphrase to the set passphrase of 'hellokey'

7th Error encountered

 - Variable verify is not defined
 
Resolution

 - Change variable verify to the existing variable 'verifiedSignature'
 
8th Error encountered

 - Code to verify signature
 
Resolution

 - Research about creating and verifying signatures and found 'crypto.verify' function
 - crpto.verify needs (mode, message, publicKey, signature) as parameters
 - signature data type should be in buffer type so remove the conversion toString function in creating signature

After resolving the errors console will return True if the 'plainText' value pass to crypto.verify function is same with the value pass in crypto.sign function
else the console will return false