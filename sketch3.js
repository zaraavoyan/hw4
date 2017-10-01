var g = 170;
var w = 0;
var n = 170;
var h = 340;
while (n < width) {
  line (g, w , n , w);
  w = w + 10;
  n = n + 10;
  g = g - 10;
}

var g = 170;
var w = 0;
var n = 170;
var h = 340;


while (g < 340) {
  line (w, g, h, g);
  g = g + 10;
  n = n + 10;
  h = h - 10;
  w = w + 10;
}
