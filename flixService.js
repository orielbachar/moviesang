app.factory('flixService', function(){

var allMovies = [
    {id: 0, title: "Lion King", img:"http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg", description:"A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days.", year:"1994"},
    {id: 1, title: "Beauty and the Beast", img:"http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200", description:"A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love.", year:"1994"},
    {id: 2, title: "Tarzan", img:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg", description:"The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan.", year:"1994"},
    {id: 3, title: "The Sword in the Stone", img:"http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg", description:"Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom.", year:"1994"},
    {id: 4, title: "Beauty and the Beast", img:"http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg", description:"Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad.", year:"1994"}
  ];

var userMovies = [];

  var userAddMovie = function(id, index){
    for (var i = 0; i < userMovies.length; i++) {
      if(userMovies[i].id == id){
        return;
      }
    }
    userMovies.push(allMovies[index]);
  }

  var userRemoveMovie = function(index){
    this.userMovies.splice(this.allMovies[index], 1);
  }

  return {
    allMovies: allMovies,
    userMovies: userMovies,
    userAddMovie: userAddMovie,
    userRemoveMovie: userRemoveMovie
  };
});
