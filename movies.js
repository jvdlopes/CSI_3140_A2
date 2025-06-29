var clicked = false;
var currentRating = 0;
var editRating = 0;
var movieList = [];
var printer = document.getElementById("movieContainer");

function clearStars(){
    var star5 = document.getElementById('s5');
    var star4 = document.getElementById('s4');
    var star3 = document.getElementById('s3');
    var star2 = document.getElementById('s2');
    var star1 = document.getElementById('s1');
    const starList = [star1,star2,star3,star4,star5];

    
    if(!clicked){
        star5.style.color = "darkgray";
        star4.style.color = "darkgray";
        star3.style.color = "darkgray";
        star2.style.color = "darkgray";
        star1.style.color = "darkgray";
    }
    else{
        for(var i = 0; i<currentRating; i++){
            starList[i].style.color = "yellow";
        }
        for(var i = 4; i>=currentRating; i--){
            starList[i].style.color = "darkgray";
        }
    }
    
}

function clearEdit(){
    var star5 = document.getElementById('e5');
    var star4 = document.getElementById('e4');
    var star3 = document.getElementById('e3');
    var star2 = document.getElementById('e2');
    var star1 = document.getElementById('e1');
    const starList = [star1,star2,star3,star4,star5];

    
    if(!clicked){
        star5.style.color = "darkgray";
        star4.style.color = "darkgray";
        star3.style.color = "darkgray";
        star2.style.color = "darkgray";
        star1.style.color = "darkgray";
    }
    else{
        for(var i = 0; i<editRating; i++){
            starList[i].style.color = "yellow";
        }
        for(var i = 4; i>=editRating; i--){
            starList[i].style.color = "darkgray";
        }
    }
    
}

function starsFill(x){
    var star5 = document.getElementById('s5');
    var star4 = document.getElementById('s4');
    var star3 = document.getElementById('s3');
    var star2 = document.getElementById('s2');
    var star1 = document.getElementById('s1');

    const starList = [star1,star2,star3,star4,star5];

    for(var i = 0; i<x; i++){
        starList[i].style.color = "darkgoldenrod";
    }
}

function editFill(x){
    var star5 = document.getElementById('e5');
    var star4 = document.getElementById('e4');
    var star3 = document.getElementById('e3');
    var star2 = document.getElementById('e2');
    var star1 = document.getElementById('e1');

    const starList = [star1,star2,star3,star4,star5];

    for(var i = 0; i<x; i++){
        starList[i].style.color = "darkgoldenrod";
    }
}

function starClicked(x) {
    clicked = true;
    currentRating = x;
    var star5 = document.getElementById('s5');
    var star4 = document.getElementById('s4');
    var star3 = document.getElementById('s3');
    var star2 = document.getElementById('s2');
    var star1 = document.getElementById('s1');

    const starList = [star1,star2,star3,star4,star5];

    for(var i = 0; i<x; i++){
        starList[i].style.color = "yellow";
    }
    clearStars();
}

function editClicked(x) {
    clicked = true;
    editRating = x;
    var star5 = document.getElementById('e5');
    var star4 = document.getElementById('e4');
    var star3 = document.getElementById('e3');
    var star2 = document.getElementById('e2');
    var star1 = document.getElementById('e1');

    const starList = [star1,star2,star3,star4,star5];

    for(var i = 0; i<x; i++){
        starList[i].style.color = "yellow";
    }
    clearStars();
}

function newMovie(){
    var name = document.getElementById("movieName").value;
    var genre = document.getElementById("movieGenre").value;
    movieList.push(new movie(name,genre));
    refreshMovies();

    currentRating = 0;
    clearStars();
}

function movie(name,genre){
    this.name = name;
    this.genre = genre;
    this.rating = currentRating;
}

function refreshMovies() {
    printer.innerHTML = "";
    var post = "";
    for (let x = 0; x < movieList.length; x++) {
        post += "<div id = 'movieCard'> <h1 style='color:white; margin:0;'>" + movieList[x].name + "</h1> <h2 style='color: yellow; margin:0;'>";
        for(let y = 1; y<= movieList[x].rating; y++){
            post += "★";
        }
        post += "</h2> <h3 id='genreText'>" + movieList[x].genre + "</h3> </div>";
    }
    printer.innerHTML ="" + post;
}

function testModal() {
    document.getElementById("modal").style.display = "block";
}

function closeEdit() {
    document.getElementById("modal").style.display = "none";
}