import treeDataSample from './_other/tree-data-sample.js'
import auth from './auth'
import myItem from './my-item'

window.g = window

const app = angular.module('app', [
  'ui.bootstrap',
  'ngCookies',
  'xeditable',
  //'breeze.angular',
])

auth(app)
myItem(app)

const my = g.my = {
  inspect(scope) {
    return $(
      _.pairs,
      _.reject($(_.first, _.startsWith('$'))),
      _.zipObject(_, null),
      $.inspect(30)
    )(scope)
  },
  
  remove(item, coll) {
    $.splice(1, _.indexOf(item, coll), coll)
  },
}

app.run(['$rootScope', '$timeout', 'editableOptions',
  function run(s, $timeout, editableOptions) {
    s.my = my
    g.$timeout = $timeout // debug
    
    editableOptions.theme = 'bs3'
  },
])

app.controller('FooCtrl', ['$scope',
  function FooCtrl(s) {
    //s.tree = treeDataSample
    
    s.things = [
      {name: 'lorem'},
      {name: 'ipsum'},
      {name: 'dolor'},
      {name: 'sit'},
      {name: 'amet'},
    ]
  },
])
  
  
  //.factory('manager', ['breeze', function(breeze) {
  //  var EntityManager = breeze.EntityManager
  //  
  //  breeze.config.initializeAdapterInstances({
  //    uriBuilder: 'json',
  //  })
  //  
  //  var manager = new EntityManager('/api')
  //  
  //  $.log('fetching metadata from a remote server...')
  //  manager.fetchMetadata()
  //  
  //  return manager
  //}])
  //
  //
  //.controller('MainCtrl', [
  //  '$scope', '$http', '$q', '$timeout', 'breeze', 'manager', '$modal', '$cookies',
  //  
  //  function(s, $http, $q, $timeout, breeze, manager, $modal, $cookies) {
  //    $.log('initializing main controller...')
  //    
  //    g.s = s
  //    g.$http = $http
  //    g.$timeout = $timeout
  //    g.manager = manager
  //    g.$cookies = $cookies
  //    
  //    //-----------------
  //    
  //    
  //    var EntityQuery = g.EntityQuery = breeze.EntityQuery
  //    var Predicate = g.Predicate = breeze.Predicate
  //    
  //    
  //    //s.seed = function() {
  //    //  var users = [
  //    //    {name: 'Jack'},
  //    //    {name: 'Jane'},
  //    //    {name: 'Phil'},
  //    //    {name: 'Pete'},
  //    //  ]
  //    //  
  //    //  _.each(function(user) {
  //    //    manager.createEntity('users', user)
  //    //  }, users)
  //    //  
  //    //  s.users = manager.getEntities('users')
  //    //}
  //    
  //    
  //    s.sync = function() {
  //      $.log('syncing...')
  //      return $http.post('/api/sync')
  //    }
  //    
  //    
  //    s.drop = function() {
  //      $.log('dropping...')
  //      return $http.post('/api/drop')
  //    }
  //    
  //    
  //    s.query = function() {
  //      $.log('querying a remote server...')
  //      
  //      manager.executeQuery(EntityQuery.from('users'))
  //        .then(function(res) {
  //          s.users = res.results
  //        })
  //    }
  //    
  //    
  //    //s.add = function(film, person) {
  //    //  s.likes.push(manager.createEntity('likes', {
  //    //    person: person,
  //    //    film: film,
  //    //  }))
  //    //}
  //    //
  //    //
  //    //s.remove = function(film, person) {
  //    //  var like = manager.executeQueryLocally(
  //    //    EntityQuery
  //    //      .from('likes')
  //    //      
  //    //      .where(
  //    //        Predicate
  //    //          .create('person_id', 'eq', person.id)
  //    //          .and('film_id', 'eq', film.id)
  //    //      )
  //    //  )[0] // only one like is expected
  //    //  
  //    //  
  //    //  //$.splice(1, _.indexOf(like, s.likes), s.likes)
  //    //  
  //    //  like.entityAspect.setDeleted()
  //    //}
  //    
  //    
  //    s.save = function() {
  //      $.log('saving to a remote server...')
  //      
  //      return manager.saveChanges()
  //    }
  //    
  //    
  //    
  //    s.inspect = function() {
  //      return $(
  //        _.map(_.pick('username')),
  //        $.inspect(3)
  //      )(s.users)
  //    }
  //  },
  //])
  