/* Make a standard GET request. Currently unused

   :param theUrl: The URL to make the request to
   :param callback: A function taking one parameter that will handle the data
                    returned from the request. The parameter is the data.
*/
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


/* Make a GET request which returns a JSON response

   :param theUrl: The URL to make the request to
   :param callback: A function taking one parameter that will handle the data
                    returned from the request. The parameter is the data.
*/
function getJSON (theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

export { getJSON }
