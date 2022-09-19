
function fetchdata() {
    fetch(`${window.location.origin}/data`)
        .then(response => response.json())
        .then(rsp => {
            rsp.forEach(element => {
                plotMap(element.latitude, element.longitude, element.risk);
            });
        })
        .catch(err => {
            alert(err);
        });
}

function plotMap(latitude, longitude, risk) {

    if (risk > 7) {
        color = "rgb(155, 0, 0)";
    }

    if (risk > 5) {
        color = "rgb(185, 0, 0)";
    } else {
        color = `rgb(235, 0, 0)`;
    }

    namec = "o";
    t_cases = 1;
    // Mark on the map
    new mapboxgl.Marker({
        draggable: false,
        color: color
    }).setLngLat([longitude, latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h6>' + "Total Cases in " + `${namec}` + '</h6><p>' + `${t_cases}` + '</p>'))
        .addTo(map);

}

fetchdata();