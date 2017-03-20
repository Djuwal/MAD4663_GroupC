angular.module('app.controllers', [])

.controller('coachCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('exercisesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('trackersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('socialCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('yogaCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$interval', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $interval) {

    /* DW Added functionality */
    $scope.yogaPoseSelect = []; // declare array to hold poses for select
    $scope.videoURL = ""; // declare variable for the VideoURL of the yoga pose
    // fill the yogapose select box
    $scope.fillYogaPoseSelect = function () {
        // get all of the poses stored in the database
        $cordovaSQLite.execute(db, "SELECT ID, YogaPoseName FROM YogaPose ORDER BY ID ASC").then(function (result) {
            // if there are records
            if (result.rows.length) {
                // for each record
                for (var i = 0; i < result.rows.length; i++) {
                    // add them to the yogaPoseSelect array
                    $scope.yogaPoseSelect.push({ id: result.rows.item(i).ID, name: result.rows.item(i).YogaPoseName });
                }
            }
            // if no records
            else {
                // log the fact that there are no records
                console.log("No data found");
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + error);
        });
    }
    // call the fill of select method
    $scope.fillYogaPoseSelect();

    // the update method
    $scope.update = function (item) {
        // get the selected yoga pose
        $cordovaSQLite.execute(db, "SELECT YogaVideoURL FROM YogaPose WHERE ID = " + item.id).then(function (result) {
            // if a url exists
            if (result.rows.item(0).YogaVideoURL !== "" && result.rows.item(0).YogaVideoURL !== null) {
                // get the url and store it in variable
                $scope.videoURL = result.rows.item(0).YogaVideoURL;
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + error);
        });
    }

    /* End DW Functionality */

}])

.controller('runningJoggingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('bikingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('weightLiftingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('hikingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('stepsCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$interval', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $interval) {

    /* DW Added functionality */

    // add the entered steps to the table
    $scope.addSteps = function () {
        // setup the query
        var query = "INSERT INTO StepCount(StepValue, StepDate) VALUES (?, Date('now'))";
        // add the steps
        $cordovaSQLite.execute(db, query, [$scope.theSteps]);
        // call the load method to refresh the page
        $scope.load();
        // clear the input box for the steps entry
        $scope.theSteps = '';
    }

    // on page load
    $scope.load = function () {
        $scope.theStepTot = 0; // intiate the step total variable

        // get the sum of the steps for today's date
        $cordovaSQLite.execute(db, "SELECT SUM(StepValue) AS theSteps FROM StepCount WHERE Date(StepDate) = Date('now')").then(function (result) {
            // if there are steps recorded for the day
            if (result.rows.item(0).theSteps !== "" && result.rows.item(0).theSteps !== null && result.rows.item(0).theSteps > 0) {
                // store the sum of the steps
                $scope.theStepTot = result.rows.item(0).theSteps;
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + error);
        });

        $scope.alldata = []; // variable to store an array of steps
        // get the last 5 sums the step counts grouped by date
        $cordovaSQLite.execute(db, "SELECT SUM(StepValue) AS theSteps, Date(StepDate) AS theDate FROM StepCount GROUP BY theDate ORDER BY theDate DESC LIMIT 5").then(function (result) {
            // if records exist
            if (result.rows.length) {
                // for each of the records
                for (var i = 0; i < result.rows.length; i++) {
                    // store in the allData variable
                    $scope.alldata.push({ name: result.rows.item(i).theSteps, theDate: result.rows.item(i).theDate });
                }
            }
            // if no records exist
            else {
                console.log("No data found");
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + error);
        });
    }

    // call the load method at start
    $interval(callAtStart, 500, 1);

    // method to call the load method
    function callAtStart() {
        $scope.load();
    }

    /* End DW Added functionality */

}])

.controller('caloriesCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$interval', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $interval) {

    /* DW Added functionality */

    // add calories to database
    $scope.addCalories = function () {
        // setup the query to add the calories
        var query = "INSERT INTO CalorieCount(CalorieValue, CalorieDate) VALUES (?, Date('now'))";
        // save the calories to the table
        $cordovaSQLite.execute(db, query, [$scope.theCalories]);
        // refresh the information on page
        $scope.load();
        // reset the calories input box
        $scope.theCalories = '';
    }

    // on page load
    $scope.load = function () {
        $scope.theCalorieTot = 0; // set the calorie total variable to 0

        // get the sum of all calories entered for the day
        $cordovaSQLite.execute(db, "SELECT SUM(CalorieValue) AS theCalories FROM CalorieCount WHERE Date(CalorieDate) = Date('now')").then(function (result) {
            // if records exist for the day
            if (result.rows.item(0).theCalories !== "" && result.rows.item(0).theCalories !== null && result.rows.item(0).theCalories > 0) {
                // store the value
                $scope.theCalorieTot = result.rows.item(0).theCalories;
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + error);
        });

        $scope.alldata = []; // array to store the sum of the past 5 record sums
        // get the sum of calories for the previous 5 existing days in table
        $cordovaSQLite.execute(db, "SELECT SUM(CalorieValue) AS theCalories, Date(CalorieDate) AS theDate FROM CalorieCount GROUP BY theDate ORDER BY theDate DESC LIMIT 5").then(function (result) {
            // if records exist
            if (result.rows.length) {
                // for each record
                for (var i = 0; i < result.rows.length; i++) {
                    // store in the array
                    $scope.alldata.push({ name: result.rows.item(i).theCalories, theDate: result.rows.item(i).theDate });
                }
            }
            // if there were no records
            else {
                console.log("No data found");
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + error);
        });
    }

    // method to call the load method
    $interval(callAtStart, 500, 1);

    // call the load method
    function callAtStart() {
        $scope.load();
    }

    /* End DW functionality */

}])

.controller('activeMinutesCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$interval', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $interval) {

    /* DW Added Functionality */

    // the on load method
    $scope.load = function () {
        $scope.theActiveTot = "00:00:00"; // set the active total time to 0
        var theTempTime = 0; // instantiate temptime variable
        var convertedTime = ""; // instantiate convertedtime variable
        $scope.date = new Date(); // instantiate date variable

        // get the sum of the total active time for the day
        $cordovaSQLite.execute(db, "SELECT SUM(TimeValue) AS theTime FROM ActiveTime WHERE Date(ActiveDate) = Date('now')").then(function (result) {
            // if there are records
            if (result.rows.item(0).theTime !== "" && result.rows.item(0).theTime !== null && result.rows.item(0).theTime > 0) {
                // set the temp time variable to the sum of active time
                theTempTime = result.rows.item(0).theTime;
                // convert that time into proper format
                $scope.theActiveTot = converTime(theTempTime);
            }
        },
        // if there was an error
        function (error) {
            // tell the user
            console.log("error" + error);
        });

        $scope.alldata = []; // to store an array of previous 5 existing dates
        // get the previous 5 existing dates sum of active minutes
        $cordovaSQLite.execute(db, "SELECT SUM(TimeValue) AS theTime, Date(ActiveDate) AS theDate FROM ActiveTime GROUP BY theDate ORDER BY theDate DESC LIMIT 5").then(function (result) {
            // if records exist
            if (result.rows.length) {
                // for each record
                for (var i = 0; i < result.rows.length; i++) {
                    // store the time
                    theTempTime = result.rows.item(i).theTime;
                    // convert the time into a usable format
                    convertedTime = converTime(theTempTime);
                    // store the times in the array
                    $scope.alldata.push({ name: convertedTime, theDate: result.rows.item(i).theDate });
                }
            }
            // if no records
            else {
                // log no records
                console.log("No data found");
            }
        },
        // if error
        function (error) {
            // log the error
            console.log("error" + error);
        });

        // use this if you want to see all of the records
        /*$scope.theRecords = [];
        $cordovaSQLite.execute(db, "SELECT TimeValue, Date(ActiveDate) AS theDate FROM ActiveTime ORDER BY theDate DESC").then(function (result) {
            if (result.rows.length) {
                for (var i = 0; i < result.rows.length; i++) {
                    $scope.theRecords.push(result.rows.item(i));
                }
            } else {
                console.log("No data found");
            }
        }, function (error) {
            console.log("error" + error);
        });*/
    }

    // Run once. Load the data from the database.
    $interval(callAtStart, 500, 1);

    // calls the load method
    function callAtStart() {
        $scope.load();
    }

    // function to convert the time into proper format
    function converTime(theTime) {
        
        var sec_num = parseInt(theTime, 10); // store variable
        var hours   = Math.floor(sec_num / 3600); // get the hours
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60); // get the minutes
        var seconds = sec_num - (hours * 3600) - (minutes * 60); // get the seconds

        if (hours   < 10) {hours   = "0"+hours;} // if hours are less than 10, add a 0 to front
        if (minutes < 10) {minutes = "0"+minutes;} // if minutes are less than 10, add a 0 to front
        if (seconds < 10) {seconds = "0"+seconds;} // if seconds are less than 10, add a 0 to front
        return hours+':'+minutes+':'+seconds; // return the proper format
    }

    /* end DW functionality */

}])

.controller('friendsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('coachesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('myInfoCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$interval', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $interval, $ionicModal) {

    $scope.userInfo = []; // array to store user information
    // method fill the user array
    $scope.fillUserInfo = function () {
        // get the user information from the database - as this is a sample program, we only care about the first entry
        $cordovaSQLite.execute(db, "SELECT * FROM User_Table WHERE ID = 1").then(function (result) {
            // if rows exist
            if (result.rows.length) {
                // for each record
                for (var i = 0; i < result.rows.length; i++) {
                    // store the user information in the array
                    $scope.userInfo.push(result.rows.item(i));
                }
            }
            // if no records exist
            else {
                // log this information
                console.log("No data found");
            }
        },
        // if errors occur
        function (error) {
            // log those errors
            console.log("error" + error);
        });
    }
    // fill the user information fields on page load
    $scope.fillUserInfo();

    /* End DW functionality */
}])

.controller('clientListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('commissioner_GordonCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('harley_QuinnCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('poison_IvyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('manageMembersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('manageYogaPosesCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$interval', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $interval, $ionicModal) {

    $scope.yogaPoses = []; // array to store all poses in database
    $scope.videoURL = ""; // array to store the video url of the poses
    // method to fill the yogaPoses array
    $scope.fillYogaPoses = function () {
        // get all yoga poses in database
        $cordovaSQLite.execute(db, "SELECT ID, YogaPoseName, YogaVideoURL FROM YogaPose ORDER BY YogaPoseName ASC").then(function (result) {
            // if records exist
            if (result.rows.length) {
                // for each record
                for (var i = 0; i < result.rows.length; i++) {
                    // fill the array
                    $scope.yogaPoses.push(result.rows.item(i));
                }
            }
            // if no records
            else {
                // log no records
                console.log("No data found");
            }
        },
        // if error occurs
        function (error) {
            // log the error
            console.log("error" + error);
        });
    }
    // fill the yoga poses on page load
    $scope.fillYogaPoses();

    // method to add a pose
    $scope.addPose = function (pose) {
        // setup the insert query
        var query = "INSERT INTO YogaPose(YogaPoseName, YogaVideoURL) VALUES (?,?)";
        // execute the add query
        $cordovaSQLite.execute(db, query, [pose.name, pose.URL]);
        $scope.yogaPoses = []; // reset the yogaPoses array
        $scope.fillYogaPoses(); // fill the yogaPoses array
        $scope.poseName = ''; // reset the pose input
        $scope.poseURL = ''; // reset the url input
    }

    // method to edit the pose
    $scope.editYogaPose = function (thePose) {
        // setup the update query
        var query = "UPDATE YogaPose SET YogaPoseName = ?, YogaVideoURL = ? WHERE ID = ?";
        // execute the update query
        $cordovaSQLite.execute(db, query, [thePose.YogaPoseName, thePose.YogaVideoURL, thePose.ID]);
        $scope.taskModal.hide(); // hide the edit modal
        $scope.yogaPoses = []; // reset the yogaPoses array
        $scope.fillYogaPoses(); // fill the yogaPoses array
        $scope.poseName = ''; // reset the pose input
        $scope.poseURL = ''; // reset the url input
    }

    // method to delete the pose
    $scope.deleteYogaPose = function (delPose) {
        // setup the delete query
        var query = "DELETE FROM YogaPose WHERE ID = ?";
        // execute the delete query
        $cordovaSQLite.execute(db, query, [delPose.ID]);
        $scope.delModal.hide(); // hide the delete modal
        $scope.yogaPoses = []; // reset the yogaPoses array
        $scope.fillYogaPoses(); // fill the yogaPoses array
        $scope.poseName = ''; // reset the pose input
        $scope.poseURL = ''; // reset the url input
    }

    // call the edit pose modal
    $ionicModal.fromTemplateUrl('edit-pose.html', function (modal) {
        // setup the modal
        $scope.taskModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // show the edit modal
    $scope.showEditPose = function (item) {
        // pass in the values from the selected record we are editing
        $scope.thePose = item || {
            important: false,
            completed: false
        };
        // show the modal
        $scope.taskModal.show();
    }

    // on cancel
    $scope.closeEditPose = function () {
        // hide the modal
        $scope.taskModal.hide();
    }

    // call the delete pose modal
    $ionicModal.fromTemplateUrl('delete-pose.html', function (modal) {
        // setup the modal
        $scope.delModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // show the delete modal
    $scope.showDeletePose = function (item) {
        // pass in the values from the selected records we are deleting
        $scope.delPose = item || {
            important: false,
            completed: false
        };
        // show the deletion modal
        $scope.delModal.show();
    }

    // on cancel
    $scope.closeDeletePose = function () {
        // hide the modal
        $scope.delModal.hide();
    }

    /* End DW functionality */

}])

// JC ADDED controller
// *****************************
.controller('infoCtrl', function ($scope, $cordovaSQLite, $interval) {

    $scope.addInfo = function () {
        var query = "INSERT INTO forumDB(comment) VALUES (?)";
        $cordovaSQLite.execute(db, query, [$scope.comment]);
        $scope.load();
        //$scope.form.$setPristine();
        $scope.comment = '';
    }
    $scope.load = function () {
        $scope.alldata = [];
        $cordovaSQLite.execute(db, "SELECT id, comment FROM forumDB ORDER BY id DESC").then(function (result) {
            if (result.rows.length) {
                for (var i = 0; i < result.rows.length; i++) {
                    $scope.alldata.push(result.rows.item(i));
                }
            } else {
                console.log("No data found");
            }
        }, function (error) {
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

// DW Added Controllers
.controller('timerCtrl', ['$scope', function ($scope) {
    $scope.stopwatches = [{ log: [] }]; // setup the stopwatches variable
}])

.controller('trackerCountCtrl', function ($scope, $cordovaSQLite, $interval) {

    // on load method
    $scope.load = function () {
        $scope.theActiveTot = "00:00:00"; // set the activeTot variable
        var theTempTime = 0; // set the temp time variable
        var convertedTime = ""; // set the converted time variable
        $scope.theStepTot = 0; // set the steptot variable
        $scope.theCalorieTot = 0; // set the calorietot variable
        $scope.date = new Date(); // set a date variable

        // get the sum of active time for today
        $cordovaSQLite.execute(db, "SELECT SUM(TimeValue) AS theTime FROM ActiveTime WHERE Date(ActiveDate) = Date('now')").then(function (result) {
            // if records exist for the day
            if (result.rows.item(0).theTime !== "" && result.rows.item(0).theTime !== null && result.rows.item(0).theTime > 0) {
                // store the sum
                theTempTime = result.rows.item(0).theTime;
                // convert the sum into usable format
                $scope.theActiveTot = converTime(theTempTime);
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + error);
        });

        // get the sum of steps for the day
        $cordovaSQLite.execute(db, "SELECT SUM(StepValue) AS theSteps FROM StepCount WHERE Date(StepDate) = Date('now')").then(function (result) {
            // if steps exist for the day
            if (result.rows.item(0).theSteps !== "" && result.rows.item(0).theSteps !== null && result.rows.item(0).theSteps > 0) {
                // store the sum of the steps
                $scope.theStepTot = result.rows.item(0).theSteps;
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + err);
        });

        // get the sum of the calories for the day
        $cordovaSQLite.execute(db, "SELECT SUM(CalorieValue) AS theCalories FROM CalorieCount WHERE Date(CalorieDate) = Date('now')").then(function (result) {
            // if calories exist
            if (result.rows.item(0).theCalories !== "" && result.rows.item(0).theCalories !== null && result.rows.item(0).theCalories > 0) {
                // store the sum
                $scope.theCalorieTot = result.rows.item(0).theCalories;
            }
        },
        // if there was an error
        function (error) {
            // log the error
            console.log("error" + err);
        });

    }

    // Run once. Load the data from the database.
    $interval(callAtStart, 500, 1);

    // call the load method
    function callAtStart() {
        $scope.load();
    }

    // convert the time to usable information
    function converTime(theTime) {

        var sec_num = parseInt(theTime, 10); // store the sum of the time
        var hours = Math.floor(sec_num / 3600); // set the hours
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60); // set the mintues
        var seconds = sec_num - (hours * 3600) - (minutes * 60); // set the seconds

        if (hours < 10) { hours = "0" + hours; } // if hours less than 10, add a 0 to front
        if (minutes < 10) { minutes = "0" + minutes; } // if minutes less than 10, add a 0 to front
        if (seconds < 10) { seconds = "0" + seconds; } // if seconds less than 10, add a 0 to front
        return hours + ':' + minutes + ':' + seconds; // return usable time information
    }

})

// End DW Added Controllers