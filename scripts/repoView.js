(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('ul').empty(); // need to find out which elements on the DOM to target
    $about.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };
})(window);
