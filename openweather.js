


function id( cityID ) {
    var key = 'f5c062dbc12381c3fb8eea5e5cad2799';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
   
    .then(function(resp1) { return resp1.json() }) // Convert data to json
    .then(function(data1) {
      console.log(data1);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  // window.onload = function() {
    id( "2172797" );
  // }

/////////////////////////////////////////////////////////////////////////////

  function name( cityName ) {
    var key = 'f5c062dbc12381c3fb8eea5e5cad2799';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)  

    .then(function(resp2) { return resp2.json() }) // Convert data to json
    .then(function(data2) {
      console.log(data2);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  // window.onload = function() {
    name( "London" );
  // }

/////////////////////////////////////////////////////////////////////////////


  function latlon( lat, lon ) {
    var key = 'f5c062dbc12381c3fb8eea5e5cad2799';
     
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + key) 
    .then(function(resp3) { return resp3.json() }) // Convert data to json
    .then(function(data3) {
      console.log(data3);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  // window.onload = function() {
    latlon( "33","65" );
  // }