window.addEventListener('load', function() {
  var socialLinks = document.querySelectorAll('.social-links a');

  for (var i = 0; i < socialLinks.length; i++) {
    socialLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      var url = this.getAttribute('href');
      window.open(url, '_blank', 'noopener');
    });
  }
});
