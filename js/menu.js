var titleElem = document.getElementById('menu-title');

titleElem.onclick = function() {
  var menu = this.parentNode;
  if (hasClass(menu, 'menu-open')) {
    removeClass(menu, 'menu-open');
  } else {
    addClass(menu, 'menu-open');
  }
}

//Вспомогательные функции
function addClass(el, cls) {
	for (var c = el.className.split(' '), i = c.length-1; i >= 0; i--) {
		if (c[i] == cls) return;
	}
  if (el.className == "") {
    el.className = cls;
  } else {
    el.className += ' ' + cls;
  }
}

function hasClass(el, cls) {
	for (var c = el.className.split(' '), i = c.length-1; i >= 0; i--) {
		if (c[i] == cls) return true;
	}
}

function removeClass(el, cls) {
  for (var c = el.className.split(' '), i = c.length-1; i >= 0; i--) {
		if (c[i] == cls) {
      c.splice(i,1);
    }
	}

	el.className = c.join(' ');
}