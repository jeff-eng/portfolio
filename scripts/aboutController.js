(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-sections').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
