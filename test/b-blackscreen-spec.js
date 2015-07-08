'use strict';

require('angular');
require('angular-mocks');
var app = require('../lib/b-blackscreen');

describe('Test Suite: bBlackscreen', function()
{
  var scope,
      $compile;

  function injectHTML()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-blackscreen></div>';

    $compile(body)(scope);

    var blackscreen = body.querySelector("[b-blackscreen]");

    return blackscreen;
  }

  beforeEach(angular.mock.module('bons.bBlackscreen'));

  beforeEach(angular.mock.inject(['$rootScope','$compile',
      function ($rootScope, _$compile_)
      {
        scope = $rootScope.$new();
        $compile = _$compile_;
      }
    ])
  );

  it('should be defined', function()
  {
    expect(app).toBeDefined();
  });

  it('should add the required styles', function()
  {
    var blackscreenElement = injectHTML();
    var style = window.getComputedStyle(blackscreenElement, null);

    expect(style.overflow).toBe('hidden');
    expect(style.position).toBe('fixed');
    expect(parseInt(style.top)).toBe(0);
    expect(parseInt(style.left)).toBe(0);
    expect(parseInt(style.bottom)).toBe(0);
    expect(parseInt(style.right)).toBe(0);
    expect(parseInt(style['z-index'])).toBe(99999);
  });

});
