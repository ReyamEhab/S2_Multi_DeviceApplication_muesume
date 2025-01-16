document.addEventListener("DOMContentLoaded", () => {
    // Handle loading screen and main content
    const loadingScreen = document.querySelector(".loading-screen"); // Select the loading screen element
    const mainContent = document.querySelector("main"); // Select the main content element

    if (loadingScreen && mainContent) {
        // Initially hide the main content
        mainContent.classList.add("hidden");

        // Simulate loading time
        setTimeout(() => {
            loadingScreen.classList.add("hidden"); // Hide the loading screen after 2 seconds
            mainContent.classList.remove("hidden"); // Remove the "hidden" class to show main content
            mainContent.classList.add("blurred"); // Add a blur effect to the main content

            // Remove the blur effect after 2 seconds
            setTimeout(() => {
                mainContent.classList.remove("blurred"); // Remove the blur effect
            }, 2000); // Set the delay to 2 seconds
        }, 2000); // Set initial loading screen time to 2 seconds
    }

    // Initialize Swiper with coverflow effect for a carousel-style slider
    const swiper = new Swiper(".swiper-container", {
        effect: "coverflow", // Set the carousel effect to "coverflow"
        grabCursor: true, // Allow a cursor grab effect on the swiper
        centeredSlides: true, // Center the active slide
        slidesPerView: "auto", // Automatically adjust the number of slides shown based on container width
        coverflowEffect: {
            rotate: 20, // Rotation angle of each slide in the coverflow effect
            stretch: 0, // Stretch factor for the slides
            depth: 350, // Depth for the 3D effect of the slides
            modifier: 1, // Strength of the effect
            slideShadows: true, // Enable shadow effect on the slides
        },
        pagination: {
            el: ".swiper-pagination", // Select pagination container for navigation
            clickable: true, // Enable clicking on pagination dots
        },
    });

    // Ripple effect for buttons when clicked
    document.querySelectorAll(".explore-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const ripple = document.createElement("span"); // Create a new span element for the ripple
            const rect = button.getBoundingClientRect(); // Get the button's position and size
            const size = Math.max(rect.width, rect.height); // Set the ripple size to the larger of width/height
            ripple.style.width = ripple.style.height = size + "px"; // Set both width and height of ripple
            ripple.style.left = e.clientX - rect.left - size / 2 + "px"; // Set horizontal position of ripple
            ripple.style.top = e.clientY - rect.top - size / 2 + "px"; // Set vertical position of ripple
            ripple.classList.add("ripple"); // Add ripple class for styling
            button.appendChild(ripple); // Append the ripple to the button

            // Remove ripple after the animation ends (600ms)
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Animated heading that reveals each character with a delay
    const heading = document.querySelector(".animated-heading"); // Select the heading element
    if (heading) {
        const animateHeading = () => {
            const text = heading.textContent; // Get the text content of the heading
            heading.innerHTML = ""; // Clear the current heading text
            [...text].forEach((char, i) => {
                const span = document.createElement("span"); // Create a span for each character
                span.textContent = char; // Set the text of the span to the character
                span.style.animationDelay = `${i * 0.1}s`; // Set a delay for each letter's animation
                heading.appendChild(span); // Append the span to the heading
            });
        };

        animateHeading(); // Execute the animation function
    }

    // Custom cursor tracking for the mouse
    const customCursor = document.querySelector(".custom-cursor"); // Select the custom cursor element
    if (customCursor) {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event; // Get the mouse position (clientX and clientY)
            customCursor.style.left = `${clientX}px`; // Set the custom cursor's horizontal position
            customCursor.style.top = `${clientY}px`; // Set the custom cursor's vertical position
        });
    }
});
