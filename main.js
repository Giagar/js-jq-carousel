$(document).ready(function() {
    $("div.next").click(function() { 
        //tutte le classi .fa-circle sono relative al bonus, per la versione base basta toglierle e lasciare il resto così com'è.
        if($("img.active, .fa-circle.active").hasClass("last")) {
            $("img.active, .fa-circle.active").removeClass("active")
            $("img.first, .fa-circle.first").addClass("active")
        } else {
            $("img.active, .fa-circle.active")
            .removeClass("active")
            .next()
            .addClass("active");
        }

    })

    $("div.prev").click(function() {

        if($("img.active, .fa-circle.active").hasClass("first")) {
            $("img.active, .fa-circle.active").removeClass("active")
            $("img.last, .fa-circle.last").addClass("active")
        } else {
            $("img.active, .fa-circle.active")
            .removeClass("active")
            .prev()
            .addClass("active");
        }

    })

    //_bonus
    $(".fa-circle").click(function() {
        $(".fa-circle").removeClass("active");
        $(this).addClass("active");

        var i = $(".fa-circle").index(this) + 1;
        $("img").removeClass("active");
        $("img:nth-child(" + i + ")").addClass("active"); 
    })
    //_/bonus

})

/* tentativo di riduzione ad unica funzione dei condizionali chiamati con next e prev, ma problema nel passare funzione jquery concatenata.
// function carousel(anchorClass1, anchorClass2, jfn) {
//     if($("img.active").hasClass(anchorClass1)) {
//         $("img.active").removeClass("active")
//         $("img." + anchorClass2).addClass("active")
//     } else {
//         $("img.active")
//         .removeClass("active")
//         jfn
//         .addClass("active");
//     }
// }

// $(document).ready(function() {
//         $("div.next").click(function() {
//             carousel("last", "first", $next())
//         })
    
//         $("div.prev").click(function() {
//             carousel("first", "last", next())
    
//         })
//     })
*/
