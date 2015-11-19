/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _auth = __webpack_require__(4);

	var _auth2 = _interopRequireDefault(_auth);

	var _myItem = __webpack_require__(1);

	var _myItem2 = _interopRequireDefault(_myItem);

	var _otherTreeDataSampleJs = __webpack_require__(3);

	var _otherTreeDataSampleJs2 = _interopRequireDefault(_otherTreeDataSampleJs);

	window.g = window;

	var app = angular.module('app', ['ui.bootstrap', 'ngCookies', 'xeditable']);

	//'breeze.angular',
	(0, _auth2['default'])(app);
	(0, _myItem2['default'])(app);

	var my = g.my = {
	  inspect: function inspect(scope) {
	    return $(_.pairs, _.reject($(_.first, _.startsWith('$'))), _.zipObject(_, null), $.inspect(30))(scope);
	  },

	  remove: function remove(item, coll) {
	    $.splice(1, _.indexOf(item, coll), coll);
	  }
	};

	app.run(['$rootScope', '$timeout', 'editableOptions', function run(s, $timeout, editableOptions) {
	  s.my = my;
	  g.$timeout = $timeout; // debug

	  editableOptions.theme = 'bs3';
	}]);

	app.controller('FooCtrl', ['$scope', function FooCtrl(s) {
	  //s.tree = treeDataSample

	  s.things = [{ name: 'lorem' }, { name: 'ipsum' }, { name: 'dolor' }, { name: 'sit' }, { name: 'amet' }];
	}]);

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = myItem;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _indexTpl = __webpack_require__(2);

	var _indexTpl2 = _interopRequireDefault(_indexTpl);

	function myItem(app) {
	  app.directive('myItem', function myItem() {
	    return {
	      restrict: 'E',
	      replace: true,
	      template: _indexTpl2['default'],
	      //transclude: true,
	      scope: { model: '=ngModel', remove: '&onRemove' }

	    };
	  });
	}

	module.exports = exports['default'];
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<li\r\n  class='list-group-item clearfix'\r\n  ng-mouseenter='showBtn = true'\r\n  ng-mouseleave='showBtn = false'>\r\n    <a\r\n      href='javascript:' editable-text='model'\r\n      buttons='no'>\r\n        {{model}}\r\n    </a>\r\n    \r\n    <a\r\n      href='javascript:' title='delete' ng-click='remove()'\r\n      class='pull-right' style='margin-left: 4px' ng-show='showBtn'>\r\n        <span class='glyphicon glyphicon-trash'></span>\r\n    </a>\r\n    \r\n    <!--<form ng-submit='add(newThing)' class='small-bottom-margin'>\r\n      <input\r\n        type='text' class='form-control' id='newThingInput'\r\n        ng-model='newThing' placeholder='add a new thing'>\r\n    </form>-->\r\n</li>\r\n";

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = { name: '_root', children: [{ name: 'Lorem', children: [{ name: 'Dolore', children: [{ name: 'consectetur', children: [{ name: 'voluptate', children: [] }] }, { name: 'eu', children: [] }] }, { name: 'Duis', children: [{ name: 'ut', children: [{ name: 'et', children: [] }] }, { name: 'consectetur', children: [{ name: 'aliquip', children: [{ name: 'labore', children: [{ name: 'magna', children: [] }] }] }] }] }] }, { name: 'ipsum', children: [{ name: 'officia', children: [] }, { name: 'elit', children: [{ name: 'magna', children: [] }, { name: 'dolor', children: [{ name: 'Duis', children: [{ name: 'laboris', children: [] }] }] }] }, { name: 'ut', children: [{ name: 'enim', children: [{ name: 'incididunt', children: [{ name: 'consequat', children: [] }] }, { name: 'dolore', children: [] }] }] }] }] };
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = auth;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _indexTpl = __webpack_require__(5);

	var _indexTpl2 = _interopRequireDefault(_indexTpl);

	var _signUpModal = __webpack_require__(6);

	var _signUpModal2 = _interopRequireDefault(_signUpModal);

	function auth(app) {
	  var signUpModalOptions = (0, _signUpModal2['default'])(app);

	  app.directive('myAuth', function () {
	    return {
	      restrict: 'E',
	      replace: true,
	      transclude: true,
	      template: _indexTpl2['default'],

	      scope: {
	        'class': '@class'
	      },

	      controller: ['$scope', '$http', '$uibModal', '$cookies', function (s, $http, $uibModal, $cookies) {
	        signUpModalOptions.resolve = {
	          username: function username() {
	            return s.username;
	          },
	          password: function password() {
	            return s.password;
	          }
	        };

	        s.logIn = function () {
	          $.log('logging in...');

	          $http.post('/api/login', {
	            username: s.username,
	            password: s.password
	          }).then(function (res) {
	            $.log(res.data);
	            updateLogInState();
	          });
	        };

	        s.logOut = function () {
	          $.log('logging out...');

	          $cookies.remove('token');
	          $cookies.remove('token', { path: '/' });

	          s.username = '';
	          s.password = '';

	          updateLogInState();
	        };

	        s.signUp = function () {
	          $.log('opening a sign-up modal...');

	          $uibModal.open(signUpModalOptions).result.then(updateLogInState)['catch'](function () {
	            s.username = '';
	            s.password = '';
	          });
	        };

	        function updateLogInState() {
	          $.log('updating log-in state...');

	          s.loggedIn = !!$cookies.get('token');

	          if (s.loggedIn) {
	            s.username = JSON.parse(atob($cookies.get('token').split('.')[1])).username;
	          }
	        }

	        updateLogInState();
	      }]
	    };
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class='{{class}}'>\r\n  <form ng-submit='logIn()' ng-hide='loggedIn'>\r\n    <input\r\n      type='text' class='form-control no-stacking'\r\n      placeholder='username' ng-model='username'>\r\n    \r\n    <input\r\n      type='password' class='form-control no-stacking'\r\n      placeholder='password' ng-model='password'>\r\n    \r\n    <div uib-dropdown class='btn-group no-stacking'>\r\n      <button type='submit' class='btn btn-primary'>\r\n        log in\r\n      </button>\r\n      \r\n      <button\r\n        uib-dropdown-toggle type='button' class='btn btn-primary'>\r\n          <span class='caret'></span>\r\n      </button>\r\n      \r\n      <!-- `uib-dropdown-menu` class directive soon probably\r\n      will be changed to an attribute directive: -->\r\n      \r\n      <ul class='uib-dropdown-menu'>\r\n        <li>\r\n          <a href='javascript:' ng-click='signUp()'>sign up</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </form>\r\n  \r\n  <span ng-show='loggedIn'>\r\n    <span class='glyphicon glyphicon-user'></span>\r\n    {{username}}\r\n    \r\n    &nbsp;\r\n    &nbsp;\r\n    \r\n    <button type='button' class='btn btn-primary' ng-click='logOut()'>\r\n      log out\r\n    </button>\r\n  </span>\r\n</div>";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = makeSignUpModalOptions;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _indexTpl = __webpack_require__(7);

	var _indexTpl2 = _interopRequireDefault(_indexTpl);

	function makeSignUpModalOptions(app) {
	  var signUpModalOptions = {
	    template: _indexTpl2['default'],
	    size: 'sm',
	    controller: 'SignUpModalCtrl'
	  };

	  app.controller('SignUpModalCtrl', ['$scope', '$http', '$uibModalInstance', 'username', 'password', function (s, $http, $uibModalInstance, username, password) {
	    $.log('initializing sign-up modal controller...');

	    s.username = username;
	    s.password = password;

	    s.signUp = function () {
	      $.log('signing up...');

	      if (s.password !== s.passwordConfirmation) {
	        $.log('passwords don\'t match');
	        return;
	      }

	      // (perform validation here)

	      $http.post('/api/signup', {
	        username: s.username,
	        password: s.password
	      }).then(function (res) {
	        $.log(res.data);
	        $uibModalInstance.close();
	      })['catch'](function (res) {
	        $.log(res.data);
	      });
	    };

	    s.cancel = function () {
	      $.log('closing a sign-up modal...');

	      $uibModalInstance.dismiss();
	    };
	  }]);

	  return signUpModalOptions;
	}

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class='modal-header'>\r\n  <h4 class='modal-title'>sign up</h4>\r\n</div>\r\n\r\n<form ng-submit='signUp()'>\r\n  <div class='modal-body'>\r\n    <div class='form-group'>\r\n      <input\r\n        type='text' class='form-control' placeholder='username'\r\n        ng-model='username'>\r\n    </div>\r\n    \r\n    <div class='form-group'>\r\n      <input\r\n        type='password' class='form-control' placeholder='password'\r\n        ng-model='password'>\r\n    </div>\r\n    \r\n    <div class='form-group'>\r\n      <input\r\n        type='password' class='form-control'\r\n        placeholder='confirm password'\r\n        ng-model='passwordConfirmation'>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class='modal-footer'>\r\n    <div class='form-group'>\r\n      <button\r\n        type='button' class='btn btn-default'\r\n        ng-click='cancel()'>\r\n          cancel\r\n      </button>\r\n      \r\n      <button type='submit' class='btn btn-primary'>ok</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n";

/***/ }
/******/ ]);