'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        'assets/js/vendor/*.js',
        '!assets/js/scripts.min.js',
        '!assets/js/plugins.min.js',
        '!assets/js/head.min.js'
      ]
    },
    compass: {                  // Task
    	dist: {                   // Target
			options: {              // Target options
				sassDir: 'sass',
				cssDir: 'assets/css',
				imagesDir: 'assets/img',
				javascriptsDir: 'assets/js',
				fontsDir: 'assets/fonts',
				environment: 'production',
				outputStyle: 'compressed',
				force: true
			}
		},
		dev: {                    // Another target
			options: {
				sassDir: 'sass',
				cssDir: 'assets/css',
				imagesDir: 'assets/img',
				javascriptsDir: 'assets/js',
				fontsDir: 'assets/fonts',
				environment: 'development',
				outputStyle: 'nested'
			}
		}
	},
    uglify: {
      dist: {
        files: {
          'assets/js/plugins.min.js': [
            'assets/js/vendor/*.js'
          ],
          'assets/js/main.min.js': [
          	'assets/js/inc/*.js',
          	'assets/js/main.js'
          ],
          'assets/js/head.min.js': [
          	'assets/js/head/*.js',
          ]
        }
      },
      dev: {
      	options: {
	      	beautify: true,
	      	preserveComments: true
      	},
	     files: {
          'assets/js/plugins.min.js': [
            'assets/js/vendor/*.js'
          ],
          'assets/js/main.min.js': [
          	'assets/js/inc/*.js',
          	'assets/js/main.js'
          ],
          'assets/js/head.min.js': [
          	'assets/js/head/*.js'
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
          'assets/js/scritps_head/*.js',
          'assets/js/inc/*.js',
          'assets/js/main.js',
          'assets/js/plugins.js'
        ],
        tasks: [ 'uglify:dev']
      },
      livereload: {
		  files: ['assets/css/*.css', 'assets/js/**/*.js', '*.html', '*.php', 'lib/*.php', 'templates/*.php', 'assets/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
		  options: {
			  livereload: true,
		},
	  },
    },
    clean: {
      dist: [
        'assets/js/plugins.min.js',
        'assets/js/main.min.js',
        'assets/js/head.min.js'
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