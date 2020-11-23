const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imgPath = 'https://image.tmdb.org/t/p/w1280';
const main = document.querySelector('main');
async function getMovies(){
    const resp = await fetch(apiUrl);
    const respData = await resp.json();

    console.log(respData);

    respData.results.forEach((movie)=>{
        const {poster_path, title, vote_average, overview} = movie;
        let movieEl = document.createElement('div');
        movieEl.innerHTML = `
        <img src="${imgPath+poster_path}" alt="#">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <p>${overview}</p>
        </div>
        `;
        movieEl.classList.add('movie')
        main.appendChild(movieEl);

        
    })

    return respData;
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green';
    } else if(vote >=5){
        return 'orange';
    } else{
        return 'red';
    }
}

getMovies();