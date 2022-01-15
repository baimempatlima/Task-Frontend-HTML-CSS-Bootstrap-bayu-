
const table = document.getElementById('datanews');
table.innerHTML = loading();

const data = fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=5e1086c210a248fe9f17d8352b0cbe91');
data.then(response =>response.json())
.then(response => {
    const artikel = response.articles
    table.innerHTML = updateUiNews(artikel);
})

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
        table.innerHTML = loading();
        const inputKeyword = document.querySelector('.input-keyword');
        const newssearch = await getNewsSearch(inputKeyword.value);
        updateUISearch(newssearch);
});

document.addEventListener('click', async function (e) {
    if(e.target.classList.contains('modal-detail-button')){
        const url = e.target.dataset.url; 
        const movieDetail = await getMovieDetail(url);
        updateUIDetail(movieDetail);
    }
})

function getNewsSearch(keyword) {
    return fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=5e1086c210a248fe9f17d8352b0cbe91&q='  + keyword)
        .then(response => response.json())
        .then(response => response.articles)
}

function updateUISearch(search) {
    let newsCardsSearch= '';
    search.forEach(n => newsCardsSearch += showNewsCard(n));
    
    const newscontainer = document.querySelector('.news-container'); 
    newscontainer.innerHTML = newsCardsSearch;
    return newsCardsSearch;
}
function updateUiNews(news) {
    let newsCards= '';
    news.forEach(n => newsCards += showNewsCard(n));
    const newscontainer = document.querySelector('.news-container'); 
    newscontainer.innerHTML = newsCards;
    return newsCards;
}
function showNewsCard(n) {
    return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${n.urlToImage}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${n.publishedAt}</h6>
        <p class="card-text">${n.description}</p>
        <a href="${n.url}" target="_blank" class="btn btn-primary">Baca selengkapnya</a>
        </div>
    </div>
</div>`;
}

function loading() {
    return `
    <div class="col-md-4 mx-5">      
        
    </div>
    <div class="col-md-4 mx-5">      
        <h5 class="card-title">Loading...</h5> 
    </div>
    <div class="col-md-4 mx-5">      
        
    </div>`;
}
