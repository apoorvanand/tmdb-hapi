[![Build Status](https://travis-ci.com/apoorvanand/tmdb-hapi.svg?branch=master)](https://travis-ci.com/apoorvanand/tmdb-hapi)

 Hapi.js wrapper for TMDB api 
 #Endpoints
 '''
 /popular            var req = unirest("GET", "https://api.themoviedb.org/3/movie/popular");


 /toprated          var req = unirest("GET", "https://api.themoviedb.org/3/movie/top_rated");
 
    path: '/nowplaying',
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/now_playing");

    path: '/new',

        var req = unirest("GET", "https://api.themoviedb.org/3/movie/latest");

    path: '/upcoming',
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/upcoming");
'''
