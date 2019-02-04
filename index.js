function scrambleTeamNames() {
    var team = document.getElementsByClassName("teamMember");

    var i = 0;
    var j = team.length;


    for (i = 0; i < j - 1; i++) {
        var swapIndex = Math.floor(Math.random() * (j - i) + i);
        var temp = team[i].innerHTML;

        team[i].innerHTML = team[swapIndex].innerHTML;
        team[swapIndex].innerHTML = temp;
    }
}

//Modal display functionality

var myModal = document.getElementById("myModal");
var modalLaunchButton = document.getElementById("modalLaunchButton");
var span = document.getElementsByClassName("close")[0];

modalLaunchButton.onclick = function () {
    alert("triggered");
    myModal.style.display = "block";
}

span.onclick = function () {
    myModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == myModal) {
//         modal.style.display = "none";
//     }
// }