$(document).ready(function () {
    var noPathSet = false;
    $('#start').click(function () {
        showMySelfSomeonePage();
    });

    $('body').on('change', 'input:radio', function () {
        $('.next').removeAttr("disabled");
    });

    $('body').on('change', 'input:checkbox', function () {
        $('.next').removeAttr("disabled");
    });

    $('body').on('click', '.next', function () {
        var name = $('input').attr('name');

        if (name == "myselfSomeone") {
            showAge();

        } else if (name == "age") {
            lifeThreatening();

        } else if (name == "lifeThreatening") {

            var value = $(`input[name=${name}]:checked`).val();

            switch (value) {
                case "1":
                    window.location.href = "../pages/call911.html";
                    break;

                case "0":
                    areYouSick();
                    break;

                default:
                    break;
            }
        } else if (name == "areyousick") {

            var value = $(`input[name=${name}]:checked`).val();
            switch (value) {
                case "1":
                    localStorage.clear()
                    contactWithInfected();
                    break;

                case "0":
                    noPathSet = true;
                    localStorage.setItem("nopath", noPathSet);
                    contactWithInfected();
                    break;

                default:
                    break;
            }
        } else if (name == "contact") {
            var value = $(`input[name=${name}]:checked`).val();

            switch (value) {
                case "1":
                    if (localStorage.getItem("nopath")) {
                        homelessShelter();
                    } else {
                        checkAny();
                    }

                    break;

                case "0":
                    if (localStorage.getItem("nopath")) {
                        window.location.href = "../pages/feelingOk.html";

                    } else {
                        checkAny();
                    }
                    break;

                case "2":
                    checkAny();
                    break;
                default:
                    break;
            }
        } else if (name == "checkany") {
            var value = $(`input[name=${name}]:checked`).val();
            switch (value) {
                case "1":
                    homelessShelter();
                    break;

                case "0":
                    window.location.href = "../pages/feelingSick.html";

                    break;

                case "2":
                    checkAny();
                    break;
                default:
                    break;
            }
        } else if (name == "homeless") {
            var value = $(`input[name=${name}]:checked`).val();
            switch (value) {
                case "1":
                    window.location.href = "../pages/contMedProv.html";

                    break;

                case "0":
                    volunteered();
                    break;

                default:
                    break;
            }
        } else if (name == "volunteered") {
            var value = $(`input[name=${name}]:checked`).val();
            switch (value) {
                case "1":
                    if (localStorage.getItem("nopath")) {
                        wear();
                    } else {
                        window.location.href = "../pages/stayHome.html";

                    }
                    break;

                case "0":
                    if (localStorage.getItem("nopath")) {
                        window.location.href = "../pages/monitorSymptom.html";

                    } else {
                        checkAny2();
                    }
                    break;

                default:
                    break;
            }
        } else if (name == "checkany2") {
            var value = $(`input[name=${name}]:checked`).val();
            switch (value) {
                case "1":
                    window.location.href = "../pages/callMedProv.html";

                    break;

                case "0":
                    window.location.href = "../pages/stayHome.html";

                    break;

                default:
                    break;
            }
        } else if (name == "wear") {
            var value = $(`input[name=${name}]:checked`).val();
            switch (value) {
                case "1":
                    window.location.href = "../pages/monitor2.html";

                    break;

                case "0":
                    window.location.href = "../pages/occupational.html";

                    break;

                default:
                    break;
            }
        }

    });
});