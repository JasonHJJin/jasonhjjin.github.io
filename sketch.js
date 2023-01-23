// setup() is called once at page-load

function setup() {
  createCanvas(800, 800);
}

// draw() is called 60 times per second
function draw() {
  let hr = hour();
  let min = minute();
  let sec = second();

  printConsole(min, sec);
  backgroundChange(hr);
  let hourX = createSlider(0, 24, hr, 0);
  hourX.position(165, 380);
  hourX.style("width", "100px");

  let minX = createSlider(0, 60, min, 0);
  minX.position(335, 380);
  minX.style("width", "100px");

  let secX = createSlider(0, 60, sec, 0);
  secX.position(525, 380);
  secX.style("width", "100px");

  textSize(60);

  text(hr, 180, 360);

  text(min, 360, 360);

  text(sec, 540, 360);
}

function backgroundChange(hr) {
  if (hr < 6) {
    background("#000000");
  } else if (hr >= 6 && hr <= 18) {
    background("#FFFACD");
  } else if (hr > 18) {
    background("#FF6347");
  }
}

function printConsole(min, sec) {
  if (sec === 0) {
    console.log(min);
  }
}
