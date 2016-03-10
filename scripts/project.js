var articles = [];

function Project (opts) {
  this.projectName = opts.projectName;
  this.developer = opts.developer;
  this.category = opts.category;
  this.publishedOn = opts.publishedOn;
  this.githubRepoUrl = opts.githubRepoUrl;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category);
  $newArticle.find('h1').html(this.projectName);
  $newArticle.find('address').html(this.developer);
  $newArticle.find('.article-body').html(this.body);

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');

  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Project(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
