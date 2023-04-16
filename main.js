cocossd="";
img = "";
img_b = "";
img_h = "";
function preload(){
img_b = loadImage(".jpeg");
img_b = loadImage("Head_phone.jpeg");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";

}
function draw(){
    image(img, 0, 0, 640, 420);
  /*  if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "status : Object Detected";
            fill("#e8250c");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#e8250c");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }*/
}
function modelLoaded() {
    console.log("modelLoaded");
    status = true;
    object_detector.detect(img, gotResult);
}

function gotResult(error, Results) {
    if (error) {
        console.log(error);
    }
    console.log(Results);
    objects = Results
}