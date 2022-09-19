function contactWithInfected() {
    $('style').append(`
    body {
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../images/shape-a.png');
        background-color: #F7F9FE;
    }

    .main-container {
        border: 0.5px solid #d4cdcd;
        width: 650px;
        height: 560px;
        margin: 16px;
        padding: 10px;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 #4982bf;
        overflow-y: auto;
        display: block;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #31333a;
        margin: 0;
        padding: 16px;
        /* background-color: green; */
        letter-spacing: 0.7px;
    }

    .choices-container {
        border: 0.5px solid #dadce0;
        padding: 30px;
        border-radius: 10px;
        margin: 10px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .choices-container:hover {
        background-color: #eff3fd;
    }

    .question-container {
        display: flex;
        flex-direction: column;
    }

    label {
        color: #202124;
        font-weight: 500;
        font-size: 1.1rem;
        margin-top: 1.5px;
    }

    input[type=radio] {
        border: 0px;
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }

    .nxtBtn-container {
        position: relative;
        left: 80%;
        top: 8%;
        right: 1%;
    }

    @media only screen and (max-width: 800px) {
        .nxtBtn-container {
            position: relative;
            left: 66%;
            top: 0%;
        }
        .main-container {
            height: 510px;
        }
    }
    `);
    $('.main-container').replaceWith(`
    <div class="main-container">
    <h3>In the two weeks before you felt sick, did you care for or have close contact (within 6 feet of an infected
        person for at least 15 minutes) with someone with symptoms of COVID-19, tested for COVID-19, or diagnosed
        with COVID-19?</h3>

    <div class="choices-container">
        <input type="radio" name="contact" value="1">
        <label>Yes</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="contact" value="0">
        <label>No</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="contact" value="2">
        <label>I don't know</label>
    </div>

    <div class="nxtBtn-container">
        <button class="next" disabled>Next</button>
    </div>
    </div>
    `);
}