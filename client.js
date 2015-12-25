var fs 					= require('fs');
var net			 		= require('net');
var randomstring		= require('randomstring');
var ip					= '127.0.0.1';
var port 				= 1337;
var masterPass			= 'test123';
var encryptedFile		= '';
var CryptoJS 			= require("crypto-js");
var rencrypt 			= false; // change if no content is encrypted already

function openTransaction()
{
	var connection = net.connect(port, ip, function() {
		console.log("Connected to server.");
		connection.write('openJobTask()()()()'+masterPass);
		fs.readFile(encryptedFile, 'utf8', function (err,data) {
		  if (err) {
		    return console.log(err);
		  }
		  connection.write(randomstring.generate(4)+'oxfordDictonary'+encryptFile(data));
		});
	});
	setTimeout(function(){
		connection.write('closeJobTask()()()()');
		connection.destroy();
		console.log('Secure shell closed.');
	},15000);
}
encryptedFile = process.argv[2];
masterPass = process.argv[3];

function encryptFile(contents)
{
	var key = randomstring.generate(32);
	console.log('Encryption key to decrypt files (IF encrypting) : ' + key);
	var encrypted = CryptoJS.AES.encrypt(contents, key, { mode: CryptoJS.mode.CFB });
	if(rencrypt)
	{
		return encrypted;
	}
	else
		return contents;
}

setTimeout(function(){openTransaction();}, 5000);
