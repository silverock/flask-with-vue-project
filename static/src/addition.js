import {getJSON} from "requests";

var api = '/api/addition';

var service = new Vue({
  el: '#service',
  data: {
    number1: "0",
    number2: "0",
    result: "0.0"
  },
  methods: {
    /**
     * Since the callback is actually moving the data somewhere where it can be
     * used by this instance, it has to be its own instance method.
     *
     * Sets `result` to the `response` attribute of the object sent by the
     * Python function addition.addition_response()
     *
     * @param {object} data: The JSON data returned by getJSON()
     */
    getSumCallback: function(data){
        this.result = data['response'];
    },

    /**
     * Calls the `addition` service from the exposed API
     */
    getSum: function() {
        var params = '?' + 'number1=' + this.number1 + '&' + 'number2=' + this.number2;
        getJSON(api + params, this.getSumCallback)
    }
  }
})