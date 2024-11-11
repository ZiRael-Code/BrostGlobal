
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("dynamic-date");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString(undefined, options);
    displayQuestion()
});


const questions = [
    {
        question: "Do you know Brost Global?",
        options: ["Yes", "No"]
    },
    {
        question: "How old are you?",
        options: ["18-29", "30-39", "40-49", "50+"]
    },
    {
        question: "What is your favorite color?",
        options: ["Red", "Blue", "Green", "Other"]
    },
    {
        question: "Do you enjoy tech?",
        options: ["Yes", "No", "Sometimes", "Rarely"]
    }
    ];
let queCounter  = 0;


function displayQuestion() {
    let question_template = document.getElementById("que-template");
    let parent_div = document.getElementById("parent");

    let que_options  = document.getElementsByClassName("option-buttons")
    for (let i = 0; i < que_options.length; i++) {
        que_options[i].addEventListener("click", function display_que(){
            queCounter +=1;
                let new_question = question_template.cloneNode(true);
                new_question.querySelector('#que-count').textContent  = queCounter.toString();
                new_question.querySelector('#question').textContent = questions[i].question;

            let buttons =  new_question.getElementsByClassName("option-buttons")
            let button_parent = new_question.querySelector('#button_parent')
            for (let j = 1; j <buttons.length; j++) {
                buttons[j].remove()
            }
            questions[queCounter].options.forEach(function(option){

                    let new_button = buttons[0].cloneNode(true)
                    new_button.textContent = option;
                    button_parent.appendChild(new_button)
                })
            // buttons[0].remove()

                parent_div.innerHTML  = ""
                parent_div.appendChild(new_question);
                question_template.remove()
            displayQuestion()
        })
    }

}


