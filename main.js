function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    classifier = ml5.imageClassifier('MobileNet', modelLoaded)
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_obj_name").innerHTML = results[0].label;
        document.getElementById("result_obj_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}