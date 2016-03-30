'use strict';

describe('Sprite Directive', function () {
    var $compile,
        $rootScope,
        $log;

    beforeEach(module('app.directives.sprite'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$log_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $log = _$log_;

    }));


    it('should compile as an image tag', function () {
        var $element = $compile('<sprite img="test_sprite"></sprite>')($rootScope);
        $rootScope.$digest();

        expect($element[0].tagName).toEqual('IMG');
    });

    it('should have a class of test_sprite', function () {
        var $element = $compile('<sprite img="test_sprite" alt="Alt"></sprite>')($rootScope);
        $rootScope.$digest();

        expect($element.attr('class')).toContain('test_sprite');
    });

    it('should log an error when you dont specify a sprite', function () {
        var $element = $compile('<sprite alt="Alt"></sprite>')($rootScope);
        $rootScope.$digest();

        expect($log.debug.logs[0][0]).toBe('You are using a sprite without specifying a sprite');
    });

    it('should not log an error when you specify a sprite', function () {
        var $element = $compile('<sprite img="test_sprite" alt="Alt"></sprite>')($rootScope);
        $rootScope.$digest();

        expect($log.debug.logs.length).toBe(0);
    });

    it('should have an alt tag', function () {
        var $element = $compile('<sprite img="test_sprite" alt="Alt"></sprite>')($rootScope);
        $rootScope.$digest();

        expect($element.attr('alt')).toBe('Alt ');
    });

    it('should log an error when you dont specify an alt tag', function () {
        var $element = $compile('<sprite img="test_sprite"></sprite>')($rootScope);
        $rootScope.$digest();

        expect($log.debug.logs[0][0]).toBe('You are using a sprite without an alt tag');
    });

    it('should not log an error when you specify an alt tag', function () {
        var $element = $compile('<sprite img="test_sprite" alt="Alt"></sprite>')($rootScope);
        $rootScope.$digest();

        expect($log.debug.logs.length).toBe(0);
    });

    it('should not show an error when align is not specified', function () {
        var $element = $compile('<sprite img="test_sprite" alt="Alt"></sprite>')($rootScope);
        $rootScope.$digest();

        expect($log.debug.logs.length).toBe(0);
    });

});
