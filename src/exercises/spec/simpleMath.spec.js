/*global require, define, describe, beforeEach, it, expect, sinon, spyOn*/
(function () {
    'use strict';
    define([
        'jasmine',
        '../js/SimpleMath'
    ], function (jasmine, SimpleMath) {

        describe("SimpleMath", function() {

            window._SimpleMath = SimpleMath;

            var simpleMath;

            beforeEach(function() {
               simpleMath = new SimpleMath;

            });


            describe("when SimpleMath is used to find the average of two values", function() {

                it("should be able to find the average of two values", function() {

               window.simpleMath = SimpleMath;

                    expect(simpleMath.average(3, 6)).toEqual(4.5);

                });
            });

        });

    });

}());
