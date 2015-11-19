<div class='modal-header'>
  <h4 class='modal-title'>sign up</h4>
</div>

<form ng-submit='signUp()'>
  <div class='modal-body'>
    <div class='form-group'>
      <input
        type='text' class='form-control' placeholder='username'
        ng-model='username'>
    </div>
    
    <div class='form-group'>
      <input
        type='password' class='form-control' placeholder='password'
        ng-model='password'>
    </div>
    
    <div class='form-group'>
      <input
        type='password' class='form-control'
        placeholder='confirm password'
        ng-model='passwordConfirmation'>
    </div>
  </div>
  
  <div class='modal-footer'>
    <div class='form-group'>
      <button
        type='button' class='btn btn-default'
        ng-click='cancel()'>
          cancel
      </button>
      
      <button type='submit' class='btn btn-primary'>ok</button>
    </div>
  </div>
</form>
