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

