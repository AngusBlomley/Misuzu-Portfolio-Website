function closeMenuOnClick() {
    document.querySelectorAll('#menucontainer a').forEach(menuItem => {
        menuItem.addEventListener('click', function () {
            toggleMenu(); // This will close the menu when a link is clicked
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var menuContainer = document.getElementById("menucontainer");
    var toggleButton = document.getElementById("togglebutton");

    function toggleMenu() {
        if (toggleButton.classList.contains("active")) {
            menuContainer.style.right = "-100%"; // Close the menu
            toggleButton.innerHTML = "☰";
            toggleButton.style.color = "black";
            toggleButton.classList.remove("active");
        } else {
            menuContainer.style.right = "0px"; // Open the menu
            toggleButton.innerHTML = "✖";
            toggleButton.style.color = "black";
            toggleButton.classList.add("active");
        }
    }

    // Set click event for the toggleButton
    toggleButton.addEventListener('click', toggleMenu);

    // Initialize the menu to be closed on page load
    menuContainer.style.right = "-100%";
    toggleButton.classList.remove("active");
    toggleButton.innerHTML = "☰";
    toggleButton.style.color = "black";

    // Close the menu when a link is clicked
    var links = document.querySelectorAll('#menucontainer a');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            if (menuContainer.style.right === "0px") {
                toggleMenu(); // This will close the menu
            }
        });
    });

    // Smooth scrolling for anchor links
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(function (scrollLink) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'is-visible' class to the target element
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1, // Adjust this value based on how much of the item should be visible before fading in
    });

    // Target elements to observe
    const fadeElements = document.querySelectorAll('.simple-fade-in, .item img, .content-wrapper img, #main-img');
    fadeElements.forEach(el => {
        observer.observe(el); // Start observing each element
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('start');
            }
        });
    }, {
        threshold: 0.1, // Adjust as needed
    })

    // Target elements to observe
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => observer.observe(box));

    function startAnimations() {
        const flash = document.getElementById('flash');
        const whiteFlash = document.getElementById('white-flash');
        const character = document.getElementById('character');

        // Display the camera flash and start the animation
        flash.style.display = 'block';
        flash.style.opacity = '1';

        // After the camera flash animation ends, start the white flash
        flash.addEventListener('animationend', () => {
            whiteFlash.style.display = 'block';
            whiteFlash.style.opacity = '1';
        });

        // Listen for the end of the white flash animation
        whiteFlash.addEventListener('animationend', () => {
            // Hide the white flash and show the character
            whiteFlash.style.display = 'none';
            character.style.opacity = '1'; // This triggers the character fadeIn animation
        });
    }

    setTimeout(() => {
        whiteFlash.style.display = 'block';
        whiteFlash.style.opacity = '1';
    }, 500); // This timeout starts the flash half a second after the camera flash

    // Listen for the end of the white flash animation to hide the element
    whiteFlash.addEventListener('animationend', () => {
        whiteFlash.style.display = 'none';
        whiteFlash.style.opacity = '0';
        // Start the character animation here if needed
        character.style.opacity = '1'; // This will trigger the fadeIn animation
    });
});


