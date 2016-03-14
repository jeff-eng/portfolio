var projectView = {};

// Fades in only the tab that was clicked and hides the rest
projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-sections').hide();
    $('#' + $(this).data('navigation')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

//Populates the Filters
projectView.populateFilters = function() {
  $('article').each(function() {
    if(!$(this).hasClass('template')) {
      var value = $(this).find('span').text();
      var optionEl = 'option value="' + value + '">' + value + '</option>';
      $('#category-filter').append(optionEl);
    }
  });
};

// //Filters the projects by individual or team categories
// projectView.handleCategoryFilter = function() {
//   $()
// };
//
// //Filters the projects by project name
// projectView.handleProjectNameFilter = function() {
//
// };

//Calls all the functions once the DOM has loaded
$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.handleProjectNameFilter();
  projectView.handleMainNav();
});
