/*global define, window, setTimeout*/
(function () {
    'use strict';
    define([
        'jasmine',
        'jasmineHtml',
        'simpleMath.spec'
    ], function (jasmine) {

        var initialize = function () {

            var jasmineEnv = jasmine.getEnv();

            jasmineEnv.updateInterval = 1000;

            var trivialReporter = new jasmine.TrivialReporter();

            jasmineEnv.addReporter(trivialReporter);

            jasmineEnv.specFilter = function(spec) {

                return trivialReporter.specFilter(spec);
            };

            var currentWindowOnload = window.onload;

            setTimeout(function () {
                if (currentWindowOnload) {
                    currentWindowOnload();
                }
                execJasmine();
            }, 0);

            function execJasmine() {
                jasmineEnv.execute();
            }

        };

        return {
            start: initialize
        };
    });
}());
