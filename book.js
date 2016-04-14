(function () {

    var app = angular.module('bookmarks', []);

    app.controller('BookmarksController', ['$http', function($http){
        var that = this;
        $http.get('data.json')
                .success(function(data){
                    console.log(data);
                    that.collection = data.collection;
                })
                .error(function(){
                    console.error('Ошибка данных')
                })
        }])

        })()
