const openButton = document.getElementById('open-sidebar-button');
const navbar = document.getElementById('navbar');

const media =  window.matchMedia("(max-width: 700px)");

media.addEventListener('change', updateNavbar);
function updateNavbar(e){ 
   const isMobile = e.matches;

// console.log(isMobile)
if(isMobile) {
   navbar.setAttribute('inert', '');
}else{
   navbar.removeAttribute('inert');
}
}

function openSidebar(){
   navbar.classList.add('show');
   openButton.setAttribute('aria-expanded',true);
   navbar.removeAttribute('inert');
}


function closeSidebar(){
   navbar.classList.remove('show');
   openButton.setAttribute('aria-expanded',false);
   navbar.setAttribute('inert','');
}
updateNavbar(media); 
