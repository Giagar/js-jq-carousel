$(document).ready(function() {
    $("div.next").click(function() {

        if($("img.active").hasClass("last")) {
            $("img.active").removeClass("active")
            $("img.first").addClass("active")
        } else {
            $("img.active")
            .removeClass("active")
            .next()
            .addClass("active");
        }

    })

    $("div.prev").click(function() {

        if($("img.active").hasClass("first")) {
            $("img.active").removeClass("active")
            $("img.last").addClass("active")
        } else {
            $("img.active")
            .removeClass("active")
            .prev()
            .addClass("active");
        }

    })
})

/*
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");

nextButton.addEventListener("click", function() {
    var images = 
    var currentImage = document.querySelector("img");
    var nextImage = document.querySelectorAll("img")
    currentImage.classList.remove("active");
    var next
})*/