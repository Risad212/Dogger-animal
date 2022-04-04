/*=============
  // mobile navbar
  ============== */

// open navbar 
const mobileNavbar = document.querySelector('.MobileBar')
mobileNavbar.addEventListener('click', function(){
    document.getElementById('showMobileNav').style.right = '0rem'
})

// close navbar
document.querySelector('.closNav').addEventListener('click', function(){
    document.getElementById('showMobileNav').style.right = '-100rem'
})

