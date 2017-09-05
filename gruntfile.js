'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'static/assets/js/*.js',
        'static/assets/js/vendor/*.js',
        '!assets/js/scripts.min.js',
        '!assets/js/plugins.min.js',
        '!assets/js/head.min.js'
      ]
    },
    compass: {                  // Task
    	dist: {                   // Target
			options: {              // Target options
				sassDir: 'sass',
				cssDir: 'static/assets/css',
				imagesDir: 'static/assets/img',
				javascriptsDir: 'static/assets/js',
				fontsDir: 'static/assets/fonts',
				environment: 'production',
				outputStyle: 'compressed',
				force: true
			}
		},
		dev: {                    // Another target
			options: {
				sassDir: 'sass',
				cssDir: 'static/assets/css',
				imagesDir: 'static/assets/img',
				javascriptsDir: 'static/assets/js',
				fontsDir: 'static/assets/fonts',
				environment: 'development',
				outputStyle: 'nested'
			}
		}
	},
    uglify: {
      dist: {
        files: {
          'static/assets/js/plugins.min.js': [
            'static/assets/js/vendor/*.js'
          ],
          'static/assets/js/main.min.js': [
          	'static/assets/js/inc/*.js',
          	'static/assets/js/main.js'
          ],
          'static/assets/js/head.min.js': [
          	'static/assets/js/head/*.js',
          ]
        }
      },
      dev: {
      	options: {
	      	beautify: true,
	      	preserveComments: true
      	},
	     files: {
          'static/assets/js/plugins.min.js': [
            'static/assets/js/vendor/*.js'
          ],
          'static/assets/js/main.min.js': [
          	'static/assets/js/inc/*.js',
          	'static/assets/js/main.js'
          ],
          'static/assets/js/head.min.js': [
          	'static/assets/js/head/*.js'
          ]

        }
      }
    },
    watch: {
      compass: {
		  files: ['sass/**/*.{scss,sass}'],
		  tasks: ['compass:dev']
	  },
      js: {
        files: [
          'static/assets/js/scritps_head/*.js',
          'static/assets/js/inc/*.js',
          'static/assets/js/main.js',
          'static/assets/js/plugins.js'
        ],
        tasks: [ 'uglify:dev']
      },
      livereload: {
		  files: ['static/assets/css/*.css', 'static/assets/js/**/*.js', '*.html', '*.php', 'lib/*.php', 'templates/*.php', 'static/assets/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
		  options: {
			  livereload: true,
		},
	  },
    },
    clean: {
      dist: [
        'static/assets/js/plugins.min.js',
        'static/assets/js/main.min.js',
        'static/assets/js/head.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'compass:dist',
    'uglify:dist',
    'version'
  ]);

  grunt.registerTask('dev', [
    'watch',
    'compass'
  ]);

};