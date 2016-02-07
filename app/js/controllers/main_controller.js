'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', function($scope, $location) {

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    };

    angular.element('.small-feature img').mouseenter(function(){
      var thisImg = this.src;
      angular.element('.main img').attr('src', thisImg);
    })

    angular.element('.swatch-options img').mouseenter(function(){
      var thisImg = this.src;
      var thisParent = angular.element(this).parents().children('.swatch img');
      thisParent.attr('src', thisImg);
    });

    angular.element('#apparel').click(function() {
      $scope.windowWidth = window.innerWidth;
      if($scope.windowWidth < 750) {
        var apparelList = angular.element('#apparel-list');
          if(apparelList.hasClass('hidden')) {
            apparelList.removeClass('hidden');
            apparelList.parent('li').css('background', '#66FFCC');
            return apparelList.addClass('show');
          }
          else {
            apparelList.removeClass('show');
            apparelList.parent('li').css('background', 'none');
            apparelList.parent('li').css('outline', 'none');
            return apparelList.addClass('hidden');
          }
      }
    });

  }]);
};

