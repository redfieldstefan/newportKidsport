'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', function($scope, $location) {

    $scope.navOpen = false;
    $scope.windowWidth = window.innerWidth;

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
      var apparelList = angular.element('#apparel');
      if($scope.windowWidth < 750){
        if(apparelList.hasClass('hidden')) {
          apparelList.removeClass('hidden');
        }
        else {
          apparelList.addClass('hidden');
        }
      }
    });

    angular.element('body').click(function() {
      apparelList.removeClass('hidden');
    });

  }]);
};

