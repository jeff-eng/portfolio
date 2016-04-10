(function(module) {

  function Project(opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').html());
    this.publishtime = 'Created about ' + parseInt((new Date() - new Date(this.createdOn)) / 60 / 60 / 24 / 1000) + ' days ago';
    return template(this);
  };

  Project.fetchAll = function(callback) {
    $.getJSON('/data/projectdata.json', function(rawData, status, xhr) {
      var currentEtag = xhr.getResponseHeader('ETag'); //current ETag from JSON data
      var storedEtag = localStorage.getItem('etag'); //localStorage ETag

      //If localStorage exists and the etags in local storage and the json file match, then we need to retrieve the data from localStorage instead of having to go out the server to retrieve the data everytime:
      if (localStorage.rawData && storedEtag === currentEtag) {
        console.log('local storage!');
        var retrievedData = localStorage.getItem('rawData'); //retrieve from local storage
        var parsedJSON = JSON.parse(retrievedData); //parse the stringified data
        loadAll(parsedJSON); //call loadAll function and pass in data from local storage
        callback(); //call the callback function
      } else { //If localStorage data doesn't exist, get the data from the JSON file.
        console.log('Retrieved data from json file');
        storedEtag = xhr.getResponseHeader('ETag'); //retrieve ETag from XHR object
        loadAll(rawData); //calling the loadAll function and passing in the raw data
        //Cache in localStorage to skip the server call:
        var storedData = JSON.stringify(rawData); //Stringify raw data in JSON format
        localStorage.setItem('rawData', storedData); //Stores stringified data in localStorage
        localStorage.setItem('etag', storedEtag); //Set the ETag from XHR object as new localStorage ETag
        callback(); //call the callback function
      }
    });
  };

  function loadAll(projectdata) {
    projectdata.sort(function(a, b) { //sorts projects from newest to oldest
      return (new Date(b.createdOn)) - (new Date(a.createdOn));
    });

    Project.all = [];
    projectdata.forEach(function(ele) { //
      Project.all.push(new Project(ele)); // here a new project is being instantiated with the
    });
  }
  module.Project = Project; // attaching the Project constructor to the module(window) to expose it to the global space
})(window); //we need to pass in the window object to this IIFE to give the IIFE access to global variables
