module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css',
                    noLineComments: true
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'assets/css/style.min.css' : ['assets/css/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['compass']);
};
