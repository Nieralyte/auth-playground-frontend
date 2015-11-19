<li
  class='list-group-item clearfix'
  ng-mouseenter='showBtn = true'
  ng-mouseleave='showBtn = false'>
    <a
      href='javascript:' editable-text='model'
      buttons='no'>
        {{model}}
    </a>
    
    <a
      href='javascript:' title='delete' ng-click='remove()'
      class='pull-right' style='margin-left: 4px' ng-show='showBtn'>
        <span class='glyphicon glyphicon-trash'></span>
    </a>
    
    <!--<form ng-submit='add(newThing)' class='small-bottom-margin'>
      <input
        type='text' class='form-control' id='newThingInput'
        ng-model='newThing' placeholder='add a new thing'>
    </form>-->
</li>
