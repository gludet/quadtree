let qtree;


function setup() { //funcion configuracion del sketch
  createCanvas(400, 400);//tamaño del lienzo

  let boundary = new Rectangle(200, 200, 200, 200); //
  qtree = new QuadTree(boundary, 4);
  //console.log(qtree);

  for (let i = 0; i < 300; i++) {
    let x = randomGaussian(width / 2, width / 8);
    let y = randomGaussian(height / 2, height / 8);
    let p = new Point(x, y);
    qtree.insert(p);
  }
 // background(0);
 // qtree.show();
}

function draw() {
  background(0);
  qtree.show();

  stroke(0, 255, 0);
  strokeWeight(2);
  rectMode(CENTER);
  let range = new Rectangle(mouseX, mouseY, 80, 40);
  rect(range.x, range.y, range.w * 2, range.h * 2);
  let points = [];
  qtree.query(range, points);
  for (let p of points) {
    strokeWeight(4);//grosor de puntos encerrados
    point(p.x, p.y);
  }
  //console.log(points);
  //console.log(qtree);
  let cantidad = points.length;
  //alert("Numero de puntos es " + cantidad);
  console.log(cantidad);
  //var nameStr = "This photo was taken in " + name + ".";
  //alert(nameStr);
  //console.log(count);
}

