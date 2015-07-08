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
