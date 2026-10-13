// let playerSanity = 25;




// document.getElementById("sanity").textContent = 'Sanity: ' + playerSanity +'%';

// function updateSanity(amount){

//     playerSanity += amount;
//     document.getElementById("sanity").textContent = 'Sanity: ' + playerSanity + '%';
// }

const status = {

sanity : 25,


updateSanity : function(amount){

 sanity += amount
}
}

const inventory = {

hasKey : false,

getKey : function(){
    return hasKey;
}
}

// document.getElementById("gain20").addEventListener("click", function() {
//     status.updateSanity(20);
// });

document.getElementById("sanity").textContent = 'Sanity: ' + status.sanity + '%';
