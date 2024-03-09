



document.addEventListener("DOMContentLoaded", function() {

    const colorBox = document.getElementById("color-box");

    const changeColorBtn = document.getElementById("change-color-btn");


    changeColorBtn.addEventListener("click", function() {
        colorBox.style.backgroundColor = getRandomColor();
    });



    function getRandomColor() {


        // Generates a random hexadecimal color

        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
});