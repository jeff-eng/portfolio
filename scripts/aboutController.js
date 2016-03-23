(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-sections').hide();
    $('#about').fadeIn();
  };

  repos.requestRepos(repoView.index);

  module.aboutController = aboutController;
})(window);
