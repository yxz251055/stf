require('./signin.css')

module.exports = angular.module('stf.signin', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/auth/register/', {
        template: require('./register.pug')
      })
      .when('/auth/mock/', {
        template: require('./signin.pug')
      })
  })
  .controller('SignInCtrl', require('./signin-controller'))
  .controller('RegisterCtrl', require('./register-controller'))
