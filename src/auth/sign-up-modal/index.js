import tpl from './index.tpl'

export default function makeSignUpModalOptions(app) {
  const signUpModalOptions = {
    template: tpl,
    size: 'sm',
    controller: 'SignUpModalCtrl',
  }
  
  app.controller('SignUpModalCtrl', [
    '$scope', '$http', '$uibModalInstance', 'username', 'password',
    
    function(s, $http, $uibModalInstance, username, password) {
      $.log('initializing sign-up modal controller...')
      
      s.username = username
      s.password = password
      
      s.signUp = function() {
        $.log('signing up...')
        
        if (s.password !== s.passwordConfirmation) {
          $.log('passwords don\'t match')
          return
        }
        
        
        // (perform validation here)
        
        
        $http.post('/api/signup', {
          username: s.username,
          password: s.password,
        })
          .then(function(res) {
            $.log(res.data)
            $uibModalInstance.close()
          })
          
          .catch(function(res) {
            $.log(res.data)
          })
      }
      
      s.cancel = function() {
        $.log('closing a sign-up modal...')
        
        $uibModalInstance.dismiss()
      }
    },
  ])
  
  return signUpModalOptions
}
