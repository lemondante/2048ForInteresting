/**
 * Created by youweikang on 2016/12/15.
 */
var ChangeId;

function changeColor() {
    ChangeId = setInterval("ChangeBackgroundColor()",100);

}

function ChangeBackgroundColor() {
    var BodyColor = document.body;
    if (BodyColor.style.backgroundColor == 'blue') {
        BodyColor.style.backgroundColor = 'crimson';
    }
    else {
        BodyColor.style.backgroundColor = 'blue';
    }
}

function StopChangeColor() {
    var JSheader1 = document.getElementById('Header1');
    clearInterval(ChangeId);
    document.body.style.backgroundColor = 'black';
    JSheader1.style.color = 'red';
    JSheader1.style.fontSize = '350px';
    setTimeout("fontSizeBack()",2000);


}

function playmusic() {
    var bg_sound=document.createElement("audio");
    document.body.appendChild(bg_sound);
    bg_sound.src="music/Sainkho Namtchylak-Lost Rivers.mp3";
    bg_sound.play();
    showWords();
}

function showWords() {
    var scaryWords1 = document.createElement("div");
    var scaryWords2 = document.createElement("div");

    document.body.appendChild(scaryWords1);
    document.body.appendChild(scaryWords2);

    scaryWords1.innerHTML = "千万不要死";
    scaryWords2.innerHTML = "好好玩下去";

    scaryWords1.style.color = "red";
    scaryWords2.style.color = "red";

    scaryWords1.style.fontSize = "80px";
    scaryWords2.style.fontSize = "80px";

    scaryWords1.style.width = "80px";
    scaryWords2.style.width = "80px";

    scaryWords1.style.position = "fixed";
    scaryWords2.style.position = "fixed";

    scaryWords1.style.top = "200px";
    scaryWords2.style.top = "200px";

    scaryWords1.style.left = "40px";
    scaryWords2.style.right = "40px";

    scaryWords1.style.fontWeight = "bold";
    scaryWords2.style.fontWeight = "bold";

}

function fontSizeBack() {
    var JSheader1 = document.getElementById('Header1');
    JSheader1.style.fontSize = '60px';
    JSheader1.style.color = 'red';
}

function shouNumberWithAnimation(i,j,randNumber) {
    var numberCell = $('#number-cell-'+i+"-"+j);

    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(randNumber);

    numberCell.animate({
        width:"100px",
        height:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50);
}

function showMoveAnimation(fromx,fromy,tox,toy) {
    var numberCell = $('#number-cell-'+fromx+'-'+fromy);
    numberCell.animate({
            top: getPosTop(tox, toy),
            left: getPosLeft(tox, toy)
        },200);
}

function updateScore(score) {
    $('#score').text(score);
}

function frightenYou() {
    var Jeffdiv = document.createElement("div");
    document.body.appendChild(Jeffdiv);
    Jeffdiv.style.zIndex = 99999;
    Jeffdiv.style.backgroundColor = "white";
    Jeffdiv.style.position = "fixed";
    Jeffdiv.style.top = "0px";
    Jeffdiv.style.width = "100%";
    Jeffdiv.style.height = "100%";
    Jeffdiv.innerHTML = "<img src='picture/Jeff The Killer.jpg' id='JeffPic' width='100%' height='100%'/>"
    var bg_sound1=document.createElement("audio");
    document.body.appendChild(bg_sound1);
    bg_sound1.src="music/scream.mp3";
    bg_sound1.volume = "1";
    bg_sound1.play();

}