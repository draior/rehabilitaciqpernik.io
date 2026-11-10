// Native details menus work without JavaScript; add dismissal after navigation.
document.querySelectorAll('.nav-menu').forEach((menu) => {
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) menu.open = false;
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) menu.open = false;
  });
});
