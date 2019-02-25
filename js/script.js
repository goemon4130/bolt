document.getElementById('header__inner__hamburger').onclick = function() {
  var obj = document.getElementById('header__inner__contactBtn');
  if(obj.classList.contains('header__inner__contactBtnJs')) {
    obj.classList.remove('header__inner__contactBtnJs');
    obj.classList.toggle('header__inner__closeJs');
  } else {
    obj.classList.remove('header__inner__closeJs');
    obj.classList.toggle('header__inner__contactBtnJs');
  }
}
