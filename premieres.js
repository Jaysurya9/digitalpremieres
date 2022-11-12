<!-- Function Script -->
<script>
	//The Movie Data Base
    const API_KEY = 'api_key=9a85a018f878f3af62f324c75c332248';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const LANG = '&language=en'
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const OrginalIMG_URL = 'https://image.tmdb.org/t/p/original';
    const searchURL = BASE_URL + '/search/movie?'+API_KEY;
    
    const DiscoverMovies = BASE_URL + '/discover/movie?'+ API_KEY+'&language=en-US&region=US';
    const DiscoverMovies_Popularity_DESC = BASE_URL + '/discover/movie?&region=US&sort_by=popularity.desc&'+ API_KEY+'&language=en-US';    
    const Most_Popular_Movies = BASE_URL + '/discover/movie?&region=US&sort_by=popularity.desc&'+API_KEY+'&language=en-US';

    // Get list of the current popular movies on TMDB
    const Popular_Movies = BASE_URL + '/movie/popular?' + API_KEY + LANG + '&page=1' ;
    const Upcoming_Movies = BASE_URL + '/movie/upcoming?' + API_KEY + LANG + '&page=1' ;
    const Top_Rated_Movies = BASE_URL + '/movie/top_rated?' + API_KEY + LANG + '&page=1' ;
    const Movies_NowPlaying = BASE_URL + '/movie/now_playing?' + API_KEY + LANG + '&page=1' ;
    const Movies_Latest = BASE_URL + '/movie/latest?' + API_KEY;
    
 	// Get list of Trending Topics on TMDB
    const Trending_All_Last_24h = BASE_URL + '/trending/all/day?' + API_KEY;
    const Trending_All_Last_7d = BASE_URL + '/trending/all/week?' + API_KEY;
    const Trending_Movies_Last_24h = BASE_URL + '/trending/movie/day?' + API_KEY;
    const Trending_Movies_Last_7d = BASE_URL + '/trending/movie/week?' + API_KEY;
    const Trending_Shows_Last_24h = BASE_URL + '/trending/tv/day?' + API_KEY;
    const Trending_Shows_Last_7d = BASE_URL + '/trending/tv/week?' + API_KEY;
    const Trending_Persons_Last_24h = BASE_URL + '/trending/person/day?' + API_KEY;
    const Trending_Persons_Last_7d = BASE_URL + '/trending/person/week?' + API_KEY;


    const Telugu_Movies = BASE_URL + '/discover/movie?&region=US&' + API_KEY + '&with_original_language=te';
    const Tamil_Movies = BASE_URL + '/discover/movie?&region=US&' + API_KEY + '&with_original_language=ta';
    const English_Movies = BASE_URL + '/discover/movie?&region=US&' + API_KEY + '&with_original_language=en';
    const Hindi_Movies = BASE_URL + '/discover/movie?&region=US&' + API_KEY + '&with_original_language=hi';
    const Malayalam_Movies = BASE_URL + '/discover/movie?' + API_KEY + '&with_original_language=ml';

    const main = document.getElementById('main');
    const form =  document.getElementById('form');
    const search = document.getElementById('search');

    
    
    getMovies(Trending_Movies_Last_7d)

    // Get Movies
    function getMovies(url) {
      fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);

      })
    }
    
    // Show Movies
    function showMovies(data) {
        main.innerHTML = '';

        data.forEach(movie => {
          const {title, poster_path, backdrop_path, popularity, vote_count, vote_average, overview, release_date, adult, original_title, original_language, video, id, provider_name, logo_path} = movie;
          const movieEl = document.createElement('div');
          movieEl.classList.add('movie');
          movieEl.innerHTML = `<div class="w3-container w3-col s6 m3 l2 ">
    <img class="w3-card img-responsive img-rounded"  src="${poster_path? IMG_URL + poster_path: "http://via.placeholder.com/1080x1580/000000/FFFFFF/?text=No Poster Available"  }" alt="${title}  width="100" height="100">
    <p>

    </p>
      </div>`
          main.appendChild(movieEl);
        })
    }

    // Movie Search Function
    form.addEventListener('submit', (e) => {

      e.preventDefault();

      const searchTerm = search.value;

      if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
      }
      else{
        getMovies(API_URL);
      }
    })
    
</script>
<!-- /Function Script -->
