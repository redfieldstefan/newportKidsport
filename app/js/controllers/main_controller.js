'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', function($scope, $location) {

    $scope.redirect = function(destination) {
      console.log('clicked');
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

    angular.element('nav ul li:nth-child(2)').click(function(){
      var navOpen = false;
      if (!navOpen) {
        angular.element('nav ul li ul ').css('display', 'block');
        navOpen = true;

      }
      else {
        angular.element('nav ul li ul ').css('display', 'none');
        navOpen = false;
      }
    });

  }]);
};

