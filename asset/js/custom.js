function getYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    document.querySelector('#dateYear').innerHTML = currentYear;
}

getYear();