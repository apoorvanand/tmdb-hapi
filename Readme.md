#TITLE live on
 https://artist-search-bruipqztab.now.sh
 Path : 
 /popular            var req = unirest("GET", "https://api.themoviedb.org/3/movie/popular");


 /toprated          var req = unirest("GET", "https://api.themoviedb.org/3/movie/top_rated");


    path: '/nowplaying',
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/now_playing");

    path: '/new',

        var req = unirest("GET", "https://api.themoviedb.org/3/movie/latest");

    path: '/upcoming',
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/upcoming");
