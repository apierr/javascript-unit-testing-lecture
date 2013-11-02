/*global require*/
(function () {
    'use strict';
    
    var jasmineDir = '../../../bower_components/jasmine/lib/jasmine-core/';

    require.config({
        paths: {
            jasmine: jasmineDir + 'jasmine',
            jasmineHtml: jasmineDir + 'jasmine-html'
            // jasmineJquery: jasmineDir + 'jasmine-jquery-1.3.1',
            // sinon: vendorDir + 'sinon-1.4.2'
        },
        shim: {
            jasmineHtml: {
                deps: ['jasmine']
            },
            jasmine: {
                exports: 'jasmine'
            }
            // jasmineJquery: {
            //     deps: ['jasmine', 'jquery']
            // }
        }
    });

    

    require([
        'app'
    ], function (app) {

        app.start();
    });
}());
