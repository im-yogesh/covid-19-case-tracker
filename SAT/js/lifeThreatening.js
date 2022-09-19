function lifeThreatening() {
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
        height: 600px;
        margin: 16px;
        padding: 10px;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 #4982bf;
        overflow-y: auto;
        display: block;
    }

    img {
        width: 50px;
        height: 50px;
        margin-left: 20px;
    }

    h3 {
        font-size: 2rem;
        font-weight: 400;
        color: #31333a;
        margin: 0;
        padding: 16px;
        /* background-color: green; */
        letter-spacing: 0.7px;
    }

    ul {
        padding-left: 0;

    }

    ul li {
        padding: 10px;
        letter-spacing: 0.5px;
        color: #202124;
        margin-left: 50px;
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
        top: 0%;
        right: 1%;
    }

    @media only screen and (max-width: 800px) {
        .nxtBtn-container {
            position: relative;
            left: 65%;
            top: 0%;
            
        }
        .main-container {
            width: 650px;
            height: 500px;
        }
    }
    `);
    $('.form-container').replaceWith(`
    <img src="/SAT/images/warning.png" alt="" srcset="">
    <h3>Do you have any of these life-threatening symptoms?</h3>
    <ul>
        <li>Bluish lips or face</li>
        <li>Severe and constant pain or pressure in the chest</li>
        <li>Extreme difficulty breathing (such as gasping for air, being unable to talk <br> without catching your
            breath, severe wheezing, nostrils flaring)</li>
        <li>New disorientation (acting confused)</li>
        <li>Unconscious or very difficult to wake up</li>
        <li>Slurred speech or difficulty speaking (new or worsening)</li>
        <li>New or worsening seizures</li>
        <li>Signs of low blood pressure (too weak to stand, dizziness, lightheaded, <br> feeling cold, pale, clammy
            skin)</li>
        <li>Dehydration (dry lips and mouth, not urinating much, sunken eyes)</li>

    </ul>

    <div class="choices-container">
        <input type="radio" name="lifeThreatening" value="1">
        <label>Yes</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="lifeThreatening" value="0">
        <label>No</label>
    </div>

    <div class="nxtBtn-container">
        <button class="next" disabled>Next</button>
    </div>
    `);
}