(function(module) {
  var profileController = {};

  profileController.index = function() {
    $('.tab-sections').hide();
    $('#profile').fadeIn();
  };

// //TODO: create projectController.loadByProjectName function
//   projectController.loadByProjectName = function(ctx, next) {
//     var projectData = function(projectsBy)
//   }
// //TODO: create projectController.loadByProjectCategory function
//   projectController.loadByProjectCategory
  module.profileController = profileController;
})(window);
