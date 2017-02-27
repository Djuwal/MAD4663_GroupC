angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.coach', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/coach.html',
        controller: 'coachCtrl'
      }
    }
  })

  .state('tabsController.exercises', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/exercises.html',
        controller: 'exercisesCtrl'
      }
    }
  })

  .state('tabsController.trackers', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/trackers.html',
        controller: 'trackersCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.social', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/social.html',
        controller: 'socialCtrl'
      }
    }
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.yoga'
      2) Using $state.go programatically:
        $state.go('tabsController.yoga');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.yoga', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/yoga.html',
        controller: 'yogaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/yoga.html',
        controller: 'yogaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.runningJogging'
      2) Using $state.go programatically:
        $state.go('tabsController.runningJogging');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab2/page9
  */
  .state('tabsController.runningJogging', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/runningJogging.html',
        controller: 'runningJoggingCtrl'
      },
      'tab2': {
        templateUrl: 'templates/runningJogging.html',
        controller: 'runningJoggingCtrl'
      }
    }
  })

  .state('tabsController.biking', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/biking.html',
        controller: 'bikingCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.weightLifting'
      2) Using $state.go programatically:
        $state.go('tabsController.weightLifting');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page13
      /page1/tab2/page13
  */
  .state('tabsController.weightLifting', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/weightLifting.html',
        controller: 'weightLiftingCtrl'
      },
      'tab2': {
        templateUrl: 'templates/weightLifting.html',
        controller: 'weightLiftingCtrl'
      }
    }
  })

  .state('tabsController.hiking', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/hiking.html',
        controller: 'hikingCtrl'
      }
    }
  })

  .state('tabsController.steps', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/steps.html',
        controller: 'stepsCtrl'
      }
    }
  })

  .state('tabsController.calories', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/calories.html',
        controller: 'caloriesCtrl'
      }
    }
  })

  .state('tabsController.activeMinutes', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/activeMinutes.html',
        controller: 'activeMinutesCtrl'
      }
    }
  })

  .state('friends', {
    url: '/page16',
    templateUrl: 'templates/friends.html',
    controller: 'friendsCtrl'
  })

  .state('coaches', {
    url: '/page17',
    templateUrl: 'templates/coaches.html',
    controller: 'coachesCtrl'
  })

  .state('myInfo', {
    url: '/page18',
    templateUrl: 'templates/myInfo.html',
    controller: 'myInfoCtrl'
  })

  .state('clientList', {
    url: '/page19',
    templateUrl: 'templates/clientList.html',
    controller: 'clientListCtrl'
  })

  .state('commissioner_Gordon', {
    url: '/page20',
    templateUrl: 'templates/commissioner_Gordon.html',
    controller: 'commissioner_GordonCtrl'
  })

  .state('harley_Quinn', {
    url: '/page21',
    templateUrl: 'templates/harley_Quinn.html',
    controller: 'harley_QuinnCtrl'
  })

  .state('poison_Ivy', {
    url: '/page22',
    templateUrl: 'templates/poison_Ivy.html',
    controller: 'poison_IvyCtrl'
  })

  .state('manageMembers', {
    url: '/page24',
    templateUrl: 'templates/manageMembers.html',
    controller: 'manageMembersCtrl'
  })

$urlRouterProvider.otherwise('/page1/page4')

  

});