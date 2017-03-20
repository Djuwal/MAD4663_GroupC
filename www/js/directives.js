angular.module('app.directives', [])

/* DW add Directive for stop watch */
.filter('stopwatchTime', function () {
    return function (input) {
        if (input) {

            var elapsed = input.getTime(); // store the time
            var hours = parseInt(elapsed / 3600000, 10); // set the hours
            elapsed %= 3600000; // divide the elapsed time by 3600000
            var mins = parseInt(elapsed / 60000, 10); // set the mintues
            elapsed %= 60000; // divide the elapsed time by 60000
            var secs = parseInt(elapsed / 1000, 10); // set the seconds

            // add 0 to front if less than 10 on hours, minutes, and seconds
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            // return the time
            return hours + ':' + mins + ':' + secs;
        }
    };
})
// setup a new stopwatch factory so the program can access the stopwatch variable and keep time
.directive('bbStopwatch', ['StopwatchFactory', function (StopwatchFactory) {
    return {
        restrict: 'EA',
        scope: true,
        link: function (scope, elem, attrs) {

            var stopwatchService = new StopwatchFactory(scope[attrs.options]);

            scope.startTimer = stopwatchService.startTimer;
            scope.stopTimer = stopwatchService.stopTimer;
            scope.resetTimer = stopwatchService.resetTimer;

        }
    };
}])

.directive('blankDirective', [function(){

}]);