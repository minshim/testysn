// ----------------------------------------------------------------logo rotation

function swingOnScroll() {
  const scrollTop = window.scrollY;
  const swingElementA = document.querySelector('.logo_A');
  const swingElementB = document.querySelector('.logo_B');
  const swingElementC = document.querySelector('.logo_C');
  const maxRotationA = 360; 
  const maxRotationB = 270; 
  const maxRotationC = 460; 
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  let rotationA = (scrollTop / scrollHeight) * maxRotationA; 
  let rotationB = (scrollTop / scrollHeight) * maxRotationB; 
  let rotationC = (scrollTop / scrollHeight) * maxRotationC; 
  
  swingElementA.style.transform = `rotate(${rotationA}deg)`;
  swingElementB.style.transform = `rotate(${rotationB}deg)`;
  swingElementC.style.transform = `rotate(${rotationC}deg)`;
  }
  
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
  
  
