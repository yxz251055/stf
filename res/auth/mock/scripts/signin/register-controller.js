module.exports = function RegisterCtrl($scope, $http) {

  $scope.error = null

  $scope.submit = function() {

    var data = {
      name: $scope.signin.username.$modelValue
      ,password: $scope.signin.password.$modelValue
    }
    $http.post('/auth/api/v1/register', data)
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
