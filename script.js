// ----------------------------------------------------------------logo rotation

// ページが読み込まれたときに要素を取得
document.addEventListener('DOMContentLoaded', () => {
  const swingElementA = document.querySelector('.logo_A');
  const swingElementB = document.querySelector('.logo_B');
  const swingElementC = document.querySelector('.logo_C');
  
  let ticking = false;

  function swingOnScroll() {
    const scrollTop = window.scrollY;
    const maxRotationA = 60; 
    const maxRotationB = 270; 
    const maxRotationC = 160; 
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
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
    if (!ticking) {
      window.requestAnimationFrame(() => {
        swingOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // スクロールイベントのリスナーを追加
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
  
  
