var http = require('http')//http was wrongly type

var myname = function() {// typo in function
  return "Here is my IP address" // switch console.log with return
}

async function callHttpbi() { //added  async to this function
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
      function (response) {
        var str = "";
        response.setEncoding('utf8');
        response.on('data', function (data) {
          str += data;
        });
        response.on('end', function () {
          var result = JSON.parse(str);
          myips = result.origin;
          resolve(myips);// added myips variable to the resolve function
        });
      }
    );
});

let result = await promise;
return result;//added a return statement
}
async function executeAsyncTask(){ //added async to the function
  const valueA = await callHttpbi()
  const valueB = myname();
  console.log(valueB+" "+valueA+", "+valueA)//added extra valueA to match the output
// Output Here is my IP address 149.24.160.1, 149.24.160.1
} // missing curlybrace

executeAsyncTask() //executing function 