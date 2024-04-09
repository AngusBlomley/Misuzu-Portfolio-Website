function toggleMenu() {
    var menuContainer = document.getElementById("menuContainer");
    var toggleButton = document.getElementById("toggleButton");

    if (menuContainer.style.right == "0px") {
        menuContainer.style.right = "-250px"; // Hide the menu
        toggleButton.innerHTML = "☰"; // Change back to hamburger icon
        toggleButton.style.color = "black"; // Change color back to black
        toggleButton.classList.remove("active");
    } else {
        menuContainer.style.right = "0px"; // Show the menu
        toggleButton.innerHTML = "✖"; // Change to 'X' icon
        toggleButton.style.color = "white"; // Change color to white
        toggleButton.classList.add("active");
    }
}

function closeMenuOnClick() {
    document.querySelectorAll('#menuContainer a').forEach(menuItem => {
        menuItem.addEventListener('click', function() {
            toggleMenu(); // This will close the menu when a link is clicked
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var menuContainer = document.getElementById("menuContainer");
    var toggleButton = document.getElementById("toggleButton");

    // Function to open or close the menu
    function toggleMenu() {
        // Check if the menu is open by checking the 'active' class
        if (toggleButton.classList.contains("active")) {
            menuContainer.style.right = "-250px"; // Close the menu
            toggleButton.innerHTML = "☰"; // Change back to hamburger icon
            toggleButton.style.color = "black"; // Change color back to black
            toggleButton.classList.remove("active");
        } else {
            menuContainer.style.right = "0px"; // Open the menu
            toggleButton.innerHTML = "✖"; // Change to 'X' icon
            toggleButton.style.color = "white"; // Change color to white
            toggleButton.classList.add("active");
        }
    }
    
    // Set click event for the toggleButton
    toggleButton.addEventListener('click', toggleMenu);

    // Close the menu when a link is clicked
    var links = document.querySelectorAll('#menuContainer a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            if (menuContainer.style.right === "0px") {
                toggleMenu(); // This will close the menu
            }
        });
    });

    // Smooth scrolling for anchor links
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(e) {
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
});

