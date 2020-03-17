// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev59055.service-now.com/',
  username: 'admin',
  password: 'P455w0rd',
  serviceNowTable: 'change_request'
};

// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  connector.get((data, err) => {
    if (err) console.error('GET error:\n', err);
    else console.log('GET response:\n', data);
  });
  connector.post((data, err) => {
    if (err) console.error('POST error:\n', err);
    else console.log('POST response:\n', data);
  });

}

// Call mainOnObject to run it.
mainOnObject();
