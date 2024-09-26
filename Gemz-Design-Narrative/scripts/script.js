window.onload = function () {
    const navBar = document.getElementById('top_nav_bar');
    const introduction = document.getElementById('introduction-slide');
    let hasFadedIn = false;  // Tracks if fade-in has occurred
    let isFading = false;  // Prevents multiple timeouts while fading in

    // Function to check if 10% of the introduction section is in view
    function isElementPartiallyInView(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        
        // Calculate the element's height and how much of it is in view
        const elementHeight = rect.height;
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);

        // Check if at least 10% of the element is visible
        return visibleHeight / elementHeight > 0.1 && rect.top <= windowHeight && rect.bottom >= 0;
    }

    // Add a scroll event listener
    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;

        // Fade out the nav bar when scrolling down
        if (scrollValue > 50) {
            navBar.style.opacity = '0';  // Fade out the nav bar
        } else {
            navBar.style.opacity = '1';  // Fade it back in
        }

        // Check if 10% of the introduction section is in view
        if (isElementPartiallyInView(introduction)) {
            if (!hasFadedIn && !isFading) {
                isFading = true;  // Prevent additional timeouts during the delay
                setTimeout(() => {
                    introduction.classList.add('visible');  // Add class after 1 second delay
                    hasFadedIn = true;  // Mark as faded in
                    isFading = false;  // Reset fading flag after fade-in completes
                }, 500);  // Delay the fade-in by 0.5 second
            }
        } else {
            introduction.classList.remove('visible');  // Fade out when out of view
            hasFadedIn = false;  // Reset to allow fade-in again when re-entering view
        }
    });
};
