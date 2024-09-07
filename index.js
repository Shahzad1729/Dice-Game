// Getting Random Numbers for Players
var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;

// Setting images according to their numbers
document.querySelector(".img1").setAttribute("src","images/dice"+player1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+player2+".png");

// Checking the conditions for a player to win
if (player1>player2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(player2>player1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
