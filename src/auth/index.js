import tpl from './index.tpl'
import makeSignUpModalOptions from './sign-up-modal'

export default function auth(app) {
  const signUpModalOptions = makeSignUpModalOptions(app)
  
  app.directive('myAuth', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: tpl,
      
      scope: {
        class: '@class',
      },
      
      controller: ['$scope', '$http', '$uibModal', '$cookies',
        function(s, $http, $uibModal, $cookies) {
          signUpModalOptions.resolve = {
            username() {return s.username},
            password() {return s.password},
          }
          
          s.logIn = function() {
            $.log('logging in...')
            
            $http.post('/api/login', {
              username: s.username,
              password: s.password,
            })
              .then(function(res) {
                $.log(res.data)
                updateLogInState()
              })
          }
          
          s.logOut = function() {
            $.log('logging out...')
            
            $cookies.remove('token')
            $cookies.remove('token', {path: '/'})
            
            s.username = ''
            s.password = ''
            
            updateLogInState()
          }
          
          s.signUp = function() {
            $.log('opening a sign-up modal...')
            
            $uibModal.open(signUpModalOptions).result
              .then(updateLogInState)
              
              .catch(function() {
                s.username = ''
                s.password = ''
              })
          }
          
          function updateLogInState() {
            $.log('updating log-in state...')
            
            s.loggedIn = !!$cookies.get('token')
            
            if (s.loggedIn) {
              s.username =
                JSON.parse(atob($cookies.get('token').split('.')[1]))
                  .username
            }
          }
          
          updateLogInState()
        },
      ],
    }
  })
}
