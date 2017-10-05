module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          protocol: 'http',
          livereload: true,
          open: true,
          port: 9000,
          base: {
            path: '.',
            options: {
              index: 'index.html'
            }
          }
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      files: [
        'src/scripts/*.js',
        'src/styles/*.css',
        'src/views/*.html',
        'index.html',        
        'gruntfile.js'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect', 'watch']);
};
