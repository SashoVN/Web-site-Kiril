const dropdowns = document.querySelectorAll('.dropdown')

  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');

    link.addEventListener('click', function(e) {
      e.preventDefault(); // спира стандартния линк
      // Премахваме активния клас от другите dropdown-и
      dropdowns.forEach(d => {
        if(d !== dropdown) d.classList.remove('active');
      });
      // Добавяме или махаме класа active
      dropdown.classList.toggle('active');
    });
  });


document.addEventListener("DOMContentLoaded", () => {
const dropdownToggle = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("show"); // показва/скрива менюто
  });
}
});


