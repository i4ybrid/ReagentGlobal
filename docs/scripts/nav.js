const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',() => {
        //Display or hide opacity of the menu
        var value = nav.style.left;
        console.log("before: " + value);
        if (!value || value == "-30%" || value < 0) {
            nav.style.left = 0;
        } else {
            nav.style.left = "-30%";
        }
        console.log("after: " + value);
        //burger animation
        burger.classList.toggle('toggle');
    });

}


navSlide();
