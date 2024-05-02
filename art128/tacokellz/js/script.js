 document.addEventListener("DOMContentLoaded", function() {
  
    //MENU FOR SMALL SCREENS + DATA ATTRIBUTES not toggle //
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav'); 
    menubutton.addEventListener('click', function() {
      if (menunav.getAttribute('data-navstate') === 'open') {
          menunav.setAttribute('data-navstate', 'closed');
      } else {
          menunav.setAttribute('data-navstate', 'open');
      }
    });

    // CLOSE MENU NAV WHENA STICKY NAV LINK IS CLICKED //
const fixednavlinks = document.querySelectorAll('.site-header .site-nav a');
fixednavlinks.forEach(function(el) {
    el.onclick = function() {
       menunav.setAttribute('data-navstate', 'closed');
     };
    });
  });


  // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-sectionstate", "active");
    } else {
      entry.target.setAttribute("data-sectionstate", "inactive");
    }
  });
});
document.querySelectorAll("section").forEach((section) => {
  myobserver.observe(section);
});


// SCROLLING HERO//
