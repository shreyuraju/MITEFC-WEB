//const SerialPort = require('serialport');
const { SerialPort } = require('serialport');
// let port = new SerialPort({
// path: 'COM3',
// baudRate: 9600,
// dataBits: 8,
// stopBits: 1,
// parity: 'none',
// });

const port = new SerialPort({path:'COM4', 
  baudRate: 4800
});


let rfidData = '';

port.on('data', function (data) {
  rfidData += data.toString();
});

// const encoder = new TextEncoder();
// let bytes = encoder.encode(rfidData);
var buff =Buffer.from(rfidData,'utf-8');
console.log(buff);

const NDEF = require('ndef');
let decodedData = NDEF.decodeMessage(buff);
console.log(decodedData)

// Loop through each record in the decoded data
for (const record of decodedData) {
  console.log(record.payload);
}
