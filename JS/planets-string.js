(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

        planetsArray = planetsString.split( '|');
     console.log(planetsArray);
     console.log(" the string given "+planetsString+" *the string given* ")


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * creating breaks so you can add text to the other line, say you need to list or database that way.

     *
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

      //# Bonus 1
        var planetsBR = planetsArray.join("<br>");
        console.log (planetsBR);
        document.write(planetsBR)

     //# Bonus 2
        var planetLiUl ="<ul><li>"+planetsArray.join("<li></li>")+"</li></ul>";
        console.log (planetLiUl);
        document.write(planetLiUl)


})();
