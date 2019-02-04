function scrambleTeamNames() {
    var team = document.getElementsByClassName("teamMember");

    var i = 0;
    var j = team.length;


    for (i = 0; i < j - 1; i++) {
        var swapIndex = Math.floor(Math.random() * (j - i) + i);

        var temp = team[i].innerHTML;

        // alert("swap->i");
        team[i].innerHTML = team[swapIndex].innerHTML;
        // alert("temp->swap");
        team[swapIndex].innerHTML = temp;
    }
}