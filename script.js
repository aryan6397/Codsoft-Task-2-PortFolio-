// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 150*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
 
 let menuIcon = document.querySelector('#menu-icon');
 let navbar=document.querySelector('.navbar');
 
 menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
 }
 
 let header=document.querySelector('header');
 header.classList.toggle('sticky', window.scrollY>100);

 // Animate the profile photo on hover
const profilePhoto = document.getElementById('profilePhoto');

profilePhoto.addEventListener('mouseenter', () => {
    gsap.to(profilePhoto, { scale: 1.2, duration: 0.3 });
});

profilePhoto.addEventListener('mouseleave', () => {
    gsap.to(profilePhoto, { scale: 1, duration: 0.3 });
});
