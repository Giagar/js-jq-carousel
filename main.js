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
