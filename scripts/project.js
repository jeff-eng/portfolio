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
  // var $newArticle = $('article.template').clone();
  // $newArticle.removeClass('template');

  // $newArticle.attr('data-category', this.category);
  // $newArticle.attr('data-project', this.projectName);
  // $newArticle.find('h3').html(this.projectName);
  // $newArticle.find('span').html(this.developer);
  // $newArticle.find('.article-body').html(this.body);
  // $newArticle.find('time[pubdate]').attr('title', this.createdOn);
  // $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000) + ' days ago');
  // $newArticle.append('<hr>');
  // return $newArticle;
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
