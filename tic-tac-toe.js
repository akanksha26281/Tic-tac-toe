var count = 0, gamePlaying = true, end = 0, winner;

//Getting the name of players and storing them in respective variables.
var player0 = prompt("Player 1 enter your name you will be 'X'!");
var player1 = prompt("Player 2 enter your name you will be 'O'!");

// Displaying the turn of first player.
document.getElementById('p').textContent = player0 + " it's your turn!";


document.querySelector('TABLE').addEventListener('click', function(event){
    if(gamePlaying){
        
//        console.log("Clicked!");
    
        var value;
        value = event.target.innerHTML;

    //  Putting the respective "X" and "O" according to the player.
        if(count%2 === 0){
            event.target.innerHTML = "X";
        }else{
            event.target.innerHTML = "O";
        }


            var col = event.target.id;
            var row = event.target.parentNode.id;

    //        console.log(row + col);

            var fields;
            fields = document.getElementById(row);
            fields = Array.prototype.slice.call(fields.children);
            var calc = (fields[0].innerHTML + fields[1].innerHTML + fields[2].innerHTML);

            // Checking along the row.
            if(fields[0].innerHTML + fields[1].innerHTML + fields[2].innerHTML === "XXX"){
                console.log("End!");
                document.getElementById('p').textContent = player0 + " Won!";
                gamePlaying = false;
                winner = 0;
            }else if(fields[0].innerHTML + fields[1].innerHTML + fields[2].innerHTML === "OOO"){
                document.getElementById('p').textContent = player1 + " Won!";
                gamePlaying = false;
                winner = 1;
            }


            var elements;
            elements = document.querySelectorAll('#' + col);
            var Calc = (elements[0].innerHTML + elements[1].innerHTML + elements[2].innerHTML);

            // Checking along the column.
            if(elements[0].innerHTML + elements[1].innerHTML + elements[2].innerHTML === "XXX"){
                console.log("End!");
                document.getElementById('p').textContent = player0 + " Won!";
                gamePlaying = false;
                winner = 0;
            }else if(elements[0].innerHTML + elements[1].innerHTML + elements[2].innerHTML === "OOO"){
                document.getElementById('p').textContent = player1 + " Won!";
                gamePlaying = false;
                winner = 1;
            }


        if(count === 8){
            document.getElementById('p').textContent = "Draw!!";
            gamePlaying = false;
            end = 1;
        }

        count =  count + 1;

        if(gamePlaying){
            if(count%2 === 0){
                document.getElementById('p').textContent = player0 + " it's your turn!";
            }else{
                document.getElementById('p').textContent = player1 + " it's your turn!";
            }            
        }
        
    }
            

});


document.querySelector('#btn').addEventListener('click' , function(){
    
    console.log("Restart is Clicked!");
    
    //restart...
    var fields;
    fields = document.getElementsByTagName("td");
    
    fields = Array.prototype.slice.call(fields);

    fields.forEach(function(cur){
        cur.innerHTML = "&nbsp;";
    });
    
    gamePlaying = true;
    
    var player0 = prompt("Player 1 enter your name you will be 'X'!");
    var player1 = prompt("Player 2 enter your name you will be 'O'!");
    count = 0;
    document.getElementById('p').textContent = player0 + " it's your turn!";
    
});






