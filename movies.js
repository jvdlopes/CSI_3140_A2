var clicked = false;
var currentRating = 0;
var editRating = 0;
var editPlacement;
var movieList = [];
var listJSON = JSON.stringify(movieList);
localStorage.setItem("fullList",listJSON);
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

    var temp = localStorage.getItem("fullList");
    var tempArray = JSON.parse(temp); 
    tempArray.push(new movie(name,genre));

    var tempString = JSON.stringify(tempArray);
    
    localStorage.clear();
    localStorage.setItem("fullList",tempString);
    genreSelect(document.getElementById("filterSelect"));

    currentRating = 0;
    clearStars();
}

function movie(name,genre){
    this.movieID = "" + name + genre + currentRating;
    this.title = "" + name;
    this.genre = "" + genre;
    this.rating = currentRating;
    this.watched = false;
}

function renderMovies(Movie) {
    printer.innerHTML = "";
    var post = "";
    for (let x = 0; x < Movie.length; x++) {
        post += "<div id = 'movieCard'> <div style= 'display: flex;'> <h1 ";
        if(Movie[x].watched) {
            post += "style='color:white; margin:0; text-decoration: line-through; text-decoration-color: black; padding-right:20px;'>" + Movie[x].title + "</h1> ";
        }
        else {
            post += "style='color:white; margin:0; padding-right:20px;'>" + Movie[x].title + "</h1> ";
        }

        post += "<button onclick='openEdit(\"" + Movie[x].title + Movie[x].genre + Movie[x].rating + "\")' style='float:right;'>edit</button> <button onclick='watched(\"" + Movie[x].title + Movie[x].genre + Movie[x].rating + "\")' style='float:right;'>watched</button> <button onclick='remove(\"" + Movie[x].title + Movie[x].genre + Movie[x].rating + "\")' style='float:right;'>remove</button> </div>";
        post += "<h2 style='color: yellow; margin:0;'>";
        for(let y = 1; y<= Movie[x].rating; y++){
            post += "★";
        }
        post += "</h2> <h3 id='genreText'>" + Movie[x].genre + "</h3> </div>";
    }
    printer.innerHTML ="" + post;
}

function openEdit(editMovie) {
    document.getElementById("modal").style.display = "block";
    var temp = localStorage.getItem("fullList");
    var tempArray = JSON.parse(temp); 
    for(var x = 0; x< tempArray.length; x++) {
        if(tempArray[x].movieID == editMovie) {
            var uneditedTitle = document.getElementById("titleEdit");
            var uneditedGenre = document.getElementById("genreEdit");
            
            switch(tempArray[x].rating) {
                case 1:
                    var uneditedRating = document.getElementById("estar1");
                    break;
                case 2:
                    var uneditedRating = document.getElementById("estar2");
                    break;
                case 3:
                    var uneditedRating = document.getElementById("estar3");
                    break;
                case 4:
                    var uneditedRating = document.getElementById("estar4");
                    break;
                case 5:
                    var uneditedRating = document.getElementById("estar5");
                    break;
            }
            editRating = tempArray[x].rating;
            editClicked(tempArray[x].rating);

            uneditedTitle.value = tempArray[x].title;
            uneditedGenre.value = tempArray[x].genre;
            uneditedRating.checked = true;
            editPlacement = x;
        }
    }
}

function submitEdit() {
    var temp = localStorage.getItem("fullList");
    var tempArray = JSON.parse(temp); 

    var uneditedTitle = document.getElementById("titleEdit");
    var uneditedGenre = document.getElementById("genreEdit");
    
    tempArray[editPlacement].title = uneditedTitle.value;
    tempArray[editPlacement].genre = uneditedGenre.value;
    tempArray[editPlacement].rating = editRating;
    tempArray[editPlacement].movieID = "" + uneditedTitle.value + uneditedGenre.value + editRating;

    var tempString = JSON.stringify(tempArray);
    localStorage.clear();
    localStorage.setItem("fullList",tempString);
    genreSelect(document.getElementById("filterSelect"));
    closeEdit();
}

function closeEdit() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("editForm").reset();
    editRating = 0;
    clearEdit();
}

function watched(watchedMovie) {
    var temp = localStorage.getItem("fullList");
    var tempArray = JSON.parse(temp); 
    for(var x = 0; x< tempArray.length; x++) {
        if(tempArray[x].movieID == watchedMovie) {
            tempArray[x].watched = true;
        }
    }

    var tempString = JSON.stringify(tempArray);
    localStorage.clear();
    localStorage.setItem("fullList",tempString);
    genreSelect(document.getElementById("filterSelect"));
}

function remove(removedMovie) {
    var temp = localStorage.getItem("fullList");
    var tempArray = JSON.parse(temp); 
    for(var x = 0; x< tempArray.length; x++) {
        if(tempArray[x].movieID == removedMovie) {
            tempArray.splice(x,1);
        }
    }

    var tempString = JSON.stringify(tempArray);
    localStorage.clear();
    localStorage.setItem("fullList",tempString);
    genreSelect(document.getElementById("filterSelect"));
}

function genreSelect(selectedFilter){
    var filter = selectedFilter.options[selectedFilter.selectedIndex].value;
    
    var temp = localStorage.getItem("fullList");
    var originalList = JSON.parse(temp); 
    var tempArray = [];

    if(filter == "General"){
        renderMovies(originalList);
    }
    else{
        for(var x = 0; x < originalList.length; x++){
            if(originalList[x].genre == filter){
                tempArray.push(originalList[x]);
            }
        }
        renderMovies(tempArray);
    }
    
}