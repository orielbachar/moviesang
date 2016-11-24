app.controller('flixCtrl', function($scope, flixService){
  $scope.allMovies = flixService.allMovies;
  $scope.userMovies = flixService.userMovies;

  $scope.addMovie = function(id, index){
    flixService.userAddMovie(id, index);
    // console.log("hello");
  }

  $scope.removeMovie = function(index){
    flixService.userRemoveMovie(index);
  }

  //show / hide movies from user collection
  //buttons

});
