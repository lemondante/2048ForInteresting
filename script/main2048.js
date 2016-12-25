/**
 * Created by youweikang on 2016/12/15.
 */
var board = new Array();
var score = 0;
var hasConflicted = new Array();

$(document).ready(function () {
    newgame();
});

function newgame() {

    init();
    generateOneNumber();
    generateOneNumber();
}

function init() {
    for (var i = 0; i <4 ; i++){
        for (var j = 0; j<4; j++){

        var gridCell = $("#grid-cell-"+i+"-"+j);
        gridCell.css('top',getPosTop(i,j));
        gridCell.css('left',getPosLeft(i,j));
        }
    }

    for (var i = 0; i <4; i++){
        board[i] = new Array();
        hasConflicted[i] = new Array();
        for (var j = 0; j <4;j++){
            board[i][j] = 0;
            hasConflicted[i][j] = false;
        }
    }
    
    updateBoardView();
    score = 0;
    $('#score').text( score );
}

function updateBoardView() {

    $(".number-cell").remove();
    for (var i = 0; i <4 ; i++){
        for (var j = 0; j<4; j++) {
            $("#grid-container").append('<div class="number-cell" id = "number-cell-'+i+'-'+j+'"></div>');
            var theNumberCell = $('#number-cell-'+i+'-'+j);

            if  (board[i][j] == 0){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i,j)+50);
                theNumberCell.css('left',getPosLeft(i,j)+50);
            }
            else {
                theNumberCell.css('width','100px');
                theNumberCell.css('height','100px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
                theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color',getNumberColor(board[i][j]));
                theNumberCell.css('font-size',getNumberFontSize(board[i][j]))
                theNumberCell.text(board[i][j]);
            }
            hasConflicted[i][j] = false;
        }

    }
}

function generateOneNumber() {
    if(nospace(board)){
        return false;
    }

    var randx =parseInt( Math.floor(Math.random() * 4));
    var randy =parseInt( Math.floor(Math.random() * 4));

    var times = 0;
    var PauseCircle = false;
    while( times < 50 ){
        if( board[randx][randy] === 0 )
            break;

        randx = parseInt( Math.floor( Math.random()  * 4 ) );
        randy = parseInt( Math.floor( Math.random()  * 4 ) );

        times ++;
    }
    if( times === 50 ){
        for( var i = 0 ; i < 4&& PauseCircle === true ; i ++ )
            for( var j = 0 ; j < 4 ; j ++ ){
                if( board[i][j] === 0 ){
                    randx = i;
                    randy = j;
                    PauseCircle = true;
                }
            }
    }

    var randNumber = (Math.random()< 0.9? 2: 4);

    board[randx][randy] = randNumber;

    shouNumberWithAnimation(randx,randy,randNumber);
    updateBoardView()
    return true;

}

$(document).keydown(function (event) {
    switch (event.keyCode){
        case 37:case 65:
            if(moveLeft()){
                setTimeout("generateOneNumber()",200);
                setTimeout("isgameover()",250);
            }
            break;

        case 38:case 87:
            if(moveUp()){
                setTimeout("generateOneNumber()",200);
                setTimeout("isgameover()",250);
            }
            break;

        case 39:case 68:
            if(moveRight()){
                setTimeout("generateOneNumber()",200);
                setTimeout("isgameover()",250);
            }
            break;

        case 40:case 83:
            if(moveDown()){
                setTimeout("generateOneNumber()",200);
                setTimeout("isgameover()",250);
            }
            break;

        default:
            break;
    }
});

function moveLeft() {
    if(!canMoveLeft(board)){
        return false;
    }
    else{
        for (var i = 0; i <4 ; i++){
            for (var j = 1; j<4; j++) {
                if (board[i][j] != 0){
                    for (var k = 0; k < j; k++){
                        if(board[i][k] === 0 && noBlockHorizontal(i,k,j,board) ){
                            showMoveAnimation(i,j,i,k);
                            board[i][k] = board[i][j];
                            board[i][j] = 0;

                            continue;
                        }
                        else if(board[i][k] === board[i][j] &&noBlockHorizontal(i,k,j,board) && hasConflicted[i][k] === false){
                            showMoveAnimation(i,j,i,k);
                            board[i][k] += board[i][j];
                            board[i][j] = 0;
                            score += board[i][k];
                            updateScore(score);
                            hasConflicted[i][k] = true;
                            continue;
                        }
                    }

                }
            }
        }
        setTimeout("updateBoardView()",200);
        return true;
    }
}
function moveUp() {
    if(!canMoveUp(board)){
        return false;
    }
    else{
        for (var j = 0; j<4; j++) {
            for (var i = 1; i < 4 ; i++){
                if (board[i][j] != 0){
                    for (var k = 0; k < i; k++){
                        if(board[k][j] === 0 && noBlockVertical(j,k,i,board) ){
                            showMoveAnimation(i,j,k,j);
                            board[k][j] = board[i][j];
                            board[i][j] = 0;

                            continue;
                        }
                        else if(board[k][j] === board[i][j] &&noBlockVertical(j,k,i,board) && hasConflicted[k][j] == false ){
                            showMoveAnimation(i,j,k,j);
                            board[k][j] += board[i][j];
                            board[i][j] = 0;
                            score += board[k][j];
                            updateScore(score);
                            hasConflicted[k][j] = true;
                            continue;
                        }
                    }

                }
            }
        }
        setTimeout("updateBoardView()",200);
        return true;
    }
}
function moveRight() {
    if(!canMoveRight(board)){
        return false;
    }
    else{
        for (var i = 0; i <4 ; i++){
            for (var j = 2; j>=0; j--) {
                if (board[i][j] != 0){
                    for (var k = 3; k > j; k--){
                        if(board[i][k] === 0 && noBlockHorizontal(i,j,k,board) ){
                            showMoveAnimation(i,j,i,k);
                            board[i][k] = board[i][j];
                            board[i][j] = 0;

                            continue;
                        }
                        else if(board[i][k] === board[i][j] &&noBlockHorizontal(i,j,k,board) && hasConflicted[i][k] === false ){
                            showMoveAnimation(i,j,i,k);
                            board[i][k] += board[i][j];
                            board[i][j] = 0;
                            score += board[i][k];
                            updateScore(score);
                            hasConflicted[i][k] = true;
                            continue;
                        }
                    }

                }
            }
        }
        setTimeout("updateBoardView()",200);
        return true;
    }
}
function moveDown() {
    if(!canMoveDown(board)){
        return false;
    }
    else{
        for (var j = 0; j<4; j++) {
            for (var i = 2; i >=0 ; i--){

                if (board[i][j] != 0){
                    for (var k = 3; k > i; k--){
                        if(board[k][j] === 0 && noBlockVertical(j,i,k,board) ){
                            showMoveAnimation(i,j,k,j);
                            board[k][j] = board[i][j];
                            board[i][j] = 0;

                            continue;
                        }
                        else if(board[k][j] === board[i][j] &&noBlockVertical(j,i,k,board) && hasConflicted[k][j] == false ){
                            showMoveAnimation(i,j,k,j);
                            board[k][j] += board[i][j];
                            board[i][j] = 0;
                            score += board[k][j];
                            updateScore(score);
                            hasConflicted[k][j] = true;
                            continue;
                        }
                    }

                }
            }
        }
        setTimeout("updateBoardView()",200);
        return true;
    }
}


function isgameover() {
    if (nospace(board) && nomove(board)){
        gameover();
    }
}

function gameover() {
    frightenYou();
}