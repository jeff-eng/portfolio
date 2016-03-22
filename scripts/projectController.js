(function(module) {
  var projectController = {};

  projectController.index = function() {
    Project.fetchAll(projectView.init);
    $('.tab-sections').hide();
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
})(window);
