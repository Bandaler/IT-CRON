document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (burger && navMenu) {
    const toggleMenu = () => {
      burger.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.classList.toggle('lock');
    };

    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener('click', (e) => {
  
      if (
        navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('lock');
      }
    });
  }
});
