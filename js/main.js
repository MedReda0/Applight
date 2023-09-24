document.addEventListener('DOMContentLoaded', function() {
  const menuCheckbox = document.getElementById('checkbox');

  const menuItems = document.querySelectorAll('a');

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      menuCheckbox.checked = false;
    });
  });
});
