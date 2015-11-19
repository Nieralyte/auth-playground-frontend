<div class='{{class}}'>
  <form ng-submit='logIn()' ng-hide='loggedIn'>
    <input
      type='text' class='form-control no-stacking'
      placeholder='username' ng-model='username'>
    
    <input
      type='password' class='form-control no-stacking'
      placeholder='password' ng-model='password'>
    
    <div uib-dropdown class='btn-group no-stacking'>
      <button type='submit' class='btn btn-primary'>
        log in
      </button>
      
      <button
        uib-dropdown-toggle type='button' class='btn btn-primary'>
          <span class='caret'></span>
      </button>
      
      <!-- `uib-dropdown-menu` class directive soon probably
      will be changed to an attribute directive: -->
      
      <ul class='uib-dropdown-menu'>
        <li>
          <a href='javascript:' ng-click='signUp()'>sign up</a>
        </li>
      </ul>
    </div>
  </form>
  
  <span ng-show='loggedIn'>
    <span class='glyphicon glyphicon-user'></span>
    {{username}}
    
    &nbsp;
    &nbsp;
    
    <button type='button' class='btn btn-primary' ng-click='logOut()'>
      log out
    </button>
  </span>
</div>