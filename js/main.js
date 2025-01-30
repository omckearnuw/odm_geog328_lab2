// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get the navigation bar and hamburger icon elements
  const topnav = document.getElementById('myTopnav');
  const icon = document.querySelector('.topnav .icon');

  // Check if the elements exist
  if (!topnav || !icon) {
    console.error("Navigation bar or hamburger icon not found!");
    return;
  }

  // Accordion functionality
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  // Add a click event listener to the hamburger icon
  icon.addEventListener('click', function () {
    // Toggle the "responsive" class on the navigation bar
    topnav.classList.toggle('responsive');
  });
});