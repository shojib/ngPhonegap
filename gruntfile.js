module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: ['public'],

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
      ng2: {
        expand: true,
        cwd: 'node_modules/angular2/bundles/',
        src: '**/*',
        dest: '<%= pkg.folders.src %>/libs/angular2/bundles'
      },
      rxjs: {
        expand: true,
        cwd: 'node_modules/rxjs/',
        src: '**/*',
        dest: '<%= pkg.folders.src %>/libs/rxjs'
      },
      js: {
        expand: true,
        cwd: '<%= pkg.folders.entity_src %>/',
        src: '*.js',
        dest: '<%= pkg.folders.entity_build %>'
      },
      allJs: {
        expand: true,
        cwd: '<%= pkg.folders.entity_src %>/',
        src: '**/*.js',
        dest: '<%= pkg.folders.entity_build %>'
      },
      index: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/',
        src: 'index.html',
        dest: '<%= pkg.folders.build %>'
      },
      template: {
        expand: true,
        cwd: '<%= pkg.folders.entity_src %>/',
        src: '**/*.html',
        dest: '<%= pkg.folders.entity_build %>'
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
      },
      res: {
        expand: true,
        cwd: '<%= pkg.folders.src %>/res/',
        src: '**/*',
        dest: '<%= pkg.folders.build %>/res'
      }
    },

    ts: {
      default: {
        src: ['<%= pkg.folders.entity_src %>/*.ts'],
        dest: '<%= pkg.folders.entity_build %>',
        // watch: '<%= pkg.folders.entity_src %>',
        options: {
          baseDir: '<%= pkg.folders.entity_src %>',
          target: 'ES5',
          module: 'commonjs',
          sourceMap: true,
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          removeComments: false,
          noImplicitAny: false,
          keepDirectoryHierarchy: true
        }
      },
      all: {
        src: ['<%= pkg.folders.entity_src %>/**/*.ts'],
        dest: '<%= pkg.folders.entity_build %>',
        // watch: '<%= pkg.folders.entity_src %>',
        options: {
          baseDir: '<%= pkg.folders.entity_src %>',
          target: 'ES5',
          module: 'commonjs',
          sourceMap: true,
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          removeComments: false,
          noImplicitAny: false,
          keepDirectoryHierarchy: true
        }
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


    watch: {
      typescript: {
        files: ['<%= pkg.folders.entity_src %>/**/*.ts'],
        tasks: 'ts',
        options: {
          livereload: true
        }
      },
      js: {
        files: ['<%= pkg.folders.entity_src %>/**/*.js'],
        tasks: 'copy:allJs',
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['<%= pkg.folders.src %>/scss/main.scss'],
        tasks: 'compass',
        options: {
          livereload: true
        }
      },
      index: {
        files: ['<%= pkg.folders.src %>/*.html'],
        tasks: 'copy:index',
        options: {
          livereload: true
        }
      },
      template: {
        files: ['<%= pkg.folders.entity_src %>/**/*.html'],
        tasks: 'copy:template',
        options: {
          livereload: true
        }
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
          port: 9900,
          base: '<%= pkg.folders.build %>',
          hostname: 'localhost'
        }
      },
      keepalive: {
        options:  {
          port: 8000,
          base: '<%= pkg.folders.build %>',
          hostname: 'localhost',
          keepalive: true
        }
      }
    }

  });

  // Load the plugins for all the tasks.
  // grunt.loadNpmTasks("grunt-typescript");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Unit task(s).
  grunt.registerTask('unit', [
    'karma:unit'
  ]);

  // E2E task(s).
  grunt.registerTask('e2e', [
    'connect:server',
    'selenium_start', // PhantomJS only
    'selenium_phantom_hub', // PhantomJS only
    'protractor:e2e',
    'selenium_stop' // PhantomJS only
  ]);

  // Test task(s).
  grunt.registerTask('tests', [
    'unit',
    'e2e'
  ]);

  // Build task(s).
  grunt.registerTask('compile', [
    'clean',
    'copy',
    'ts',
    'compass'
  ]);

  // Build task(s).
  grunt.registerTask('prod', [
    'compile'
  ]);

  // Build task(s).
  grunt.registerTask('dev', [
    'compile'
  ]);

  // Web task(s).
  grunt.registerTask('web', [
    'dev',
    'connect:server',
    'watch'
  ]);

  // Default task(s).
  grunt.registerTask('default', [
    'webgrunt '
  ]);

};
