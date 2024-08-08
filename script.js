// ----------------------------------------------------------------logo rotation

document.addEventListener('DOMContentLoaded', () => {
  const swingElementA = document.querySelector('.logo_A');
  const swingElementB = document.querySelector('.logo_B');
  const swingElementC = document.querySelector('.logo_C');
  
  const maxRotationA = 60;
  const maxRotationB = 270;
  const maxRotationC = 160;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function updateRotation() {
    const scrollTop = lastKnownScrollPosition;
    const rotationA = (scrollTop / scrollHeight) * maxRotationA; 
    const rotationB = (scrollTop / scrollHeight) * maxRotationB; 
    const rotationC = (scrollTop / scrollHeight) * maxRotationC;

    if (swingElementA) {
      swingElementA.style.transform = `rotate(${rotationA}deg)`;
    }
    if (swingElementB) {
      swingElementB.style.transform = `rotate(${rotationB}deg)`;
    }
    if (swingElementC) {
      swingElementC.style.transform = `rotate(${rotationC}deg)`;
    }
  }

  function onScroll() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateRotation();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll);
});





  function hideLogoOnClick(logoElement) {
  logoElement.style.transition = 'opacity 0.1s'; 
  logoElement.style.opacity = '0'; 
  setTimeout(function() {
  logoElement.style.display = 'none'; 
  }, 1000); 
  }
  
  document.querySelector('.logo_A').addEventListener('click', function() {
  hideLogoOnClick(this);
  });
  
  document.querySelector('.logo_B').addEventListener('click', function() {
  hideLogoOnClick(this);
  });
  
  document.querySelector('.logo_C').addEventListener('click', function() {
  hideLogoOnClick(this);
  });
  
  window.addEventListener('scroll', swingOnScroll);
  
  
