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
    JSheader1.style.color = 'crimson';
    JSheader1.style.fontSize = '350px';
    setTimeout("fontSizeBack()",500);
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