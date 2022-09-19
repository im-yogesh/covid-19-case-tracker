function checkAny2() {
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
        height: 620px;
        margin: 16px;
        padding: 10px;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 #4982bf;
        overflow-y: auto;
        display: block;
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

    .choices-container {
        border: 0.5px solid #dadce0;
        padding: 12px 0 12px 5px;
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

    input[type=checkbox] {
        border: 0px;
        width: 15px;
        height: 15px;
        margin-right: 13px;
    }

    .nxtBtn-container {
        position: relative;
        left: 80%;
        top: 2%;
        right: 78%;
        margin-bottom: 10px;
    }

    p {
        color: #202124;
        margin-left: 16px;
    }

    @media only screen and (max-width: 800px) {
        .nxtBtn-container {
            position: relative;
            left: 66%;
            top: 2%;
            right: 1%;
        }
        .main-container {
            height: 515px;
        }
    }

    #fixc1 {
        width: 25px !important;
        height: 25px !important;
    }

    #fixc2 {
        width: 20px !important;
        height: 20px !important;
    }
    `);
    $('.main-container').replaceWith(`
    <div class="main-container">
    <h3>Do any of these apply to you?</h3>
    <p>Check any</p>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" id="fixc1" value="1">
        <label>Chronic lung disease, such as moderate to severe asthma, COPD (chronic obstructive pulmonary
            disease), cystic fibrosis, or pulmonary fibrosis</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" id="fixc2" value="1">
        <label>Serious heart condition, such as heart failure, cardiomyopathy, heart attack, or blocked arteries to
            the heart</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>
            Obesity</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>
            Diabetes, chronic kidney disease, or liver disease</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>
            High blood pressure</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>Cancer</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>HIV</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>Blood disorder, such as sickle cell disease or thalassemia</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>Cerebrovascular disease or neurologic condition, such as stroke or dementia</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>Smoking or vaping</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="1">
        <label>Pregnancy</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany2" value="0">
        <label>
            None of the above</label>
    </div>

    <div class="nxtBtn-container">
        <button class="next" disabled>Next</button>
    </div>
    </div>
    `);
}