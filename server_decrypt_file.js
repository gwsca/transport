var CryptoJS = require('crypto-js');
var file = process.argv[2];
var key = process.argv[3];
function getContents(file)
{
	var fs = require('fs');
	fs.readFile(file, 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		return data;
	});
}
var decrypted = CryptoJS.AES.decrypt(getContents(file), key, { mode: CryptoJS.mode.CFB });
console.log(decrypted);