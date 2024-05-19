

document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    
    cursor.classList.add("custom-cursor");
    
    document.body.appendChild(cursor);

    document.addEventListener("mousemove" , function(e) {
        var x = e.pageX;
        var y =e.pageY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        
    });
});


/*
document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    function moveCursor(event) {
        var x = event.pageX || event.clientX;
        var y = event.pageY || event.clientY;
        cursor.style.transform = "translate(" + x + "px, " + y + "px)";
    }

    function animateCursor() {
        requestAnimationFrame(function() {
            moveCursor(event); // Event-Objekt hier übergeben
            animateCursor();
        });
    }

    animateCursor();

    document.addEventListener("mousemove", function(event) {
        moveCursor(event); // Event-Objekt hier übergeben
    });
});


*/