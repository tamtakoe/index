app = angular.module('app', ['ngRoute'],
    function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'views/home.html',
      controller: HomeCntl
      });

      $routeProvider.when('/meetups', {
        templateUrl: 'views/meetups.html',
        controller: MeetupsCntl
      });

      $routeProvider.when('/communities', {
        templateUrl: 'views/communities.html',
        controller: CommunitiesCntl
      });
    });

function HomeCntl($route, $routeParams, $location) {
  console.log('HomeCntl')
}

function MeetupsCntl($scope, $http, $routeParams) {
  var url = "http://www.google.com/calendar/feeds/piterunited@gmail.com/public/full?alt=json-in-script&callback=JSON_CALLBACK&orderby=starttime&max-results=15&singleevents=true&sortorder=ascending&futureevents=true";
  $http.jsonp(url).success(function(data){
    console.log(data.feed.entry);
    $scope.events = data.feed.entry;
  });
}

function CommunitiesCntl($scope, $http, $routeParams) {
  var url = "https://spreadsheets.google.com/feeds/list/0AhI9eP7t1xJedGg3VFVnbHBJUFBsQ1FONDN5WUY5dFE/1/public/values?alt=json-in-script&callback=JSON_CALLBACK";
  $http.jsonp(url).success(function(data){
    $scope.communities = data.feed.entry.map(function(item){
      console.log(item);
      var comm = {}
      for(var key in item) {
        console.log(key);
        if(key.match(/^gsx\$/)){
          attr = key.replace('gsx$','')
      comm[attr] = item[key].$t
        }
      }
      return comm;
    })
    console.log($scope.communities);
  });
}

