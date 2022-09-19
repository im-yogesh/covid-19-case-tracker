function showAge() {
    $('style').append(`
    h3 {
        font-size: 1.75rem;
        font-weight: 400;
        color: #31333a;
        margin: 10px 0 0 0;
        padding: 0px 10px 0 12px;
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
        overflow:hidden; overflow-y:scroll;
        overflow-x: scroll;
        
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
    h3 b{
        visibility: hidden;
    }

    .nxtBtn-container {
        position: relative;
        left: 40%;
        top: 0%;
    }

    @media only screen and (max-width: 800px) {
        .nxtBtn-container {
            position: relative;
            left: 30%;
            top: 0%;
            right: 1%;
        }
        h3 {
            font-size: 22px;
            font-weight: 400;
            color: #31333a;
            margin: 10px 0 0 10px;
            padding: 0;
        }
    }
    `);
    $('.form-container').replaceWith(`
    <div class="form-container">
    <div class="question-container">

    <h3>What is your age?<b>hiddentxthiddentxthiddentxthi</b></h3><br>

    <div class="choices-container">
        <input type="radio" name="age">
        <label>18-29</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="age">
        <label>30-39</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="age">
        <label>40-49</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="age">
        <label>50-59</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="age">
        <label>60-64</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="age">
        <label>65-69</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="age">
        <label>70-79</label>
    </div>

    <div class="choices-container">
        <input type="radio" name="age">
        <label>80+</label>
    </div>

    </div>
    <div class="nxtBtn-container">
            <button class="next" disabled>Next</button>
        </div>
    </div>
    `);
}