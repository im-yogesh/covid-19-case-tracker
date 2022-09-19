function checkAny() {
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
        margin-right: 10px;
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
            
            height: 510px;
            
        }
        
    }
    `);
    $('.main-container').replaceWith(`
    <div class="main-container">
    <h3>Do you have any of the following?</h3>
    <p>Check any</p>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="1">
        <label>Fever or feeling feverish (such as chills, sweating)</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="1">
        <label>Cough</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="1">
        <label>Mild or moderate difficulty breathing</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="1">
        <label>Sore throat</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="1">
        <label>Muscle aches or body aches</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="1">
        <label>Vomiting or diarrhea</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="1">
        <label>New loss of taste or smell</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="1">
        <label>Congestion or runny nose</label>
    </div>

    <div class="choices-container">
        <input type="checkbox" name="checkany" value="0">
        <label>Other symptoms</label>
    </div>

    <div class="nxtBtn-container">
        <button class="next" disabled>Next</button>
    </div>
    </div>
    `);
}