/* b-blackscreen - v0.1.0 - 2015-07-08
* https://github.com/bons/b-blackscreen
* Copyright (c) 2015 Bons; Licensed MIT */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var MODULE_NAME = 'bons.bBlackscreen';

var angular = require('angular');

function isVisible(elm)
{
  var style = window.getComputedStyle(elm, null);

  return (style.display === 'none');
}

function preventScoll(evt)
{
  evt.preventDefault();

  return false;
}

angular .module(MODULE_NAME, [])
        .directive('bBlackscreen',
        [
          '$window',
          function($window)
          {

            return {
              restrict: "A",
              transclude: true,
              link: function(scp, elm)
              {
                elm.css({
                  overflow: 'hidden',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  'z-index': 99999
                });

                scp.$watch(function()
                {
                  return isVisible(elm[0]);
                }, function(value)
                {
                  if(value)
                  {
                    angular.element($window).bind('scroll', preventScoll);
                  }
                  else
                  {
                    angular.element($window).unbind('scroll', preventScoll);
                  }
                });
              }
            };
          }
        ]);

module.exports = MODULE_NAME;

},{"angular":"angular"}]},{},[1]);
