var input;
var button, button2;
var list;

var mcsv;
var kokugo = [];
var sansu = [];
var rika = [];
var syakai = [];
var taiku = [];
var bijyutsu = [];

var koku;
var san;
var ri;
var sya;
var tai;
var bi;
var sal;

function preload() {
  mcsv = loadTable(
    'backend/new.csv',
    'csv'
  );
}

function setup() {
  createCanvas(400, 400);
  input = createInput();
  input.position(20, 60);
  button = createButton('送信');
  button.position(20, 180);
  button.mousePressed(getThing);
  button2 = createButton("saveFile");
  button2.position(200, 180);
  button2.mousePressed(saveFile);
  sel = createSelect();
  sel.position(20, 100);
  sel.option('国語');
  sel.option('算数');
  sel.option('理科');
  sel.option('社会');
  sel.option('体育');
  sel.option('美術');

  for (var i = 0; i < mcsv.getRowCount(); i++) {
    kokugo[i] = mcsv.get(i, 0);
    sansu[i] = mcsv.get(i, 1);
    rika[i] = mcsv.get(i, 2);
    syakai[i] = mcsv.get(i, 3);
    taiku[i] = mcsv.get(i, 4);
    bijyutsu[i] = mcsv.get(i, 5);
  }
  background(240);
}

function draw() {
  // background(240);
  text("今日は何の勉強をした？", 20, 30);
  text(kokugo[0], 20, 250);　
  text(sansu[0], 20, 270);
  text(rika[0], 20, 290);
  text(syakai[0], 20, 310);
  text(taiku[0], 20, 330);
  text(bijyutsu[0], 20, 350);
  text(kokugo[1], 150, 250);　
  text(sansu[1], 150, 270);
  text(rika[1], 150, 290);
  text(syakai[1], 150, 310);
  text(taiku[1], 150, 330);
  text(bijyutsu[1], 150, 350);
}

function getThing() {
  var thing = input.value();
  var item = sel.value();
  background(240);
  text('it is a' + item + '!', 25, 150);
  text(thing, 25, 170);
  console.log(item);

  if (item == "国語") {
    koku = kokugo[1];
    koku = int(koku) + 1;
    mcsv.setString(1, 0, koku);
  } else if (item == "算数") {
    san = sansu[1];
    san = int(san) + 1;
    mcsv.setString(1, 1, san);
  } else if (item == "理科") {
    ri = int(ri) + 1;
    mcsv.setString(1, 2, ri);
  } else if (item == "社会") {
    sya = int(sya) + 1;
    mcsv.setString(1, 3, sya);
  } else if (item == "体育") {
    tai = int(tai) + 1;
    mcsv.setString(1, 4, tai);
  } else if (item == "美術") {
    bi = int(bi) + 1;
    mcsv.setString(1, 5, bi);
  }

  for (var i = 0; i < mcsv.getRowCount(); i++) {
    kokugo[i] = mcsv.get(i, 0);
    sansu[i] = mcsv.get(i, 1);
    rika[i] = mcsv.get(i, 2);
    syakai[i] = mcsv.get(i, 3);
    taiku[i] = mcsv.get(i, 4);
    bijyutsu[i] = mcsv.get(i, 5);
  }
  //saveTable(mcsv, "new.csv","csv");
}

function saveFile() {
  // saveTable(mcsv, "new.csv", "csv");
  var table = mcsv.getArray();
  $.ajax({
    method: "POST",
    url: "backend/",
    data: { table: table }
  })
  .done(function(ret) {
    console.log(ret.msg);
    background(240);
    text(ret.msg, 25, 150);
  });

}
