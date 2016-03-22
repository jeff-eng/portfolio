(function(module) {
  var projectController = {};

  Project.fetchAll(projectView.init);
  
  projectController.index = function() {
    $('.tab-sections').hide();
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
})(window);
