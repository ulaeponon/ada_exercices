const questions = [

    {
        question: "Quel pays est souvent considéré comme le berceau de l’Afrobeat ?",
        options: [
            { answer: "A.Ghana" },
            { answer: "B. Afrique du Sud" },
            { answer: "C. Nigeria" },
            { answer: "D. Côte d’Ivoire" }],
        correct: 2,//reponse C
    },

    {
        question: "La musique duquel de ces peuples a fortement influencé Fela Kuti dans la création de l’afrobeat ?",
        options: [
            { answer: "A. Yoruba" },
            { answer: "B. Massaï" },
            { answer: "C. Touareg" },
            { answer: "D.Pygmée" }],
        correct: 0,//reponse A
    },

    {
        question: "Quel artiste est connu pour avoir popularisé le mélange rap et afrobeat avec des sons comme Afro Trap Part.3 ?",
        options: [
            { answer: "A.Niska" },
            { answer: "B.  MHD" },
            { answer: "C.Burna Boy" },
            { answer: "D.Olamide" }],
        correct: 1,// reponse B
    },
    {
        question: "Quel instrument est le plus typique dans les instrus afrobeat ?",
        options: [
            { answer: "A.Guitare électrique" },
            { answer: "B.Balafon" },
            { answer: "C.Percussions / batterie africaine" },
            { answer: "D.Harmonica" }],
        correct: 2,// reponse c
    },
    {
        question: "Quel artiste a été l’un des premiers à parler de la banlieue dans le rap français dans les années 90 ?",
        options: [
            { answer: "A.IAM" },
            { answer: "B. Kery James" },
            { answer: "C.MC Solaar" },
            { answer: "D. NTM" }],
        correct: 3,//Reponse D
    },

]
const startButton = document.getElementById("startBtn")
startButton.addEventListener("click", startQuizz);
function startQuizz() {

    const welcomeScreen = document.getElementById("welcomeScreen");
    const quizzContainer = document.getElementById("quizz-container");
    welcomeScreen.style.display = "none";
    quizzContainer.style.display = "block";
    showQuestion();
}

let currentQuestionIndex = 0;
let score = 0;
function showQuestion() { 
    const container = document.getElementById("quizz-container")
    container.classList.add("fade-out");
    setTimeout(() => {
        const currentQuestion = questions[currentQuestionIndex];
        const questionText = document.getElementById("questions");
        const answerOption = document.getElementById("answer-options");
        const nextButton = document.getElementById("nextBtn");
        const progress = document.getElementById("progress");
        progress.innerText = `question ${currentQuestionIndex + 1}sur ${questions.length}`;

        questionText.innerText = currentQuestion.question;
        answerOption.innerHTML = "";
        nextButton.style.display = "none"; // on cache le bouton au début

        currentQuestion.options.forEach((option, i) =>{
            const btn = document.createElement("button");
            btn.innerText = option.answer;
            answerOption.appendChild(btn);

            btn.onclick = () => {
                if (i === currentQuestion.correct) {
                    alert("C'est une bonne réponse !");
                    score++;
                } else {
                    alert("Désolé, c'est une mauvaise réponse.");
                }

                // ✅ Affiche le bouton Suivant après avoir répondu
                nextButton.style.display = "inline-block";


                // ✅ Désactive tous les boutons de réponse après un clic
                const allButtons = answerOption.querySelectorAll("button");
                allButtons.forEach(b => b.disabled = true);
            });
        
});
};
   

document.getElementById("nextBtn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz terminé !");
        document.getElementById("quizz-container").innerHTML = `
            <h2>🎉 Bravo, tu as terminé le quiz !</h2>
            <p> Ton score:${score}/${questions.length}</p>
        `;
    }
});

