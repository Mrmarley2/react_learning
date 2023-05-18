// class-based connector to establish 
const Connection = require('tedious').Connection;
const config = {
    server: 'BIS-000-SP05.bis.xswhealth.nhs.uk,14431',
    authentication: {
        type: 'default',
        options: {
            userName: 'jeffrey.harrisskitt',
            password: 'Harri0600155'
        }
    },
    options: {
        encrypt: true,
        database: 'BIS-000-SP05.bis.xswhealth.nhs.uk,14431'
    }
};

// uses class-based connector to establish connection
const connection = new Connection(config);
connection.on('connect', function(err) {
    console.log('Connected');
    // executes a function to return requests (see below)
    executeStatement();
});

// establishes connection
connection.connect();

// variables required for data fetch
const Request = require('tedious').Request;  
const TYPES = require('tedious').TYPES; 

// request function to return data
function executeStatement() {  
    let request = new Request("SELECT * AS DataCheck FROM [dbo].[24-DAY CLASSIC WAIT];", function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    let result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    
    // Close the connection after the final event emitted by the request, after the callback passes
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);  
}  