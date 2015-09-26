﻿'use strict';

describe('Example: Colors from a select list using basic web colors', function () {

    var $sut;

    beforeEach(function (done) {

        loadWorkspace(
            '#example-from-select-basic-colors [data-code-fragment]',
            '/index.html',
            '/content/js/jquery.swatcher.js');

        $sut = $('#test-workspace').find('select');

        done();

    });

    afterEach(function (done) {

        done();

        clearWorkspace();

    });

    it('Should hide selected select element', function () {

        $sut.swatcher();

        expect($sut.is(':visible')).toBeFalsy();

    });

    it('Should create a unordered swatcher list', function () {

        $sut.swatcher();

        expect($sut.next().prop('tagName')).toBe('UL');

    });

    it('Should add the ".swatcher" class to the unordered list', function () {

        $sut.swatcher();

        expect($sut.next().hasClass('swatcher')).toBeTruthy();

    });

    it('Should add an item for every option to the swatcher list', function () {

        var expected = $sut.find('option').length;

        $sut.swatcher();

        expect($sut.next().find('li').length).toBe(expected);

    });

    it('Should set the background color of each swatch from the option value', function () {

        $sut.swatcher();

        expect($sut.next().find('li:first').css('background-color')).toBe('rgb(255, 0, 0)');

    });

    it('Should add an ".is-selected" class when a swatch is clicked', function () {

        $sut.swatcher();

        $sut.next().find('li:first').click();

        expect($sut.next().find('li:first').hasClass('is-selected')).toBeTruthy();

    });

    it('Should remove the ".is-selected" class from the current target once another swatch is clicked', function () {

        $sut.swatcher();

        $sut.next().find('li:first').click();

        $sut.next().find('li:nth-child(2)').click();

        expect($sut.next().find('li:first').hasClass('is-selected')).toBeFalsy();

    });

    it('Should add a title for each swatch from the option value', function () {

        var expected = $sut.find('option:first').val();

        $sut.swatcher();

        expect($sut.next().find('li:first').prop('title')).toBe(expected);

    });

    it('Should select the corresponding option when a swatch is selected', function () {

        $sut.swatcher();

        $sut.next().find('li:first').click();

        expect($sut.val()).toBe($sut.next().find('li:first').prop('title'));

    });

});