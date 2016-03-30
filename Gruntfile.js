module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['src/{*,**/*}.html.js']
            },
            all: ['src/{*,**/*}.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        jscs: {
            src: ['src/{*,**/*}.js', 'tests/{*,**/*}.js'],
            options: {
                config: '.jscsrc',
                esnext: true,
                verbose: true,
                fix: true,
                requireCurlyBraces: ['if']
            }
        },
    });

    // Load tasks
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('js', ['jshint', 'jscs', 'html2js']);
    grunt.registerTask('test', ['wiredep:karmaConf', 'karma:unit']);



};
