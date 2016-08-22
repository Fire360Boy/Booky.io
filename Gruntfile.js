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

        // 'bower_components/gridster/src/jquery.coords.js',
        // 'bower_components/gridster/src/jquery.collision.js',
        // 'bower_components/gridster/src/utils.js',
        // 'bower_components/gridster/src/jquery.draggable.js',
        // 'bower_components/gridster/src/jquery.gridster.js',
        // 'bower_components/gridster/src/jquery.gridster.extras.js',
        'bower_components/jquery-ui/jquery-ui.js',
        'assets/js/bootstrap-editable.js',
        'bower_components/alertify.js/lib/alertify.js',
        'bower_components/coffee-script/extras/coffee-script.js',
        'bower_components/bootstrap-colorselector/lib/bootstrap-colorselector-0.2.0/js/bootstrap-colorselector.js',
        // 'bower_components/jsonml/jsonml-html.js',
        // 'bower_components/jsonml/jsonml-dom.js',
        // 'bower_components/jsonml/jsonml-xml.js',
        // 'bower_components/jsonml/jsonml-utils.js',
        // 'bower_components/jsonml/jsonml-jbst.js',
        'bower_components/domjson/dist/domJSON.js',
        'bower_components/jquery.easing/jquery.easing.js',
        'bower_components/jquery.easing/jquery.easing.compatibility.js',
        'bower_components/scrollreveal/src/scrollreveal.js',
        'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
        'bower_components/tether/dist/js/tether.js',
        // 'bower_components/MDB/js/mdb.js',

        'assets/js/coffee/main.js'
    ];
    const cssSrc = [
        'bower_components/jquery-ui/themes/sunny/jquery-ui.css',
        'bower_components/jquery-ui/themes/sunny/theme.css',

        // 'bower_components/gridster/src/jquery.gridster.css',
        'bower_components/jquery-ui-bootstrap/jquery.ui.theme.css',
        'bower_components/alertify.js/themes/alertify.core.css',
        'bower_components/alertify.js/themes/alertify.bootstrap.css',
        'bower_components/bootstrap-colorselector/lib/bootstrap-colorselector-0.2.0/css/bootstrap-colorselector.css',
        // 'bower_components/MDB/css/mdb.css',
        // 'bower_components/MDB/css/style.css',
        'bower_components/magnific-popup/dist/magnific-popup.css',
        'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
        'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic',

        'assets/css/**/*.css'
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
                preserveComments: true,
                footer: '\n// Finish Script.'
            },

            layout: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/jquery-migrate-official/dist/jquery-migrate.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
                    'bower_components/jquery.cookie/jquery.cookie.js',
                    'bower_components/mustache.js/mustache.js',
                    'bower_components/jquery-ui/jquery-ui.js',
                    // 'bower_components/coffee-script/extras/coffee-script.js',
                    'bower_components/tether/dist/js/tether.js',
                    'bower_components/MDB/js/mdb.js',

                    'assets/js/coffee/layout.js',
                    'assets/js/layout.js',
                ],
                dest: 'public/assets/js/layout.js'
            },

            dashboards: {
                src: [
                    'bower_components/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js',
                    'bower_components/alertify.js/lib/alertify.js',
                    'bower_components/bootstrap-colorselector/lib/bootstrap-colorselector-0.2.0/js/bootstrap-colorselector.js',
                    'bower_components/domjson/dist/domJSON.js',
                    'assets/js/coffee/dashboards.js',
                    'assets/js/dashbords.js'
                ],
                dest: 'public/assets/js/dashboards.js'
            },

            home: {
                src: [
                    'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                    'bower_components/jquery.easing/jquery.easing.js',
                    'bower_components/jquery.easing/jquery.easing.compatibility.js',
                    'bower_components/scrollreveal/src/scrollreveal.js',
                    'assets/js/coffee/home.js',
                    'assets/js/home.js',
                ],
                dest: 'public/assets/js/home.js'
            }

        },
        coffee: {
            layout: {
                bare: true,
                src: 'assets/coffee/layout.coffee',
                dest: 'assets/js/coffee/layout.js'
            },
            dashboards: {
                bare: true,
                src: 'assets/coffee/dashboards.coffee',
                dest: 'assets/js/coffee/dashboards.js'
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
            layout: {
                files: {
                    'public/assets/css/layout.css': [
                        'bower_components/jquery-ui/themes/sunny/jquery-ui.css',
                        'bower_components/jquery-ui/themes/sunny/theme.css',
                        'bower_components/jquery-ui-bootstrap/jquery.ui.theme.css',
                        'bower_components/MDB/css/mdb.css',
                        'bower_components/MDB/css/style.css',
                        'assets/css/font-awesome.css',
                        'assets/css/bootstrap.css',
                        'bower_components/tether/dist/css/tether.css',
                        'assets/css/layout.css'
                    ]
                }
            },
            dashboards: {
                src: [
                    'bower_components/alertify.js/themes/alertify.core.css',
                    'bower_components/alertify.js/themes/alertify.bootstrap.css',
                    'bower_components/bootstrap-colorselector/lib/bootstrap-colorselector-0.2.0/css/bootstrap-colorselector.css',
                    'bower_components/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css',
                    'assets/css/dashboards.css'
                ],
                dest: 'public/assets/css/dashboards.css'
            },
            home: {
                src: [

                    'bower_components/magnific-popup/dist/magnific-popup.css',
                    'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
                    'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic',
                    'assets/css/home.css'
                ],
                dest: 'public/assets/css/home.css'
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
                    },
                    {
                        expand: true,
                        cwd: 'assets/img/',
                        src: '**',
                        dest: 'public/assets/img/'
                    },
                    {
                        expand: true,
                        cwd: 'assets/img/',
                        src: '**',
                        dest: 'public/assets/images/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/jquery-ui-bootstrap/images/*',
                        dest: 'public/assets/images'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/x-editable/dist/bootstrap3-editable/img/*',
                        dest: 'public/assets/images'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/MDB/font/roboto',
                        src: '**',
                        dest: 'public/assets/font/roboto'
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
                    sourcemap: 'none'
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
                files: '**/*.js',
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
                files: '**/*.css',
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
    grunt.registerTask('default', ['coffee', 'sass', 'uglify', 'cssmin', 'copy', 'usebanner']);
    // grunt.registerTask('default', ['coffee', 'sass', 'uglify', 'cssmin', 'copy', 'usebanner','watch']);

};