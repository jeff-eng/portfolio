(function(module) {
  var projectController = {};


  projectController.index = function() {
    Project.fetchAll(projectView.init); //**DONE**: This needs to go back inside the projectController.index function
    $('.tab-sections').hide();
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
})(window);
