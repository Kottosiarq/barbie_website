const windowContainer = document.getElementById("windowContainer");
const closeButton = document.getElementById("closeButton");
const house = document.getElementById("house-container");
const returnBtn = document.querySelectorAll("#returnBtn")

const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");

const desc1 = document.getElementById("desc1");
const desc2 = document.getElementById("desc2");
const desc3 = document.getElementById("desc3");
const desc4 = document.getElementById("desc4");

    if (localStorage.getItem('stan') !== 'shown') {

        function closeWindow () {
        windowContainer.style.display = "none";
        localStorage.setItem('stan', 'shown');
        }

        setTimeout(() => windowContainer.style.display = "flex", 5000)
        };

        function showPage1 () {
            house.style.animationName = "none";
            house.style.animationName = "house-animation";
            setTimeout(() => house.style.display = "none", 1000);
            setTimeout(() => desc1.style.display = "block", 950);
        }

        function showPage2 () {
            house.style.animationName = "none";
            house.style.animationName = "house-animation";
            setTimeout(() => house.style.display = "none", 1000);
            setTimeout(() => desc2.style.display = "block", 950);
        }

        function showPage3 () {
            house.style.animationName = "none";
            house.style.animationName = "house-animation";
            setTimeout(() => house.style.display = "none", 1000);
            setTimeout(() => desc3.style.display = "block", 950);
        }

        function showPage4 () {
            house.style.animationName = "none";
            house.style.animationName = "house-animation";
            setTimeout(() => house.style.display = "none", 1000);
            setTimeout(() => desc4.style.display = "block", 950);
        }

        returnBtn.forEach(button => {
            button.addEventListener("click", showHome)
        })

        function showHome () {
            house.style.animationName = "none";
            house.style.display = "flex";
            desc1.style.display = "none";
            desc2.style.display = "none";
            desc3.style.display = "none";
            desc4.style.display = "none";
        }

closeButton.addEventListener("click", closeWindow);
block1.addEventListener("click", showPage1);
block2.addEventListener("click", showPage2);
block3.addEventListener("click", showPage3);
block4.addEventListener("click", showPage4);




