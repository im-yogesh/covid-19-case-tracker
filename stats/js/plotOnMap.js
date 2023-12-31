
function fetchdata() {

    fetch(`${window.location.origin}/data`)
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp);
            rsp.forEach(element => {

                fetch(`https://us1.locationiq.com/v1/reverse?key=pk.b646cd17af74aea3957541d94db1a3a5&lat=${element.latitude}&lon=${element.longitude}&format=json`)
                    .then(response => response.json())
                    .then(rsp => {
                        // console.log(rsp.address.city);
                        plotMap(element.latitude, element.longitude, element.risk, rsp.address.city);

                    })
                    .catch(err => {
                        console.log(err);
                    });

            });
        })
        .catch(err => {
            alert(err);
        });
}

function plotMap(latitude, longitude, risk, city) {

    if (risk > 7) {
        color = "rgb(155, 0, 0)";
    }

    if (risk > 5) {
        color = "rgb(185, 0, 0)";
    } else {
        color = `rgb(235, 0, 0)`;
    }

    namec = city;

    // Mark on the map
    new mapboxgl.Marker({
        draggable: false,
        color: color
    }).setLngLat([longitude, latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`${namec === undefined ? "Unknown" : namec}`))
        .addTo(map);

}

fetchdata();
