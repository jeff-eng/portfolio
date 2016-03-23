(function(module) {
  var projectController = {};

  Project.fetchAll(projectView.init); //**TODO: This needs to go back inside the projectController.index function

  projectController.index = function() {
    $('.tab-sections').hide();
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
})(window);
