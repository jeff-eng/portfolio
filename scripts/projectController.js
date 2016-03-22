(function(module) {
  var projectController = {};

  controller.about = function() {
    $('.tab-sections').hide();
    $('#about').fadeIn();
  };

  controller.profile = function() {
    $('.tab-sections').hide();
    $('#profile').fadeIn();
  };

  controller.projects = function() {
    Project.fetchAll(projectView.init);
    $('.tab-sections').hide();
    $('#projects').fadeIn();
  };

  controller.contact = function() {
    $('.tab-sections').hide();
    $('#contact').fadeIn();
  };

  module.projectController = projectController;
})(window);
