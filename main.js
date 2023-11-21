// Add smooth scrolling to anchor links
const smoothScroll = (event) => {
    event.preventDefault();
    const target = document.querySelector(event.currentTarget.getAttribute('href'));
    if (!target) return;
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });
  