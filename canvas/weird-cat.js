var canvas = document.getElementById('weird-cat');
var ctx = canvas.getContext('2d');

//Все инпуты палитры
var paletteColor = document.querySelectorAll('.palette-color');

// Новые цвета для покраски кота.
// Используются в функции paintCat
var colorRed, colorGreen, colorBlue;

//Кнопка возврата черного кота
var getBlackCat = document.getElementById('blackcat');


/*
  Отрисовка кота при загрузке страницы.
  Функция вызывается с параметрами rgb(0, 0, 0)
*/
drawCat(0, 0, 0);

/*
  Вызов функции при загрузке страницы
*/
setCheckedColor();

/*
  Функция отрисовки черного кота.
  Вызывается при клике на кнопку "Вернуть черного кота"
*/
getBlackCat.onclick = function() {
  drawCat(0, 0, 0);
}

/*
  Функция производит перебор элементов коллекции palette-color и
  для каждого элемента вызывает функцию paintCat
*/
function setCheckedColor() {
  for (var i = 0; i < paletteColor.length; i++) {
    paletteColor[i].onclick = function() {
      paintCat(this.id);
    }
  }
}

/*
  Функция покраски кота.
  Получает на вход параметр this.id из setCheckedColor().
*/
var paintCat = function(colorId) {
  switch(colorId) {
    case 'yellow':
    colorRed = 255;
    colorGreen = 255;
    colorBlue = 0;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;
    
  case 'orange':
    colorRed = 255;
    colorGreen = 93;
    colorBlue = 0;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'green':
    colorRed = 0;
    colorGreen = 255;
    colorBlue = 0;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'turquoise':
    colorRed = 0;
    colorGreen = 204;
    colorBlue = 207;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'violet':
    colorRed = 199;
    colorGreen = 128;
    colorBlue = 217;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'seagreen':
    colorRed = 38;
    colorGreen = 216;
    colorBlue = 199;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'peach':
    colorRed = 255;
    colorGreen = 194;
    colorBlue = 153;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'white':
    colorRed = 255;
    colorGreen = 255;
    colorBlue = 255;
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    break;

  case 'lightviolet':
    colorRed = 225;
    colorGreen = 179;
    colorBlue = 255;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'lightgreen':
    colorRed = 155;
    colorGreen = 254;
    colorBlue = 155;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'grey':
    colorRed = 185;
    colorGreen = 185;
    colorBlue = 193;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'lightturquoise':
    colorRed = 175;
    colorGreen = 238;
    colorBlue = 238;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'pink':
    colorRed = 255;
    colorGreen = 182;
    colorBlue = 193;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'steelblue':
    colorRed = 176;
    colorGreen = 196;
    colorBlue = 222;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'lightblue':
    colorRed = 173;
    colorGreen = 216;
    colorBlue = 230;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  case 'purple':
    colorRed = 72;
    colorGreen = 61;
    colorBlue = 139;
    ctx.strokeStyle = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
    break;

  default:
    alert('Извините, покраска кота в данный цвет невозможна.');
  }
  
  drawCat(colorRed, colorGreen, colorBlue);
}


/*
  Функция отрисовки кота
*/
function drawCat(r, g, b) {
ctx.lineWidth = 0.3;
ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';

//Тело кота
ctx.beginPath();
ctx.moveTo(80, 120);
ctx.bezierCurveTo(82, 109, 80, 37, 96, 5);
ctx.quadraticCurveTo(108, 10, 127, 45);
ctx.quadraticCurveTo(138, 50, 150, 45);
ctx.bezierCurveTo(160, 38, 170, 24, 183, 18);
ctx.bezierCurveTo(192, 19, 194, 44, 194, 45);
ctx.quadraticCurveTo(200, 82, 196, 120);
ctx.bezierCurveTo(190, 153, 190, 198, 196, 237);
ctx.bezierCurveTo(202, 281, 200, 304, 197, 312);
ctx.quadraticCurveTo(188, 321, 180, 312);
ctx.bezierCurveTo(176, 306, 180, 297, 176, 293);
ctx.quadraticCurveTo(172, 288, 167, 293);
ctx.lineTo(167, 312);
ctx.quadraticCurveTo(158, 321, 147, 312);
ctx.bezierCurveTo(144, 304, 141, 290, 143, 293);
ctx.quadraticCurveTo(139, 288, 134, 293);
ctx.bezierCurveTo(126, 303, 142, 313, 134, 320);
ctx.quadraticCurveTo(124, 324, 93, 314);
ctx.quadraticCurveTo(62, 307, 62, 261);
ctx.bezierCurveTo(58, 217, 79, 160, 80, 120);
ctx.moveTo(62, 261);
ctx.quadraticCurveTo(0, 216, 50, 172);
ctx.quadraticCurveTo(65, 172, 61, 185);
ctx.bezierCurveTo(47, 206, 32, 225, 62, 249);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Отрисовка глаз кота
//Стили
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.strokeStyle = 'rgb(0, 0, 0)';
ctx.lineWidth = 1;

//Глаза
ctx.beginPath();
ctx.arc(115, 86, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(158, 92, 16, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//Зрачки
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.beginPath();
ctx.arc(117, 86, 8, 0, 2 * Math.PI);
ctx.arc(154, 96, 7, 0, 2 * Math.PI);
ctx.closePath();
ctx.fill();

};
