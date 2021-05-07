/**
 * @author Electrolysis
 * 
 */


function search() {
    let name = document.getElementById("big-search-bar").value;
    let min = document.getElementById("min-lvl").value;
    let max = document.getElementById("max-lvl").value;
    let sort = document.getElementById("sortby").value;
    window.location.href = '/?name=' + name + '&min=' + min + '&max=' + max + '&sortBy=' + sort;


    return false;
}

function reset() {
    window.location.href = '/';
    return false;
}