(function(module) {
  var projects = [];

  function Project(opts) { //Project object constructor function
    for (var key in opts) {
      this[key] = opts[key];
    }
  }

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').html());
    this.publishtime = 'about ' + parseInt((new Date() - new Date(this.createdOn)) / 60 / 60 / 24 / 1000) + ' days ago';
    return template(this);
  };

  Project.fetchAll = function(callbackFunction) {
    if (localStorage.rawData) { //If localStorage exists, then we need to retrieve it from localStorage instead of having to go out the server to retrieve the data everytime.
      loadAll(JSON.parse(localStorage.rawData));
      callbackFunction(); //call the callbackFunction
    } else {  //If localStorage doesn't exist, get it from the JSON file.
      $.getJSON('/data/projectdata.json', function(jsonData) {
        loadAll(jsonData); //calling the loadAll function and passing in the json data
        localStorage.rawData = JSON.stringify(jsonData); //rewriting localStorage with new data
        callbackFunction(); //call the callbackFunction
      });
      
    }
  };


  // projects.forEach(function(a){
  //   $('#projects').append(a.toHtml());
  // });

  //Create a Project.loadAll method (loadAll is just making all the articles)
  function loadAll(projectdata) {
    projectdata.sort(function(a, b) { //sorts projects from newest to oldest
      return (new Date(b.createdOn)) - (new Date(a.createdOn));
    });

    projectdata.forEach(function(ele) { //
      projects.push(new Project(ele)); // here a new project is being instantiated with the
    });
  }

})(window); //we need to pass in the window object to this IIFE to give the IIFE access to global variables
