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