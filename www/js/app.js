// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

// JC ADDED
var db = null;
//var app=angular.module('starter', ['ionic','app.controllers', 'app.routes', 'app.directives','app.services','ngCordova']);

// JC ADDED ngCordova
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova'])

.config(function ($ionicConfigProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

.run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
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

        // JC ADDED - DW Edited
        db = window.openDatabase("iwb.db", "1.0", "sqlitedemo", 2000); // create a database with the name iwb
        // create the forum table
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS forumDB(id integer primary key, comment text, currentdate text)");
        // create the coach table
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS coachDB(id integer primary key, comment text, currentdate text)");
        // create user table
        //$cordovaSQLite.execute(db, "DROP TABLE IF EXISTS User_Table");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS User_Table(ID integer primary key, UserName text, Password text, PrimaryEmail text, Birthday date, PrimaryPhone text, UserFirstName text, UserLastName text, ExerciseType int, IsUser int, IsCoach int, IsAdmin int, UserPic text)");
        //$cordovaSQLite.execute(db, "INSERT INTO User_Table(UserName, Password, PrimaryEmail, Birthday, PrimaryPhone, UserFirstName, UserLastName, ExerciseType, IsUser, IsCoach, IsAdmin) VALUES ('Wonder_Woman', 'ClayBaby', 'wonderwoman@justiceleague.com', '12/01/1941', '555.255.5555', 'Diana', 'Prince', 2, 1, 1, 1)");
        //$cordovaSQLite.execute(db, "DROP TABLE IF EXISTS ActiveTime");
        // create the ActiveTime table
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS ActiveTime(ID integer primary key, TimeValue numeric, ActiveDate text)");
        //$cordovaSQLite.execute(db, "INSERT INTO ActiveTime (TimeValue, ActiveDate) VALUES (5.678, DateTime('now'))");
        // create the StepCount table
        //$cordovaSQLite.execute(db, "DROP TABLE IF EXISTS StepCount");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS StepCount(ID integer primary key, StepValue int, StepDate numeric)");
        // create the CalorieCount table
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS CalorieCount(ID integer primary key, CalorieValue int, CalorieDate numeric)");
        // create Yoga Pose table
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS YogaPose(ID integer primary key, YogaPoseName text, YogaVideoURL text)");
        //$cordovaSQLite.execute(db, "DELETE FROM YogaPose WHERE YogaPoseName = 'Test'");

    });
})

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