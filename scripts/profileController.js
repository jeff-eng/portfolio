(function(module) {
  var profileController = {};

  profileController.index = function() {
    $('.tab-sections').hide();
    $('#profile').fadeIn();
  };

  module.profileController = profileController;
})(window);
