/**
 * @ngdoc module
 * @name material.components.bottomSheet
 * @description
 * BottomSheet
 */
angular.module('material.components.bottomSheet', [
  'material.services.interimElement'
])
  .directive('materialBottomSheet', [
    MaterialBottomSheetDirective
  ])
  .factory('$materialBottomSheet', [
    '$$interimElement',
    '$animate',
    MaterialBottomSheet
  ]);

function MaterialBottomSheetDirective() {
  return {
    restrict: 'E'
  };
}

/**
 * @ngdoc service
 * @name $materialBottomSheet
 * @module material.components.bottomSheet
 *
 * @description
 * Open a bottom sheet on the screen.
 *
 * Only one bottom sheet may ever be active at any time. If a new sheet is
 * shown while a different one is active, the sheet will be automatically
 * hidden.
 *
 * `$materialBottomSheet` is an `$interimElement` service and adheres to the same behaviors.
 *  - `$materialBottomSheet.show()`
 *  - `$materialBottomSheet.hide()`
 *  - `$materialBottomSheet.cancel()`
 *
 * @usage
 * <hljs lang="html">
 * <div ng-controller="MyController">
 *   <material-button ng-click="openBottomSheet()">
 *     Open a Bottom Sheet!
 *   </material-button>
 * </div>
 * </hljs>
 * <hljs lang="js">
 * var app = angular.module('app', ['ngMaterial']);
 * app.controller('MyController', function($scope, $materialBottomSheet) {
 *   $scope.openBottomSheet = function() {
 *     $materialBottomSheet.show({
 *       template: '<material-bottom-sheet>Hello!</material-bottom-sheet>'
 *     });
 *   };
 * });
 * </hljs>
 */

 /**
 * @ngdoc method
 * @name $materialBottomSheet#show
 *
 * @description
 * Show a bottom sheet with the specified options.
 *
 * @paramType Options
 * @param {string=} templateUrl The url of an html template file that will
 * be used as the content of the bottom sheet. Restrictions: the template must
 * have an outer `material-bottom-sheet` element.
 * @param {string=} template Same as templateUrl, except this is an actual
 * template string.
 * @param {string=} controller The controller to associate with this bottom sheet.
 * @param {string=} locals An object containing key/value pairs. The keys will
 * be used as names of values to inject into the controller. For example, 
 * `locals: {three: 3}` would inject `three` into the controller with the value
 * of 3.
 * @param {object=} resolve Similar to locals, except it takes promises as values
 * and the bottom sheet will not open until the promises resolve.
 * @param {string=} controllerAs An alias to assign the controller to on the scope.
 *
 * @returns {Promise} Returns a promise that will be resolved or rejected when
 *  `$materialBottomSheet.hide()` or `$materialBottomSheet.cancel()` is called respectively.
 */

/**
 * @ngdoc method
 * @name $materialBottomSheet#hide
 *
 * @description
 * Hide the existing bottom sheet and `resolve` the promise returned from 
 * `$materialBottomSheet.show()`.
 *
 * @param {*} arg An argument to resolve the promise with.
 *
 */

/**
 * @ngdoc method
 * @name $materialBottomSheet#cancel
 *
 * @description
 * Hide the existing bottom sheet and `reject` the promise returned from 
 * `$materialBottomSheet.show()`.
 *
 * @param {*} arg An argument to reject the promise with.
 *
 */

function MaterialBottomSheet($$interimElement, $animate) {
  var backdrop;

  var factoryDef = {
    onShow: onShow,
    onRemove: onRemove,
  };

  var $materialBottomSheet = $$interimElement(factoryDef);
  return $materialBottomSheet;

  function onShow(scope, element, options) {
    backdrop = angular.element('<material-backdrop class="opaque ng-enter">');
    backdrop.on('click touchstart', function() {
      $materialBottomSheet.cancel();
    });
    $animate.enter(backdrop, options.parent, null);
    return $animate.enter(element, options.parent);
  }

  function onRemove(scope, element, options) {
    //$animate.leave(backdrop);
    return $animate.leave(element, function() { console.log('done!'); });
  }
}
