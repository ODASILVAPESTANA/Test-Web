app.service('timelineService', function ($http, $q, $rootScope) {
    var deferred = $q.defer();
    $http.get('https://prueba-admision-web.herokuapp.com/data?cid=' + $rootScope.cid).then(function (data)
    {
        deferred.resolve(data);
    });
    this.getData = function () {
        return deferred.promise;
    }
});