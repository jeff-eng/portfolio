(function(module) {
  var projectView = {};

  //Populates the Filters
  projectView.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var value = $(this).attr('data-category');
        var optionEl = '<option value="' + value + '">' + value + '</option>';
        if ($('#category-filter option[value="' + value + '"]').length === 0) {
          $('#category-filter').append(optionEl);
        }
        value = $(this).find('h3').text();
        optionEl = '<option value="' + value + '">' + value + '</option>';
        if ($('#projectname-filter option[value="' + value + '"]').length === 0) {
          $('#projectname-filter').append(optionEl);
        }
      }
    });
  };

  //Filters the projects by individual or team categories
  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#projectname-filter').val('');
    });
  };

  //Filters the projects by project name
  projectView.handleProjectNameFilter = function() {
    $('#projectname-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-projectname="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  projectView.init = function (){ // Calls all the methods declared above
    var $projects = $('#projects');
    Project.all.forEach(function(a){
      $projects.append(a.toHtml());
    });
    projectView.populateFilters();
    projectView.handleCategoryFilter();
    projectView.handleProjectNameFilter();
  };
  module.projectView = projectView; //This exposes the projectView object to the global space
})(window);
