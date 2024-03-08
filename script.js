/* Menu Bar */
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=9a85a018f878f3af62f324c75c332248';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const TrendingMoviesShowsInUSToday = BASE_URL + '/trending/all/day?'+API_KEY+'&region=US&&with_original_language=en';

const TrendingEnglishMovies = BASE_URL + '/discover/movie?'+API_KEY+'&region=US&&with_original_language=en';
const EnglishMovies2024 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2024&with_original_language=en';
const EnglishMovies2023 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2023&with_original_language=en';
const EnglishMovies2022 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2022&with_original_language=en';
const EnglishMovies2021 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2021&with_original_language=en';
const EnglishMovies2020 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2020&with_original_language=en';
const EnglishMovies2019 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2019&with_original_language=en';
const EnglishMovies2018 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2018&with_original_language=en';

const TrendingTeluguMovies = BASE_URL + '/discover/movie?'+API_KEY+'&with_original_language=te';
const TeluguMovies2024 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2024&with_original_language=te';
const TeluguMovies2023 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2023&with_original_language=te';
const TeluguMovies2022 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2022&with_original_language=te';
const TeluguMovies2021 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2021&with_original_language=te';
const TeluguMovies2020 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2020&with_original_language=te';
const TeluguMovies2019 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2019&with_original_language=te';
const TeluguMovies2018 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2018&with_original_language=te';

const TrendingHindiMovies = BASE_URL + '/discover/movie?'+API_KEY+'&with_original_language=hi';
const HindiMovies2024 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2024&with_original_language=hi';
const HindiMovies2023 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2023&with_original_language=hi';
const HindiMovies2022 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2022&with_original_language=hi';
const HindiMovies2021 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2021&with_original_language=hi';
const HindiMovies2020 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2020&with_original_language=hi';
const HindiMovies2019 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2019&with_original_language=hi';
const HindiMovies2018 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2018&with_original_language=hi';

const TrendingTamilMovies = BASE_URL + '/discover/movie?'+API_KEY+'&with_original_language=ta';
const TamilMovies2024 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2024&with_original_language=ta';
const TamilMovies2023 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2023&with_original_language=ta';
const TamilMovies2022 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2022&with_original_language=ta';
const TamilMovies2021 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2021&with_original_language=ta';
const TamilMovies2020 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2020&with_original_language=ta';
const TamilMovies2019 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2019&with_original_language=ta';
const TamilMovies2018 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2018&with_original_language=ta';

const TrendingKannadaMovies = BASE_URL + '/discover/movie?'+API_KEY+'&with_original_language=kn';
const KannadaMovies2024 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2024&with_original_language=kn';
const KannadaMovies2023 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2023&with_original_language=kn';
const KannadaMovies2022 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2022&with_original_language=kn';
const KannadaMovies2021 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2021&with_original_language=kn';
const KannadaMovies2020 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2020&with_original_language=kn';
const KannadaMovies2019 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2019&with_original_language=kn';
const KannadaMovies2018 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2018&with_original_language=kn';


const TrendingMalayalamMovies = BASE_URL + '/discover/movie?'+API_KEY+'&with_original_language=ml';
const MalayalamMovies2024 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2024&with_original_language=ml';
const MalayalamMovies2023 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2023&with_original_language=ml';
const MalayalamMovies2022 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2022&with_original_language=ml';
const MalayalamMovies2021 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2021&with_original_language=ml';
const MalayalamMovies2020 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2020&with_original_language=ml';
const MalayalamMovies2019 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2019&with_original_language=ml';
const MalayalamMovies2018 = BASE_URL + '/discover/movie?'+API_KEY+'&primary_release_year=2018&with_original_language=ml';


const main = document.getElementById('main');
const form =  document.getElementById('form');
const form1 =  document.getElementById('form1');
const search = document.getElementById('search279');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = '';
var totalPages = 100;

getMovies(TrendingMoviesShowsInUSToday);

/* Get Movie and Shows Data Functions */

var el_up = document.getElementById("");
var el_down = document.getElementById("");
function gfg_Run() {
  var ID = [];
  $("*").each(function() {
    if (this.id) {
      ID.push(this.id);
    }
  });
        return ID;
}
var z=gfg_Run();


/* English Movies */

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="trending-english-movies"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TrendingEnglishMovies);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="english-movies-2023"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(EnglishMovies2023);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="english-movies-2022"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(EnglishMovies2022);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="english-movies-2021"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(EnglishMovies2021);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="english-movies-2020"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(EnglishMovies2020);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="english-movies-2019"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(EnglishMovies2019);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="english-movies-2018"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(EnglishMovies2018);
    });
  }
}

/* Telugu Movies */

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="trending-telugu-movies"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TrendingTeluguMovies);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="telugu-movies-2023"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TeluguMovies2023);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="telugu-movies-2022"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TeluguMovies2022);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="telugu-movies-2021"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TeluguMovies2021);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="telugu-movies-2020"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TeluguMovies2020);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="telugu-movies-2019"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TeluguMovies2019);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="telugu-movies-2018"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TeluguMovies2018);
    });
  }
}

/* Hindi Movies */

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="trending-hindi-movies"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TrendingHindiMovies);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="hindi-movies-2023"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(HindiMovies2023);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="hindi-movies-2022"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(HindiMovies2022);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="hindi-movies-2021"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(HindiMovies2021);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="hindi-movies-2020"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(HindiMovies2020);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="hindi-movies-2019"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(HindiMovies2019);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="hindi-movies-2018"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(HindiMovies2018);
    });
  }
}

/* Tamil Movies */

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="trending-tamil-movies"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TrendingTamilMovies);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="tamil-movies-2023"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TamilMovies2023);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="tamil-movies-2022"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TamilMovies2022);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="tamil-movies-2021"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TamilMovies2021);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="tamil-movies-2020"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TamilMovies2020);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="tamil-movies-2019"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TamilMovies2019);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="tamil-movies-2018"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TamilMovies2018);
    });
  }
}

/*Kannada Movies */

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="trending-kannada-movies"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TrendingKannadaMovies);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="kannada-movies-2023"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(KannadaMovies2023);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="kannada-movies-2022"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(KannadaMovies2022);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="kannada-movies-2021"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(KannadaMovies2021);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="kannada-movies-2020"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(KannadaMovies2020);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="kannada-movies-2019"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(KannadaMovies2019);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="kannada-movies-2018"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(KannadaMovies2018);
    });
  }
}

/* Malayalam Movies */

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="trending-malayalam-movies"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(TrendingMalayalamMovies);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="malayalam-movies-2023"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(MalayalamMovies2023);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="malayalam-movies-2022"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(MalayalamMovies2022);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="malayalam-movies-2021"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(MalayalamMovies2021);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="malayalam-movies-2020"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(MalayalamMovies2020);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="tmalayalam-movies-2019"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(MalayalamMovies2019);
    });
  }
}

for (var i = 0; i < z.length; i++) {
  if(Object.values(z)[i]=="malayalam-movies-2018"){
    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
      getMovies(MalayalamMovies2018);
    });
  }
}

/* Get Movies Info Function */

function getMovies(url) {
  lastUrl = url;

  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results)
    if(data.results.length !=0){
      showMovies(data.results);
      //pagination
      currentPage = data.page;
      nextPage = currentPage + 1;
      prevPage = currentPage - 1;
      totalPages = data.total_pages;

      current.innerText = currentPage;

      if(currentPage <= 1){
        prev.classList.add('disabled');
        next.classList.remove('disabled')
      }else if(currentPage>= totalPages){
        prev.classList.remove('disabled');
        next.classList.add('disabled')
      }else{
        prev.classList.remove('disabled');
        next.classList.remove('disabled')
      }
    }
    else{
      main.innerHTML=`<h1 class= "noResult">No Result Found</h1>`
    }
  })
}

/* Show Movies or Shows Info JS Code */

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, backdrop_path, popularity, vote_count, vote_average, overview, release_date, adult, original_title, original_language, video, id, provider_name, logo_path} = movie;
        var vote1=vote_average
        if(vote1>0){
          vote1=vote_average;
        }
        else{
          vote1="TBA";
        }
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
          <img src="${poster_path? IMG_URL+poster_path: "https://via.placeholder.com/950/000000/FFFFFF/?text=No Poster Available" }" alt="${title}">

          <div class="movie-info">
              <h3>${title}</h3>
              <!-- <span id="sample" class="${getColor(vote1)} d-flex-row justify-content right"><b>${vote1}</b></span> -->
          </div>

          <div class="overview">
            <p>Rating: ${vote1}<p>
            <p>Vote Count: ${vote_count}<p>
            <p>Release Date: ${release_date}<p>
            <button class="know-more" id="${id}">Know More</button>
          </div>
        `
        main.appendChild(movieEl);
        document.getElementById(id).addEventListener('click', () => {
          console.log(id)
          openNav(movie)
        })

    })
}

/* Overlay Content JS Script */

const overlayContent = document.getElementById('overlay-content');

function openNav(movie) {
  let id = movie.id;
  fetch(BASE_URL + '/movie/'+id+'/videos?'+API_KEY).then(res => res.json()).then(videoData => {
    console.log(videoData);
    if(videoData){
      document.getElementById("myNav").style.width = "100%";
      document.getElementById("myNav").style.height = "100%";
      var content = `
      <div>
        <article id="menu_a">
          <h2 id="resultq">${movie.title}</h2>
          <h3 id="resultq">Story Line</h3>
          <p id="resultq">${movie.overview}</p>
          <h3 id="resultq">Related Videos</h3>
        </article>
      </div>
       `
      if(videoData.results.length > 0){
        var embed = [];
        var dots = [];
        videoData.results.forEach((video, idx) => {
          let {name, key, site} = video
          if(site == 'YouTube'){
            embed.push(`
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" 
              title="${name}" 
              class="embed hide" 
              frameborder="0" 
              allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture" 
              allowfullscreen>
              </iframe>
            `)
            dots.push(`
              <span class="dot">${idx + 1}</span>
            `)
          }
        })

        var content2=`
          ${embed.join('')}
          <br/>
          <div class="dots">${dots.join('')}</div>
        `
        overlayContent.innerHTML = content+content2;
        activeSlide=0;
        showVideos();
      }
      else{
        overlayContent.innerHTML = content+`<center><h1 class="no-results">No Results Found</h1></center>`
      }
    }
  })
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if(searchTerm) {
    getMovies(searchURL+'&query='+searchTerm);
  }
  else{
    getMovies(API_URL);
  }
})

function getColor(vote) {
  if(vote>=8){return 'green'}
  else if(vote>=5){return "orange"}
  else if(vote>0){return "red"}
  else{return 'blue'}
}

/* Pagenaton JS Code */

prev.addEventListener('click', () => {
  if(prevPage > 0){
    pageCall(prevPage);
    form1.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }
})

next.addEventListener('click', () => {
  if(nextPage <= totalPages){
    pageCall(nextPage);
    form1.scrollIntoView({block: "start", inline: "nearest"})
  }
})

function pageCall(page){
  let urlSplit = lastUrl.split('?');
  let queryParams = urlSplit[1].split('&');
  let key = queryParams[queryParams.length -1].split('=');
  if(key[0] != 'page'){
    let url = lastUrl + '&page='+page
    getMovies(url);
    console.log(url)
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length -1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getMovies(url);
    console.log(url)
  }
}
