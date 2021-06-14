const KNoTCloudWebSocket = require('@cesarbr/knot-cloud-websocket');
const client = new KNoTCloudWebSocket({
  protocol: 'wss',
  hostname: 'ws.knot.cloud',
  port: 443,
  pathname: '/',
  id: 'c2be8046-cbe5-11eb-b8bc-0242ac130003',
  token: 'd5265dbc4576a88f8654a8fc2c4d46a6d7b85574',
});

// client.on('ready', () => {
//   client.register({
//     id: '82asd6a67sd5a7as5d',
//     type: 'knot:thing',
//     name: 'Light Sensor',
//   });
// });
// client.on('registered', (thing) => {
//   console.log('Registered', thing);
//   client.close();
// });

client.on('ready', () => {
    client.getData('7a6g891v7ae897', [1,2,3,4,6,9]);
});
client.on('data', (data) => {
    console.log(JSON.stringify(data, null, 2));
});
client.on('error', (err) => {
    console.error(err);
    console.log('Connection refused');
    client.close();
});

client.connect();