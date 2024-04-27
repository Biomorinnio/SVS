document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 70;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});