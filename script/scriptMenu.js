const dropdowns = document.querySelectorAll('.dropdown')

  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');

    link.addEventListener('click', function(e) {
      e.preventDefault(); 
      dropdowns.forEach(d => {
        if(d !== dropdown) d.classList.remove('active');
      });
      
      dropdown.classList.toggle('active');
    });
  });


document.addEventListener("DOMContentLoaded", () => {
const dropdownToggle = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("show"); 
  });
}
});


