const sidebarMenuBtn = document.querySelector('.sidebar-icon');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');

function openSidebar() {
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuBtn.addEventListener('click', openSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click', closeSidebar);
sidebarCloseBtn.addEventListener('click', closeSidebar);
