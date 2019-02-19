function hamburger() {
  var btn = document.getElementById('header__inner__contactBtn');
  if (document.getElementById('header__inner__hamburger').checked) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}