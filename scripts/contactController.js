(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('.tab-sections').hide();
    $('#contact').fadeIn();
  };

  module.contactController = contactController;
})(window);
