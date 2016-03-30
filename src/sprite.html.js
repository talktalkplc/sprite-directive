angular.module('APP/sprite/html/sprite.html', []).run(['$templateCache', function ($templateCache) {
    $templateCache.put('APP/sprite/html/sprite.html',
      '<img ng-class="\'{{img}}\'" alt="{{alt}}" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=">');
}]);
