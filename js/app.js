// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

// JC ADDED
var db=null;
//var app=angular.module('starter', ['ionic','app.controllers', 'app.routes', 'app.directives','app.services','ngCordova']);

// JC ADDED ngCordova
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova'])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // JC ADDED
    db=window.openDatabase("sqlite", "1.0", "sqlitedemo",2000);
    $cordovaSQLite.execute(db, "CREATE TABLE forumDB(id integer primary key, comment text)");
    $cordovaSQLite.execute(db, "CREATE TABLE coachDB(id integer primary key, comment text)");

  });
})



// JC ADDED controller
// *****************************
.controller('infoCtrl', function($scope, $cordovaSQLite, $interval){



  $scope.addInfo=function(){
    var query="INSERT INTO forumDB(comment) VALUES (?)";
    $cordovaSQLite.execute(db,query,[$scope.comment]);
    $scope.load();
    //$scope.form.$setPristine();
    $scope.comment = '';
  }
  $scope.load=function(){
    $scope.alldata=[];
    $cordovaSQLite.execute(db,"SELECT id, comment FROM forumDB ORDER BY id DESC").then(function(result){
      if(result.rows.length){
        for (var i=0; i < result.rows.length; i++){
          $scope.alldata.push(result.rows.item(i));
        }
      } else {
        console.log("No data found");
      }
    }, function(error){
      console.log("error" + err);
    });
  }

  // Run once. Load the data from the database.
  $interval(callAtStart, 500, 1);

  function callAtStart() {
    $scope.load();
  }



})

// End JC Controller.





/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});