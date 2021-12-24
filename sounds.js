function pianoSounds() {
    let piano = document.getElementById("piano");
    let pianoIcon = document.getElementById("pianoIcon");
    pianoIcon.onclick = function () {
        // роблю так, щоб при кліку на елемент із айді pianoIcon виконувалась функцію
        if (piano.paused) {
            pianoIcon.src = "images/gift1.jpg";
        } else {
            pianoIcon.src = "images/gift.jpg";
        }
    }
    if (piano.paused) {
        pianoIcon.src = "images/gift1.jpg";

    } else {
        pianoIcon.src = "images/gift.jpg";
    }
}
// далі я створила ідентично аналогічні функції 
function guitarSounds() {
    let guitar = document.getElementById("guitar");
    let guitarIcon = document.getElementById("guitarIcon");

    guitarIcon.onclick = function () {
        if (guitar.paused) {
            guitarIcon.src = "images/gift2.jpg";
        } else {
            guitarIcon.src = "images/gift.jpg";
        }
    }
    if (guitar.paused) {
        guitarIcon.src = "images/gift2.jpg";
    } else {
        guitarIcon.src = "images/gift.jpg";
    }
}
function violinSounds() {
    let violin = document.getElementById("violin");
    let violinIcon = document.getElementById("violinIcon");

    violinIcon.onclick = function () {
        if (violin.paused) {
            violinIcon.src = "images/gift3.jpg";
        } else {
            violinIcon.src = "images/gift.jpg";
        }
    }
    if (violin.paused) {
        violinIcon.src = "images/gift3.jpg";
    } else {
        violinIcon.src = "images/gift.jpg";
    }
}
function drumsSounds() {
    let drums = document.getElementById("drums");
    let drumsIcon = document.getElementById("drumsIcon");

    drumsIcon.onclick = function () {
        if (drums.paused) {
            drumsIcon.src = "images/gift4.jpg";
        } else {
            drumsIcon.src = "images/gift.jpg";
        }
    }
    if (drums.paused) {
        drumsIcon.src = "images/gift4.jpg";
    } else {
        drumsIcon.src = "images/gift.jpg";
    }
}
function switchFoo() {
    var number = document.getElementById("number").value;
    switch (number) {
        case "1":
            setTimeout("alert('Ваш приз під номером 1')", 500);
            pianoSounds();
            break;
        case "2":
            setTimeout("alert('Ваш приз під номером 2')", 500);
            guitarSounds();
            break;
        case "3":
            setTimeout("alert('Ваш приз під номером 3')", 500);
            violinSounds();
            break;
        case "4":
            setTimeout("alert('Ваш приз під номером 4')", 500);
            drumsSounds();
            break;
    }
}