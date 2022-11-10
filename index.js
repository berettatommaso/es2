var stato = "";
document.getElementById("like").addEventListener('click', function(){
    document.getElementById("dislike").style.background = "white";
    document.getElementById("like").style.background = "green";
    stato = "like";
    console.log(stato);
})

document.getElementById("dislike").addEventListener('click', function(){
    document.getElementById("like").style.background = "white";
    document.getElementById("dislike").style.background = "yellow";
    stato = "dislike";
    console.log(stato);
});