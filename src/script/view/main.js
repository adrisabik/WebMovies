
function main(){
    
    const imgUrl = "https://image.tmdb.org/t/p/w500/";
    const nowPlayingMovieUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=c2b4216d453655a4498187c70f1e8335&language=en-US&page=1";
    const popularMovieUrl = "https://api.themoviedb.org/3/movie/popular?api_key=c2b4216d453655a4498187c70f1e8335&language=en-US&page=1";
    const topRatedMovieUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=c2b4216d453655a4498187c70f1e8335&language=en-US&page=1";
    const upcomingMovieUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=c2b4216d453655a4498187c70f1e8335&language=en-US&page=1";
    
    const nowPlayingButton = document.getElementById("nowPlaying");
    const popularButton = document.getElementById("popular");
    const topRatedButton = document.getElementById("topRated");
    const upcomingButton = document.getElementById("upcoming");

    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    // mendapatkan data movie dengan api
    const getMovie = (url) => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.error){
                    showResponseMessage(responseJson.message);
                }
                else{
                    renderMovie(responseJson.results);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    // menampilkan data movie
    const renderMovie = (movies) => {
        const listMovie = document.querySelector("#listMovie");
        listMovie.innerHTML = "";

        movies.forEach(movie => {
            listMovie.innerHTML += `
            <card-item 
                src="${imgUrl}${movie.poster_path}"
                title="${movie.original_title}"
                release="${movie.release_date}" 
                movie-id="${movie.id}">
            </card-item>
            `
        })

        // event listener button detail movie
        const modalButton = document.querySelectorAll(".modal-detail-button");
        modalButton.forEach(button=>{
            button.addEventListener("click", function(){
                let movieId = this.getAttribute("data-id");
                fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c2b4216d453655a4498187c70f1e8335&language=en-US`)
                    .then(response => {
                        return response.json();
                    })
                    .then(responseJson => {
                        if(responseJson.error){
                            showResponseMessage(responseJson.message);
                        }
                        else{
                            renderDetailMovie(responseJson);
                        }
                    })
                    .catch(error => {
                        showResponseMessage(error);
                    })
            })
        })
    }

    // menampilkan detail movie
    const renderDetailMovie = (movie) =>  {
        const modalBody = document.querySelector(".modal-body");
        const genres = movie.genres;
        let listGenre = [];
        
        genres.forEach(genre => {
            listGenre.push(genre.name);
        })

        modalBody.innerHTML = `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${imgUrl}${movie.poster_path}" class="img-fluid" alt="poster">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${movie.original_title}</h4></li>
                            <li class="list-group-item"><strong>Release Date : </strong>${movie.release_date}</li>
                            <li class="list-group-item"><strong>Genre : </strong>${listGenre}</li>
                            <li class="list-group-item"><strong>Companies : </strong>${movie.production_companies[0].name}</li>
                            <li class="list-group-item"><strong>Overview : </strong>${movie.overview}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    // event listener setiap button
    searchButton.addEventListener("click", ()=>{
        getMovie(`https://api.themoviedb.org/3/search/movie?api_key=c2b4216d453655a4498187c70f1e8335&language=en-US&query=${searchInput.value}&page=1`);
    })
    
    nowPlayingButton.addEventListener("click", ()=>{
        getMovie(nowPlayingMovieUrl)
    });

    popularButton.addEventListener("click", ()=>{
        getMovie(popularMovieUrl)
    });
    
    topRatedButton.addEventListener("click", ()=>{
        getMovie(topRatedMovieUrl)
    });
    upcomingButton.addEventListener("click", ()=>{
        getMovie(upcomingMovieUrl)
    });


}

export default main;