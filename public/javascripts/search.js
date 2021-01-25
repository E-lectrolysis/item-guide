function search() {
    let param = document.getElementById("big-search-bar").value;
    window.location.href = '/?name=' + param;
    return false;
}