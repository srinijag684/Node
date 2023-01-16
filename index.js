console.log("running");

const apiLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6d9968e6973545f5c00b787e59a173e4&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi = 'https;//api.themoviedb.org/3/search/movie?&api_key=6d9968e6973545f5c00b787e59a173e4&query=';

const main = document.getElementById('section');
const form = document.getElementById('from');
const search= document.getElementById('query');

returnMovies(apiLink)
  function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');
        
        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');
        
        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');
        
        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');
        
        const title = document.createElement('h3');
        title.setAttribute('id', 'title');
        
        const center = document.createElement('center');
  
        title.innerHTML = `${element.title}`;
        image.src = imgPath + element.poster_path;
  
        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);
  
        main.appendChild(div_row);
    });
  });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if(searchItem){
        returnMovies(searchApi + searchItem);
        search.value = " ";
    }

})