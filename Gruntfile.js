'use strict';

module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'underscore.isInteger.min.js': ['underscore.isInteger.js']
        }
      }
    }
  });

  // By default, uglify.
  grunt.registerTask('default', ['uglify']);
};
