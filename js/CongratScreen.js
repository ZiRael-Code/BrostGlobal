
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("dynamic-date");
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString(undefined, options);
    displayQuestion(currentQuestionIndex);
    duplicateCommentPost()
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
        question: " How do you think of Brost Global?",
        options: ["Very good", "Unbelievable", "Ok", "Not so good"]
    },
    {
        question: "Are you Male or Female?",
        options: ["Male", "Female"]
    }
];
function displayQuestion(index) {
    const questionTemplate = document.getElementById("que-template");
    if (!questionTemplate) {
        console.error("Question template not found");
        return;
    }

    const questionCount = questionTemplate.querySelector("#que-count");
    const questionText = questionTemplate.querySelector("#question");
    const buttonParent = questionTemplate.querySelector("#button_parent");

    if (!questionCount || !questionText || !buttonParent) {
        console.error("One or more elements in the template are missing");
        return;
    }
    questionCount.textContent = index + 1;
    questionText.textContent = questions[index].question;

    buttonParent.innerHTML = "";
    questions[index].options.forEach(option => {
        const button = document.createElement("button");
        button.className = "w-full bg-blue-800 text-white rounded-2xl py-3 mt-2";
        button.textContent = option;

        button.addEventListener("click", () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion(currentQuestionIndex);
            } else {
                showPopup();
                // if (window.innerWidth <= 768) {
                //     document.getElementById("popupmobile").classList.remove("hidden");
                // }
                // else {
                //     document.getElementById("popuppc").classList.remove("hidden");
                // }
            }
        });

        buttonParent.appendChild(button);
    });
}

let currentQuestionIndex = 0;


// Function to show the popup
function showPopup() {
    document.getElementById("popuppc").classList.remove("hidden");
}

// Function to close the popup
function closePopup() {
    document.getElementById("popuppc").classList.add("hidden");
}

//
// async function loadComments() {
//     try {
//         const response = await fetch(`https://graph.facebook.com/{post_id}/comments?access_token={your_access_token}`);
//
//         const contentType = response.headers.get('content-type');
//         if (!contentType || !contentType.includes('application/json')) {
//             throw new Error("Received non-JSON response");
//         }
//
//         const data = await response.json();
//
//         const commentContainer = document.getElementById('comment-container');
//         commentContainer.innerHTML = '';
//
//         data.data.forEach(comment => {
//             const commentCard = `
//                 <div class="bg-white rounded-2xl shadow p-4">
//                     <div class="flex items-start mb-2">
//                         <div class="bg-gray-300 rounded-full w-10 h-10 flex-shrink-0"></div>
//                         <div class="ml-3">
//                             <h3 class="font-semibold text-gray-800">${comment.from.name}</h3>
//                             <p class="text-gray-600 text-sm">${comment.message}</p>
//                         </div>
//                     </div>
//                     <div class="flex items-center text-gray-500 text-sm space-x-4 mt-2">
//                         <span class="flex items-center">
//                             <img src="../img/tup.jpg" alt="Thumbs Up" class="w-4 h-4">
//                         </span>
//                         <span class="flex items-center">
//                             <img src="../img/tdown.jpg" alt="Thumbs Down" class="w-4 h-4">
//                         </span>
//                         <span>${new Date(comment.created_time).toLocaleString()}</span>
//                     </div>
//                 </div>
//             `;
//
//             commentContainer.insertAdjacentHTML('beforeend', commentCard);
//         });
//     } catch (error) {
//         console.error('Error loading comments:', error);
//     }
// }


function duplicateCommentPost(){
    let commentPostParent = document.getElementById('comment-post-parent');

    let commentPost = document.getElementById('comment-post');
    for (let i = 0; i < 2; i++) {
        let cloneComment = commentPost.cloneNode(true);
        commentPostParent.append(cloneComment)
    }
}



