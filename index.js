var random1 = (Math.floor(Math.random() * 10) % 6)+1;
var im1="images/dice"+random1+".png";
var q1=document.querySelectorAll("img")[0];
q1.setAttribute("src",im1);

var random2 = (Math.floor(Math.random() * 10) % 6) + 1;
var im2 = "images/dice" + random2 + ".png";
var q2 = document.querySelectorAll("img")[1];
q2.setAttribute("src", im2);
if(random1>random2){
document.querySelector("h1").innerHTML = "🚩Player1 Wins";
}
else if(random1<random2)
{
    document.querySelector("h1").innerHTML = "Player2 Wins 🚩";

}
else{
    document.querySelector("h1").innerHTML = "Draw 🤝";

}
