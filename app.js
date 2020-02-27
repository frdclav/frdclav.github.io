$('.nav-link').on('click', function (e) {
    e.preventDefault()
    var curLink = $(this).attr('href')
    // console.log($(this).attr('href'))
    if (curLink.includes("#")) {
        console.log('and were moving to ', curLink)
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            250,
            'linear'
        )
    } else {
        window.open(curLink);
        return false;
    }

})

// function for floating menu
var windowHeight = $(window).height();
var titleMenuXPos = $("#title-menu").position()

function slider() {
    // console.log('were in slider now', windowHeight, $(window).scrollTop())
    if ($(window).scrollTop() > titleMenuXPos.top) //Show the slider after scrolling down 100px
    {
        $('#floating-nav').show();
        // console.log('show')
    } else {
        $('#floating-nav').hide();
        // console.log('hide')
    }

}
$(window).scroll(function () {
    windowHeight = $(window).height();
    slider();
});
$(document).ready(function () {
    windowHeight = $(window).height();
    slider();
});


// ///////////////////// adding portfolio items
function portfolioObj(title, image, desc, link) {
    this.title = title
    this.img = image
    this.description = desc
    this.link = link

    // function to display portfolio item
    this.showItem = function () {
        var newDiv = $("<div>");
        newDiv.addClass('card m-3 flex-fill align-self-center rounded-0 border-dark bg-warning');
        newDiv.attr('style', 'min-width:200px;width:35vw;')
        var newCardBody = $("<div>");
        newCardBody.addClass('card-body bg-warning')
        var newImg = $("<img>");
        newImg.addClass('img-fluid');
        newImg.attr('src', this.img);
        newImg.attr('alt', this.title + ' image')
        var newTitle = $("<h5>")
        newTitle.addClass("card-title")
        newTitle.text(this.title)
        var newDesc = $("<p>");
        newDesc.addClass("card-text")
        newDesc.text(this.description)
        var newBtn = $("<a>");
        newBtn.addClass("btn btn-warning rounded-0 border-dark")
        newBtn.attr('href', this.link)
        newBtn.attr('target', '_blank')
        newBtn.text('Learn More!')

        newDiv.append(newCardBody);
        // newDiv.prepend(newImg)
        newCardBody.append(newTitle, newDesc, newBtn)
        $("#portfolio-space").append(newDiv)
    }
}
// create portfolio items

var a = new portfolioObj("Train Schedules", "assets/images/trainTimes.png", "An app that allows user to store train times and learn when the next train arrives. Uses Firebase Real Time DB for data persistence!", "https://github.com/frdclav/TrainSchedule")

var b = new portfolioObj("GiphyAPI search interface", "assets/images/giphyAPI2.png", "An app that allows user to search for gifs using the giphy api ", "https://github.com/frdclav/giphyApi")

var c = new portfolioObj("Kpop Trivia with timer", "assets/images/trivia.png", "A simple trivia game app with timer", "https://github.com/frdclav/TriviaGame")

var d = new portfolioObj("Star Wars RPG!", "assets/images/sw_rpg.png", "A simple RPG fighting game. Player chooses a fighter and fights the others to get stronger. Last one standing wins! Coded with bootstrap, javascript and jquery ", "https://github.com/frdclav/unit-4-game")

var e = new portfolioObj("Word Guess Game", "assets/images/kpop_hangman_thumb.png", "A simple word guess game where players guess a letter or the entire word. The theme is K-Pop artists. Check it out on github below! ", "https://github.com/frdclav/word-guess-game")

var f = new portfolioObj("Netflix & Chill Generator", "", "A web app that provides users with a few random netflix selections based on mood/genre as well as suggestions for a type of cocktail to drink based on ingredients. The app utilizes the uNoGS and theCocktailDB apis as well as Materialize and sweetAlert2. This was a group project for my UCBX Full Stack Web Development cohort.", "https://github.com/frdclav/project-1")

var g = new portfolioObj("Liri-Node-App", "", "A CLI node app that allows the user to search for information on concerts, spotify songs, and movies. Uses node.js", "https://github.com/frdclav/liri-node-app")

var h = new portfolioObj("Bamazon", "", "A CLI node app that uses mysql database to present a storefront for user to make purchases and admins to keep track of and manage product stock.", "https://github.com/frdclav/bamazon")

var i = new portfolioObj("FriendFinder", "", "A web app built with nodeJS, express and deployed on heroku that allows users to take a survey and match with other compatible users. The app uses express to handle the api's necessary to get the app working.", "https://github.com/frdclav/friend-finder")

var j = new portfolioObj("Burgers!", "", "A web app built with nodeJS, express, handlebars, using an ORM to connect to a mysql database. This allows the user to record different burgers and keep track of whether the burger has been eaten or not. Simple app that stores data with mysql db.", "https://github.com/frdclav/burger")

var k = new portfolioObj("thundertunes", "", "A web app that allows users to upload music, sound tracks, and other audio files to share and collaborate with other artists. The app is built using nodejs, express, howlerjs for handling audio playback, amazon s3 for handling sound file storage, mysql for metadata on tracks. Check it out on heroku at project2berkeley.herokuapp.com", "https://github.com/frdclav/project2")

var l = new portfolioObj("superfuturescraper", "", "A web app that allows users to scrape superfuture.com for the latest posts/articles, and leave comments on the articles. Articles are saved to mongodb. App uses mongoose, express, handlebars, cheerio and axios. Check it out: https://superfuturescraper.herokuapp.com/", "https://github.com/frdclav/mongoose-hw")

var listOfPortfolioItems = [l, k, j, i, h, g, f, e, d, c, b, a]


listOfPortfolioItems.forEach(element => {
    element.showItem();
})



// gallery to lightroom
$('#gallery-button').click(function () {
    window.open('https://lightroom.adobe.com/gallery/ae45e006986a4c009abe7788dea4b5b6');
    return false;
});