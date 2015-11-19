import tpl from './index.tpl'

export default function myItem(app) {
  app.directive('myItem', function myItem() {
    return {
      restrict: 'E',
      replace: true,
      template: tpl,
      //transclude: true,
      scope: {model: '=ngModel', remove: '&onRemove'},
      
      //controller: ['$scope', function MyListCtrl(s) {
      //  $.log('initializing list\'s controller...')
      //  //s.add = function(newThing) {
      //  //  s.things.push({name: newThing})
      //  //  
      //  //  var el = document.getElementById('newThingInput')
      //  //  el.focus()
      //  //  el.select()
      //  //}
      //}],
    }
  })
}
