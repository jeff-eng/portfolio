(function(module) {
  var projectController = {};


  projectController.index = function() {
    $('.appendedprojects').remove();
    Project.fetchAll(projectView.init);
    $('.tab-sections').hide();
    $('#projects').fadeIn();
    repos.requestRepos(repoView.index);
  };
  
  module.projectController = projectController;
})(window);
