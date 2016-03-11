var articles = [];

function Project (opts) {
  this.projectName = opts.projectName;
  this.developer = opts.developer;
  this.category = opts.category;
  this.createdOn = opts.createdOn;
  this.githubRepoUrl = opts.githubRepoUrl;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category);
  $newArticle.find('h1').html(this.projectName);
  $newArticle.find('span').html(this.developer);
  $newArticle.find('.article-body').html(this.body);

  $newArticle.find('time[pubdate]').attr('title', this.createdOn);

  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000) + ' days ago');

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');

  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.createdOn)) - (new Date(a.createdOn));
});

rawData.forEach(function(ele) {
  articles.push(new Project(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
