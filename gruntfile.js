module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],

    copy: {
      fonts: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/fonts/',
        src: '*',
        dest: '<%= pkg.folders.build %>/fonts'
      },
      i18n: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/i18n/',
        src: '*',
        dest: '<%= pkg.folders.build %>/i18n'
      },
      libs: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/libs/',
        src: '**/*',
        dest: '<%= pkg.folders.build %>/libs'
      },
      icon: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/',
        src: 'icon.png',
        dest: '<%= pkg.folders.build %>/'
      }
    },

    requirejs: {
      compile_prod: {
        options: {
          baseUrl: '<%= pkg.folders.build %>/modules',
          name: '../libs/almond/almond',
          include: 'main',
          mainConfigFile: '<%= pkg.folders.build %>/modules/main.js',
          out: '<%= pkg.folders.build %>/modules/main.js',
          optimize: 'uglify2',
          generateSourceMaps: false,
          preserveLicenseComments: false,
          useSourceUrl: false,
          uglify2: {
            mangle: false
          }
        }
      },
      compile_dev: {
        options: {
          baseUrl: '<%= pkg.folders.build %>/modules',
          name: '../libs/almond/almond',
          include: 'main',
          mainConfigFile: '<%= pkg.folders.build %>/modules/main.js',
          out: '<%= pkg.folders.build %>/modules/main.js',
          optimize: 'none',
          generateSourceMaps: false,
          preserveLicenseComments: false,
          useSourceUrl: false
        }
      }
    },

    coffee: {
      compile_all: {
        expand: true,
        flatten: false,
        cwd: '<%= pkg.folders.js_src %>',
        src: ['**/*.coffee'],
        dest: '<%= pkg.folders.js_build %>',
        ext: '.js'
      }
    },

    jade: {
      compile: {
        files: {
          '<%= pkg.folders.build %>/index.html': '<%= pkg.folders.src %>/index.jade'
        }
      },
      compile_all: {
        expand: true,
        flatten: false,
        cwd: '<%= pkg.folders.js_src %>',
        src: ['**/*.jade'],
        dest: '<%= pkg.folders.js_build %>',
        ext: '.html'
      }
    },

    compass: {
      compile_all: {
        expand: true,
        flatten: false,
        cwd: '<%= pkg.folders.src %>/scss',
        src: ['**/*.scss'],
        dest: '<%= pkg.folders.build %>/css',
        ext: '.css'
      }
    },
    
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    protractor: {
      e2e: {
        configFile:'e2e.config.js',
        keepAlive: true,
        noColor: false
      }
    },

    selenium_start: {
      options: {}
    },

    selenium_phantom_hub: {
      options: {}
    },

    selenium_stop: {
      options: {}
    },

    connect: {
      server: {
        options:  {
          port: 8000,
          base: '<%= pkg.folders.build %>/',
          hostname: 'localhost'
        }
      },
      keepalive: {
        options:  {
          port: 8000,
          base: '<%= pkg.folders.build %>/',
          hostname: 'localhost',
          keepalive: true
        }
      }
    }

  });

  // Load the plugins for all the tasks.
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Unit task(s).
  grunt.registerTask('unit', [
    'karma:unit'
  ]);

  // E2E task(s).
  grunt.registerTask('e2e', [
    'connect:server',
    'selenium_start', 
    'selenium_phantom_hub', 
    'protractor:e2e',
    'selenium_stop'
  ]);

  // Test task(s).
  grunt.registerTask('tests', [
    'unit',
    'e2e'
  ]);
  
  // Build task(s).
  grunt.registerTask('prod', [
    'clean', 
    'copy', 
    'coffee', 
    'jade', 
    'compass', 
    'requirejs:compile_prod'
    // 'tests'
  ]);
  
  // Build task(s).
  grunt.registerTask('dev', [
    'clean', 
    'copy', 
    'coffee', 
    'jade', 
    'compass'
    // 'requirejs:compile_dev'
    // 'tests'
  ]);
  
  // Web task(s).
  grunt.registerTask('web', [
    'dev', 
    'connect:keepalive'
  ]);

  // Default task(s).
  grunt.registerTask('default', [
    'dev'
  ]);

};











