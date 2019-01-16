module.exports = function SignInCtrl($scope, $http) {

  $scope.error = null

  $scope.submit = function() {

    var data = {
      name: $scope.signin.username.$modelValue
      ,password: $scope.signin.password.$modelValue
      // , email: $scope.signin.email.$modelValue
    }
    // $http.post('/auth/api/v1/mock', data)
    //   .success(function(response) {
    //     $scope.error = null
    //     location.replace(response.redirect)
    //   })
    //   .error(function(response) {
    //     alert("系统错误，请联系管理员！")
    //     switch (response.error) {
    //       case 'ValidationError':
    //         $scope.error = {
    //           $invalid: true
    //         }
    //         break
    //       case 'InvalidCredentialsError':
    //         $scope.error = {
    //           $incorrect: true
    //         }
    //         break
    //       default:
    //         $scope.error = {
    //           $server: true
    //         }
    //         break
    //     }
    //   })
    $http.post('/auth/api/v1/mock1', data)
      .success(function(response) {
        if(response.isLogin){
          $scope.error = null
          location.replace(response.redirect)
        }else{
          $scope.error = {
            $check: true
          }
        }
      })
      .error(function(response) {
        alert("系统错误，请联系管理员！")
        switch (response.error) {
          case 'ValidationError':
            $scope.error = {
              $invalid: true
            }
            break
          case 'InvalidCredentialsError':
            $scope.error = {
              $incorrect: true
            }
            break
          default:
            $scope.error = {
              $server: true
            }
            break
        }
      })
  }
}
