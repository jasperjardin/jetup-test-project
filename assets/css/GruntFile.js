module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: [
					'sass/*.scss',
					'sass/importer.scss',
				],
				tasks: ['sass:dist'],
				options: {
					livereload: true,
					port: 9000
				}
			}
		},
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded',
				sourceComments: false
			},
			dist: {
				files: {
					'style.css': 'sass/importer.scss'
				}
			}
		}
	});
	grunt.registerTask('default', ['sass:dist', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
/*Dunhakdis Set-up*/
/*1.0 Use [npm install grunt --save-dev]*/
/*1.1 Use [npm install grunt-sass --save-dev]*/
/*1.2 Use [npm install grunt-contrib-watch --save-dev]*/
/*2.0 Use Grunt command to start a project*/
/*  npm install grunt --save-dev; npm install grunt-sass --save-dev; npm install grunt-contrib-watch --save-dev; */
