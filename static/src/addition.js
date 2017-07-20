var api = '/api/addition';

// Make a GET request
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

// Make a GET request which returns a JSON response
var getJSON = function(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


var service = new Vue({
  el: '#service',
  data: {
    number1: "0",
    number2: "0",
    result: "0.0"
  },
  methods: {
    /* Since the callback is actually moving the data somewhere where it can be
       used by this instance, it has to be its own instance method.

       Sets `result` to the `response` attribute of the object sent by the
       Python function addition.addition_response()

       :param data: The JSON data returned by getJSON()
    */
    getSumCallback: function(data){
        this.result = data['response'];
    },

    /* Calls the `addition` service from the exposed API
    */
    getSum: function() {
        var params = '?' + 'number1=' + this.number1 + '&' + 'number2=' + this.number2;
        getJSON(api + params, this.getSumCallback)
    }
  }
})