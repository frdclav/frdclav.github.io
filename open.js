// $(".enter").on('click', function() {
//     console.log(this, 'has been clicked!');
//     $(this).fadeOut("slow");
//     $("#picture").fadeOut("slow");
//     // $("#picture").animate({ opacity: 1 }, 0).css("background-image", "url(image.jpeg)").animate({ opacity: 0 }, 2500);
//     window.location.href = "https://frdc.info/Bootstrap-Portfolio";
// })


// delegate all clicks on "a" tag (links)
$(document).on("click", ".enter", function() {
    console.log(this, 'has been clicked!')
        // get the href attribute
    var newUrl = $(this).attr("href");
    console.log(newUrl);
    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("html").fadeOut(function() {
        // when the animation is complete, set the new location
        location = newUrl;
    });

    // prevent the default browser behavior.
    return false;
});