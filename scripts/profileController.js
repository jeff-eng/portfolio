(function(module) {
  var profileController = {};

  profileController.index = function() {
    $('.tab-sections').hide();
    $('#profile').fadeIn();
  };

//TODO: create projectController.loadByProjectName function

//TODO: create projectController.loadByProjectCategory function

  module.profileController = profileController;
})(window);
