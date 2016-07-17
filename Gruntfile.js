/**
 * Created by Fire360Boy on 16-Jul-16.
 */

module.exports = function (grunt) {

    const jsSrc = [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery-migrate-official/dist/jquery-migrate.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
        'bower_components/jquery.cookie/jquery.cookie.js',
        'bower_components/mustache.js/mustache.js',
        'bower_components/jquery-ui/jquery-ui.js',
        'bower_components/lodash/lodash.js',
        'bower_components/gridstack/dist/gridstack.js',
        'assets/js/coffee/main.js'
    ];
    const cssSrc = [
        'bower_components/jquery-ui/themes/sunny/jquery-ui.css',
        'bower_components/jquery-ui/themes/sunny/theme.css',
        'bower_components/gridstack/dist/gridstack.css',
        'bower_components/gridstack/dist/gridstack-extra.css',
        'assets/css/**/*.css',
    ];
    const sassSrc = {
        'assets/css/font-awesome.css': 'bower_components/font-awesome/scss/font-awesome.scss',
        'assets/css/bootstrap.css': 'bower_components/bootstrap-sass/assets/stylesheets/application.scss',
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\nCreated by : Fire360Boy\nEmail : Fire360Boy@gmail.com\nStrat Script: */',
                preserveComments: false,
                footer: '\n// Finish Script.'
            },
            build: {
                src: jsSrc,
                dest: 'public/assets/js/main.js'
            },
            home:{
                src:'assets/js/coffee/home.js',
                dest: 'public/assets/js/home.js'
            }
        },
        coffee: {
            main: {
                bare: true,
                src: 'assets/coffee/main.coffee',
                dest: 'assets/js/coffee/main.js'
            },
            home: {
                bare: true,
                src: 'assets/coffee/home.coffee',
                dest: 'assets/js/coffee/home.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'public/assets/css/styles.css': cssSrc
                }
            }
        },
        ugly: {
            options: {
                banner: ''
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/bootstrap-sass/assets/fonts/**/*'],
                        dest: 'public/assets/fonts'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/font-awesome/fonts/**/*'],
                        dest: 'public/assets/fonts'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/jquery-ui/theme/sunny/images/*',
                        dest: 'public/assets/images'
                    }
                ]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
//                    unixNewlines: true,
//                    check: true,
//                    trace: true,
                    sourcemap:'none'
                },
                files: sassSrc
            }
        },
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '/* Builds By : Fire360Boy\nEmail : Fire360Boy.com */'
                },
                files: {
                    src: ['public/assets/css/*.css']
                }
            }
        },
        watch: {
            js: {
                files: jsSrc,
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            coffee: {
                files: '**/*.coffee',
                tasks: ['coffee'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: cssSrc,
                tasks: ['cssmin', 'usebanner'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: '**/*.scss',
                tasks: ['sass', 'cssmin', 'usebanner'],
                options: {
                    spawn: false
                }
            },
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['coffee', 'sass', 'uglify', 'cssmin', 'copy', 'usebanner','watch']);

};