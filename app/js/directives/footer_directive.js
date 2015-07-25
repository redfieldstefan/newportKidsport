'use strict';

module.exports = function(app) {
  app.directive('footer', function(){
    return {
      restrict: 'EA',
      scope: {
      },
      templateUrl: './views/templates/footer_template.html'
    }
  });
};
