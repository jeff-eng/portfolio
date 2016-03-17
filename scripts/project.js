var projects = [];

function Project (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
}

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project-template').html())
  this.publishtime = 'about ' + parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000) + ' days ago';
  return template(this);
};

projectData.sort(function(a,b) {
  return (new Date(b.createdOn)) - (new Date(a.createdOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
