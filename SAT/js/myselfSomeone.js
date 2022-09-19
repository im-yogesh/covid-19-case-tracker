function showMySelfSomeonePage() {
    $('style').append(`
        h3 {
            font-size: 1.75rem;
            font-weight: 400;
            color: #31333a;
            margin: 0;
            padding: 0 10px 0 12px;
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
        @media only screen and (max-width: 800px) {
            .nxtBtn-container {
                position: relative;
                left: 30%;
                top: 4%;
                right: 1%;
            }
        }
        `);
    $('.form-container').replaceWith(`
        <div class="form-container">
        <div class="question-container">

        <h3>Are you answering for yourself or someone else?</h3><br>

        <div class="choices-container">
            <input type="radio" name="myselfSomeone">
            <label>Myself</label>
        </div>

        <div class="choices-container">
            <input type="radio" name="myselfSomeone">
            <label>Someone else</label>
        </div>

        </div>
        <div class="nxtBtn-container">
                <button class="next" disabled>Next</button>
            </div>
        </div>`);
}

