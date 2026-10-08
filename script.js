/* ==========================================
   HEALTHWISE - JAVASCRIPT
   Learn. Stay Healthy. Stay Informed.
   ========================================== */


/* ==========================================
   HEALTH TIP OF THE DAY
   ========================================== */

const tips = [
    "💧 Drink enough water throughout the day to help your body stay hydrated.",
    "😴 Getting enough sleep helps your body and mind recover and stay healthy.",
    "🥗 Eat a variety of foods to give your body different nutrients.",
    "🧼 Wash your hands regularly to help prevent the spread of germs.",
    "🏃 Stay physically active through safe activities that you enjoy.",
    "🧘 Take short breaks and manage stress when you feel overwhelmed.",
    "🍎 Include fruits and vegetables as part of a balanced diet."
];

let tipIndex = 0;


function nextTip() {

    const tipText = document.getElementById("healthTip");

    if (!tipText) {
        return;
    }

    tipIndex++;

    if (tipIndex >= tips.length) {
        tipIndex = 0;
    }

    tipText.textContent = tips[tipIndex];
}


/* ==========================================
   NUTRITION CARDS
   ========================================== */

function showFood(button) {

    const card = button.closest(".food-card");

    if (!card) {
        return;
    }

    card.classList.toggle("active");
}


/* ==========================================
   HYGIENE QUIZ
   ========================================== */

function checkQuiz(answer) {

    const result = document.getElementById("quizResult");

    if (!result) {
        return;
    }


    if (answer === "yes") {

        result.innerHTML =
            "✅ Correct! Regular handwashing can help remove germs and reduce the spread of illness.";

    } else {

        result.innerHTML =
            "❌ Not quite! Regular handwashing is an important way to help prevent the spread of germs.";

    }
}


/* ==========================================
   HEALTHY HABIT CHECKER
   ========================================== */

function checkHabits() {

    const habits = document.querySelectorAll(
        '#habitChecker input[type="checkbox"]'
    );

    const result = document.getElementById("habitResult");

    if (!result) {
        return;
    }


    let completed = 0;


    habits.forEach(function(habit) {

        if (habit.checked) {
            completed++;
        }

    });


    if (completed === 0) {

        result.innerHTML =
            "🌱 Start with one healthy habit today! Small steps can make a difference.";

    }

    else if (completed < habits.length) {

        result.innerHTML =
            "💚 Great job! You completed " +
            completed +
            " healthy habit(s). Keep going!";

    }

    else {

        result.innerHTML =
            "🎉 Amazing! You completed all of the healthy habits!";

    }
}


/* ==========================================
   MEDICAL HELP
   ========================================== */

function showMedical(type) {

    const answer = document.getElementById("medicalAnswer");

    if (!answer) {
        return;
    }


    const medicalInfo = {

        breathing: `
            <h3>🫁 Breathing Problems</h3>
            <p>
                Serious or sudden difficulty breathing should not be ignored.
                Seek urgent medical help, especially if the person is struggling
                to breathe or the condition is getting worse.
            </p>
        `,


        chest: `
            <h3>❤️ Chest Pain</h3>
            <p>
                Sudden, severe, or unexplained chest pain can require urgent
                medical attention. Seek medical help immediately if the pain
                is severe or occurs with other concerning symptoms.
            </p>
        `,


        fainting: `
            <h3>⚠️ Fainting or Confusion</h3>
            <p>
                Fainting, sudden confusion, or loss of consciousness can be
                serious. Seek medical help promptly, especially if the person
                does not quickly return to normal.
            </p>
        `,


        bleeding: `
            <h3>🩸 Severe Bleeding</h3>
            <p>
                Severe or uncontrolled bleeding requires immediate medical
                attention. Seek emergency medical care as soon as possible.
            </p>
        `

    };


    if (medicalInfo[type]) {

        answer.innerHTML = medicalInfo[type];

        answer.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* ==========================================
   PAGE LOADED MESSAGE
   ========================================== */

document.addEventListener("DOMContentLoaded", function() {

    console.log("🌿 HEALTHWISE loaded successfully!");
    console.log("Learn. Stay Healthy. Stay Informed.");

});

