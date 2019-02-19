function hamburger() {
  var btn = document.getElementById('bolt__header__contactBtn');
  if (document.getElementById('bolt__header__hamburger').checked) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}