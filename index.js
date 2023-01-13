const { get } = require("http");

const apiLink = 'https://api.themoviedb.org/3/movie/550?api_key=6d9968e6973545f5c00b787e59a173e4';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi = 'https;//api.themoviedb.org/3/search/movie?&api_key=6d9968e6973545f5c00b787e59a173e4&query=';

const main = document.getElementById('section');
const form = document.getElementById('from');
const search= document.getElementById('query');

function returnMovies(url)
{
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            const div_row = document.createElement('div');
            const div_col = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`
            image.src = imgPath + element.poster_path;
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_col.appendChild(div_card);
            div_row.appendChild(div_col);
            

        });
    });
}