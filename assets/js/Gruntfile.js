module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        basic: {
            src:[
                    // Functions
                    'components/functions.js',
                    'components/initialize.js',

                    'components/opening.js',
                    'components/variables.js',

                    // Standalone Scripts.


                    'components/closing.js',
                    'components/extras.js',
                ],
            dest: "scripts.js"
        }
    },
    uglify: {
        my_target: {
            files: {
                "scripts.min.js": ["scripts.js"]
            }
        },
        options: {
            compress: true,
            mangle: true,
            sourceMap: true,
            sourceMapIncludeSources: true,
        }
    },
    watch: {
        scripts: {
            files: [
                // Functions
                'components/functions.js',
                'components/initialize.js',

                'components/opening.js',
                'components/variables.js',

                'components/closing.js',
                'components/extras.js',
            ],
            tasks: ['concat', 'uglify'],
            options: {
                interrupt: true,
            },
        },
    },

    jsbeautifier: {
        files : [
            "components/*.js",
        ],
        options: {
            js: {
                jslintHappy: false,
                indentSize: 4
            }
        }
    },

    jshint: {
        all: ['scripts.js']
    }

});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');

// Load the plugin that provides the "watch" task.
grunt.loadNpmTasks('grunt-contrib-watch');

// Load the plugin that provides the "concat" task.
grunt.loadNpmTasks('grunt-contrib-concat');

// Load the plugin that provides the "jsbeautifier" task.
grunt.loadNpmTasks('grunt-jsbeautifier');

// Load 'JSHint' plugin
grunt.loadNpmTasks('grunt-contrib-jshint');

// Default task(s).
grunt.registerTask('default', ['watch']);

/*
JavaScript Project Set-up
    1.0: Step by step NPM install
        1.1: Use [npm install grunt --save-dev]
        1.2: Use [npm install grunt-contrib-uglify --save-dev]
        1.3: Use [npm install grunt-contrib-watch --save-dev]
        1.4: Use [npm install grunt-contrib-concat --save-dev]
        1.5: Use [npm install grunt-jsbeautifier --save-dev]
        1.6: Use [npm install grunt-contrib-jshint --save-dev]
    2.0: Shorthand NPM Install
        2.1: npm install grunt --save-dev; npm install grunt-contrib-uglify --save-dev; npm install grunt-contrib-watch --save-dev; npm install grunt-contrib-concat --save-dev; npm install grunt-jsbeautifier --save-dev; npm install grunt-contrib-jshint --save-dev;
    3.0: Use "Grunt" command to start your project.
        3.1: Type "Grunt"
*/
};
