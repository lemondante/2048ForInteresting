/**
 * Created by youweikang on 2016/12/15.
 */
function getPosTop(i,j) {
    return 20+ i * 120;
}

function getPosLeft(i,j) {
    return 20 + j * 120;
}

function getNumberBackgroundColor(number) {
    switch (number){
        case 2:
            return "#FF0000";
            break;

        case 4:
            return "#A020F0";
            break;

        case 8:
            return "#0066ee";
            break;

        case 16:
            return "#00FFFF";
            break;

        case 32:
            return "#00FF00";
            break;

        case 64:
            return "#FFFF00";
            break;

        case 128:
            return "#FF8C00";
            break;

        case 256:
            return "#FF00FF";
            break;

        case 512:
            return "#000088";
            break;

        case 1024:
            return "#52ffc5";
            break;

        case 2048:
            return "#BCEE68";
            break;

        case 4096:
            return "#000000";
            break;

        case 8192:
            return "#c0c0c0";
            break;

        case 16384:
            return "#FFFFFF";
            break;
    }
}

function getNumberColor( number ) {
    switch (number){
        case 2:
            return "#BCEE68";
            break;

        case 4:
            return "#00FFFF";
            break;

        case 8:
            return "#ff0000";
            break;

        case 16:
            return "#A020F0";
            break;

        case 32:
            return "#FF00FF";
            break;

        case 64:
            return "#000088";
            break;

        case 128:
            return "#52ffc5";
            break;

        case 256:
            return "#00FF00";
            break;

        case 512:
            return "#FFFF00";
            break;

        case 1024:

            return "#FF8C00";
            break;

        case 2048:
            return "#0066ee";
            break;

        case 4096:
            return "#FFFFFF";
            break;

        case 8192:
            return "#ff2200";
            break;

        case 16384:
            return "#000000";
            break;
    }
}

function getNumberFontSize(number){
    switch (number){
        case 2:
            return "60px";
            break;

        case 4:
            return "60px";
            break;

        case 8:
            return "60px";
            break;

        case 16:
            return "60px";
            break;

        case 32:
            return "60px";
            break;

        case 64:
            return "60px";
            break;

        case 128:
            return "60px";
            break;

        case 256:
            return "60px";
            break;

        case 512:
            return "60px";
            break;

        case 1024:

            return "45px";
            break;

        case 2048:
            return "45px";
            break;

        case 4096:
            return "45px";
            break;

        case 8192:
            return "45px";
            break;

        case 16384:
            return "35px";
            break;
    }
}

function nospace(board) {
    for (var i = 0; i <4 ; i++){
        for (var j = 0; j<4; j++) {
            if (board[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

function canMoveLeft(board) {
    for (var i = 0; i <4 ; i++){
        for (var j = 1; j<4; j++) {
            if (board[i][j] != 0){
                if(board[i][j-1] === 0 || board[i][j-1] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(board) {
    for (var i = 1; i < 4 ; i++){
        for (var j = 0; j<4; j++) {
            if (board[i][j] != 0){
                if(board[i-1][j] === 0 || board[i-1][j] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board) {
    for (var i = 0; i <4 ; i++){
        for (var j = 2; j >= 0 ; j --) {
                if (board[i][j] != 0){
                if(board[i][j+1] === 0 || board[i][j+1] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(board) {
    for (var i = 2 ; i >= 0 ; i -- ){
        for (var j = 0; j<4; j++) {
            if (board[i][j] != 0){
                if(board[i+1][j] === 0 || board[i+1][j] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function noBlockHorizontal(row,col1,col2,board) {
    for (var i = col1+1 ; i<col2 ; i++ ){
        if (board[row][i] != 0){
            return false;
        }
    }
    return true;
}

function noBlockVertical(col,row1,row2,board) {
    for (var i = row1+1 ; i<row2 ; i++ ){
        if (board[i][col] != 0){
            return false;
        }
    }
    return true;
}

function nomove(board) {
    if(
        canMoveLeft(board)||canMoveUp(board)||canMoveDown(board)||canMoveRight(board)
    ){
        return false;
    }
    else{
        return true;
    }
}