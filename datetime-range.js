'use strict';

/* globals moment */

angular.module('g1b.datetime-range', []).
  directive('datetimeRange', function () {

  return {
    restrict: 'E',
    scope: {
      start: '=',
      end: '=',
      handler: '='
    },
    replace: true,
    templateUrl: 'datetime-range.html',
    link: function (scope, element) {

    }
  };
});