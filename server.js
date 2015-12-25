var fs 					= require('fs');
var net			 		= require('net');
var randomstring		= require('randomstring');
var myMasterPassword 	= randomstring.generate(256);
var runningJob = false;

var server = net.createServer(function(socket) {
	socket.write('This is a secure, confidential server. Access to this server without authorization is forbidden.\r\n');
	socket.on('data', function(data) {
		saveData(data);
	});
});

function saveData(data)
{
	data = data.toString();
	if(data.indexOf("openJobTask") > -1)
	{
		var tData = data;
		tData = tData.replace("openJobTask", "");
		var getPassword = tData.split("()()()()");
		var suppliedPassword = getPassword[1];
		suppliedPassword = suppliedPassword.trim();
		if(suppliedPassword == myMasterPassword)
		{
			runningJob = true;
		}
	}
	else if(data.indexOf('closeJobTask()()()()') > -1)
	{
		runningJob = false;
	}
	else if(runningJob)
	{
		var getPart = data.split("oxfordDictonary");
		var part = data[0]+''+data[1]+''+data[2]+''+data[3];
		data = data.replace(part,"");
		data = data.replace("oxfordDictonary", "");
		createFile('server_received/'+randomstring.generate(13)+'.enc', data);
	}
}

function createFile(file_name, data)
{
	fs.writeFile(file_name, data, function(err) {
		if(err)
		{
			console.log(err);
		}
	});
}

server.listen(1337, '127.0.0.1');

console.log('--------------------------');
console.log('- Secure Transport Shell -');
console.log('--------------------------');
console.log('- Version 1.0 Beta 1r0.2 -');
console.log('--------------------------');
console.log('Password for this session: ' + myMasterPassword);
console.log('--------------------------');