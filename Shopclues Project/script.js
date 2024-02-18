// Wait for the document to be fully loaded before executing the code
$(document).ready(function(){
  // Initialize the Slick slider for elements with class 'slider'
  $('.slider').slick({
      autoplay: true, // Enable autoplay for the slider
      autoplaySpeed: 2000 // Set slide change duration to 2000 milliseconds (2 seconds)
  });
});

// Initialize slideIndex for slideshow
let slideIndex = 0;
showSlides(); // Call the function to start the slideshow

// Function to control the slideshow
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block"; // Display the current slide
  setTimeout(showSlides, 2000); // Recursive call to show the next slide after 2 seconds
}

// Function to navigate to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Another document ready block to initialize the Slick slider for elements with class 'banner-slider'
$(document).ready(function(){
  $('.banner-slider').slick({
      autoplay: true, // Enable autoplay for the banner slider
      autoplaySpeed: 2000, // Set slide change duration to 2000 milliseconds (2 seconds)
      dots: true, // Show navigation dots
      // Additional settings and options can be added here
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Get all banner elements
  const banners = document.querySelectorAll('.banner');

  // Function to toggle visibility of banners
  function toggleBanners() {
    banners.forEach(banner => {
      banner.style.display = (banner.style.display === 'none' || banner.style.display === '') ? 'block' : 'none';
    });
  }

  // Initial call to start the blinking
  toggleBanners();

  // Set interval to toggle banners every 2000 milliseconds (2 seconds)
  setInterval(toggleBanners, 2000);
});
