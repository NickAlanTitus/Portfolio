// Wait for the DOM to be ready
$(function() {
});
//Specify what clicker does when clicked
function modify_money(val) {
    var money = document.getElementById('money').value;
    var new_money = parseInt(money,10) + val;

    if (new_money < 0) {
        new_money= 0;
    }

    document.getElementById('money').value = new_money;
    return new_money;
}
