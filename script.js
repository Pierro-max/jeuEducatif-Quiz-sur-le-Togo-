 // Données du quiz
        const quizData = {
            histoire: [
                {
                    question: "En quelle année le Togo a-t-il obtenu son indépendance?",
                    options: ["1956", "1960", "1963", "1970"],
                    correct: 1
                },
                {
                    question: "Qui était le premier président du Togo?",
                    options: ["Gnassingbé Eyadéma", "Sylvanus Olympio", "Nicolas Grunitzky", "Faure Gnassingbé"],
                    correct: 1
                },
                {
                    question: "Quel pays a colonisé le Togo avant son indépendance?",
                    options: ["France", "Royaume-Uni", "Allemagne", "Belgique"],
                    correct: 2
                },
                {
                    question: "Quelle était la capitale du Togo sous l'administration allemande?",
                    options: ["Lomé", "Sokodé", "Atakpamé", "Aného"],
                    correct: 3
                },
                {
                    question: "Combien de temps a duré le règne de Gnassingbé Eyadéma?",
                    options: ["28 ans", "38 ans", "48 ans", "18 ans"],
                    correct: 1
                }
            ],
            geographie: [
                {
                    question: "Quelle est la capitale du Togo?",
                    options: ["Kara", "Sokodé", "Lomé", "Atakpamé"],
                    correct: 2
                },
                {
                    question: "Quel pays ne partage pas de frontière avec le Togo?",
                    options: ["Ghana", "Bénin", "Nigeria", "Burkina Faso"],
                    correct: 2
                },
                {
                    question: "Quelle est la principale chaîne de montagnes au Togo?",
                    options: ["Monts Togo", "Monts Fazao", "Monts Défalé", "Monts Agou"],
                    correct: 0
                },
                {
                    question: "Quel est le plus long fleuve du Togo?",
                    options: ["Mono", "Oti", "Zio", "Kara"],
                    correct: 1
                },
                {
                    question: "Quelle est la superficie approximative du Togo?",
                    options: ["36 000 km²", "56 000 km²", "76 000 km²", "96 000 km²"],
                    correct: 1
                }
            ],
            tourisme: [
                {
                    question: "Quelle ville est connue pour ses maisons à tourelles?",
                    options: ["Lomé", "Kpalimé", "Kara", "Aného"],
                    correct: 3
                },
                {
                    question: "Où se trouve le marché des féticheurs?",
                    options: ["Lomé", "Atakpamé", "Kpalimé", "Sokodé"],
                    correct: 0
                },
                {
                    question: "Quelle région est réputée pour ses cascades?",
                    options: ["Région Maritime", "Région des Plateaux", "Région Centrale", "Région de la Kara"],
                    correct: 1
                },
                {
                    question: "Quel parc national abrite des éléphants?",
                    options: ["Parc Fazao-Malfakassa", "Parc Keran", "Parc Fosse aux Lions", "Parc Oti-Kéran"],
                    correct: 0
                },
                {
                    question: "Quelle plage est la plus célèbre du Togo?",
                    options: ["Plage de Lomé", "Plage d'Agbodrafo", "Plage d'Aného", "Plage de Tabligbo"],
                    correct: 0
                }
            ],
            sport: [
                {
                    question: "Dans quel sport le Togo a-t-il remporté sa première médaille olympique?",
                    options: ["Athlétisme", "Canoë-kayak", "Boxe", "Judo"],
                    correct: 1
                },
                {
                    question: "Quel joueur togolais a joué en Premier League anglaise?",
                    options: ["Emmanuel Adebayor", "Floyd Ayité", "Jonathan Ayité", "Alaixys Romao"],
                    correct: 0
                },
                {
                    question: "En quelle année l'équipe nationale de football du Togo a-t-elle participé à sa première Coupe du Monde?",
                    options: ["1998", "2002", "2006", "2010"],
                    correct: 2
                },
                {
                    question: "Quelle équipe de football est la plus titrée au Togo?",
                    options: ["ASKO Kara", "Semassi FC", "Dynamic Togolais", "AC Semassi"],
                    correct: 0
                },
                {
                    question: "Quel sport traditionnel est populaire dans le nord du Togo?",
                    options: ["Lutte traditionnelle", "Course de pirogues", "Tir à l'arc", "Saut en hauteur"],
                    correct: 0
                }
            ],
            musique: [
                {
                    question: "Qui est considéré comme le roi de la musique togolaise?",
                    options: ["Jimmy Hope", "Fifi Rafiatou", "King Mensah", "Bella Bellow"],
                    correct: 3
                },
                {
                    question: "Quel est le style musical traditionnel le plus populaire au Togo?",
                    options: ["Agbadja", "Makossa", "Highlife", "Afrobeat"],
                    correct: 0
                },
                {
                    question: "Quelle chanteuse togolaise est surnommée 'La voix d'or du Togo'?",
                    options: ["Afia Mala", "Julie Akakpo", "Fifi Rafiatou", "Bella Bellow"],
                    correct: 3
                },
                {
                    question: "Quel groupe de musique togolais a connu un succès international dans les années 90?",
                    options: ["Voudou Game", "Toofan", "Ardiess", "Wiyaala"],
                    correct: 2
                },
                {
                    question: "Quel instrument traditionnel est caractéristique de la musique togolaise?",
                    options: ["Kora", "Balafon", "Tam-tam parleur", "N'goni"],
                    correct: 2
                }
            ]
        };

        // Variables d'état
        let currentTheme = null;
        let currentQuestions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let timer = null;
        let timeLeft = 10;
        let selectedOption = null;
        let userAnswers = [];

        // Éléments DOM
        const themeScreen = document.getElementById('themeScreen');
        const quizScreen = document.getElementById('quizScreen');
        const resultsScreen = document.getElementById('resultsScreen');
        const themeCards = document.querySelectorAll('.theme-card');
        const startQuizBtn = document.getElementById('startQuizBtn');
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const currentQuestionElement = document.getElementById('currentQuestion');
        const totalQuestionsElement = document.getElementById('totalQuestions');
        const scoreElement = document.getElementById('score');
        const timerElement = document.getElementById('timer');
        const feedbackElement = document.getElementById('feedback');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finalScoreElement = document.getElementById('finalScore');
        const maxScoreElement = document.getElementById('maxScore');
        const scoreMessageElement = document.getElementById('scoreMessage');
        const resultsDetails = document.getElementById('resultsDetails');
        const restartBtn = document.getElementById('restartBtn');
        const changeThemeBtn = document.getElementById('changeThemeBtn');

        // Initialisation
        document.addEventListener('DOMContentLoaded', () => {
            // Sélection de thème
            themeCards.forEach(card => {
                card.addEventListener('click', () => {
                    themeCards.forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    currentTheme = card.dataset.theme;
                });
            });

            // Démarrer le quiz
            startQuizBtn.addEventListener('click', () => {
                if (currentTheme) {
                    startQuiz();
                } else {
                    alert('Veuillez sélectionner un thème');
                }
            });

            // Navigation
            prevBtn.addEventListener('click', showPreviousQuestion);
            nextBtn.addEventListener('click', showNextQuestion);
            restartBtn.addEventListener('click', restartQuiz);
            changeThemeBtn.addEventListener('click', changeTheme);
        });

        // Démarrer le quiz
        function startQuiz() {
            // Mélanger les questions pour ce thème
            currentQuestions = [...quizData[currentTheme]];
            shuffleArray(currentQuestions);
            
            // Réinitialiser les variables
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            scoreElement.textContent = score;
            totalQuestionsElement.textContent = currentQuestions.length;
            
            // Afficher l'écran du quiz
            themeScreen.classList.remove('active');
            quizScreen.classList.add('active');
            
            // Afficher la première question
            showQuestion();
        }

        // Afficher une question
        function showQuestion() {
            const question = currentQuestions[currentQuestionIndex];
            questionText.textContent = question.question;
            currentQuestionElement.textContent = currentQuestionIndex + 1;
            
            // Effacer les options précédentes
            optionsContainer.innerHTML = '';
            
            // Créer les options
            const letters = ['A', 'B', 'C', 'D'];
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.classList.add('option');
                optionElement.dataset.index = index;
                
                optionElement.innerHTML = `
                    <div class="option-letter">${letters[index]}</div>
                    <div class="option-text">${option}</div>
                `;
                
                optionElement.addEventListener('click', () => selectOption(optionElement, index));
                optionsContainer.appendChild(optionElement);
            });
            
            // Réinitialiser le feedback
            feedbackElement.textContent = '';
            feedbackElement.className = 'feedback';
            
            // Mettre à jour le bouton précédent
            prevBtn.disabled = currentQuestionIndex === 0;
            
            // Réinitialiser le timer
            resetTimer();
            startTimer();
        }

        // Sélectionner une option
        function selectOption(optionElement, optionIndex) {
            // Si une option est déjà sélectionnée, on ne fait rien
            if (selectedOption !== null) return;
            
            // Désélectionner toutes les options
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Sélectionner l'option choisie
            optionElement.classList.add('selected');
            selectedOption = optionIndex;
            
            // Vérifier la réponse
            const question = currentQuestions[currentQuestionIndex];
            const isCorrect = optionIndex === question.correct;
            
            // Mettre à jour l'interface
            optionElement.classList.add(isCorrect ? 'correct' : 'incorrect');
            feedbackElement.textContent = isCorrect 
                ? 'Bonne réponse! ✅' 
                : `Mauvaise réponse! La bonne réponse était: ${question.options[question.correct]}`;
            feedbackElement.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            // Mettre à jour le score
            if (isCorrect) {
                score++;
                scoreElement.textContent = score;
            }
            
            // Enregistrer la réponse de l'utilisateur
            userAnswers[currentQuestionIndex] = {
                question: question.question,
                userAnswer: optionIndex,
                correctAnswer: question.correct,
                isCorrect: isCorrect
            };
            
            // Arrêter le timer
            clearInterval(timer);
            
            // Activer le bouton suivant
            nextBtn.disabled = false;
        }

        // Timer
        function startTimer() {
            timeLeft = 10;
            timerElement.textContent = timeLeft;
            timerElement.parentElement.className = 'timer-container';
            
            timer = setInterval(() => {
                timeLeft--;
                timerElement.textContent = timeLeft;
                
                // Mettre à jour le style du timer
                if (timeLeft <= 5) {
                    timerElement.parentElement.classList.add('warning');
                }
                if (timeLeft <= 3) {
                    timerElement.parentElement.classList.remove('warning');
                    timerElement.parentElement.classList.add('danger');
                }
                
                // Si le temps est écoulé
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    handleTimeUp();
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(timer);
            timeLeft = 10;
            timerElement.textContent = timeLeft;
            timerElement.parentElement.className = 'timer-container';
        }

        function handleTimeUp() {
            // Enregistrer que l'utilisateur n'a pas répondu
            userAnswers[currentQuestionIndex] = {
                question: currentQuestions[currentQuestionIndex].question,
                userAnswer: null,
                correctAnswer: currentQuestions[currentQuestionIndex].correct,
                isCorrect: false
            };
            
            // Afficher la bonne réponse
            const options = document.querySelectorAll('.option');
            const correctIndex = currentQuestions[currentQuestionIndex].correct;
            options[correctIndex].classList.add('correct');
            
            // Afficher un feedback
            feedbackElement.textContent = 'Temps écoulé! ⏱';
            feedbackElement.classList.add('incorrect');
            
            // Activer le bouton suivant
            nextBtn.disabled = false;
        }

        // Navigation
        function showNextQuestion() {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                selectedOption = null;
                showQuestion();
            } else {
                showResults();
            }
        }

        function showPreviousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                selectedOption = null;
                showQuestion();
                
                // Afficher la réponse précédente si elle existe
                if (userAnswers[currentQuestionIndex] !== undefined) {
                    const userAnswer = userAnswers[currentQuestionIndex];
                    const options = document.querySelectorAll('.option');
                    
                    options[userAnswer.userAnswer]?.classList.add(userAnswer.isCorrect ? 'correct' : 'incorrect');
                    options[userAnswer.correctAnswer]?.classList.add('correct');
                    
                    if (userAnswer.userAnswer !== null) {
                        options[userAnswer.userAnswer]?.classList.add('selected');
                    }
                    
                    feedbackElement.textContent = userAnswer.isCorrect 
                        ? 'Bonne réponse! ✅' 
                        : userAnswer.userAnswer === null 
                            ? 'Temps écoulé! ⏱' 
                            : `Mauvaise réponse! La bonne réponse était: ${currentQuestions[currentQuestionIndex].options[userAnswer.correctAnswer]}`;
                    
                    feedbackElement.className = 'feedback';
                    feedbackElement.classList.add(userAnswer.isCorrect ? 'correct' : 'incorrect');
                }
            }
        }

        // Afficher les résultats
        function showResults() {
            quizScreen.classList.remove('active');
            resultsScreen.classList.add('active');
            
            finalScoreElement.textContent = score;
            maxScoreElement.textContent = currentQuestions.length;
            
            // Message de résultat
            const percentage = (score / currentQuestions.length) * 100;
            let message = '';
            
            if (percentage >= 90) {
                message = 'Excellent travail! Vous êtes un expert du Togo!';
            } else if (percentage >= 70) {
                message = 'Très bien! Vous connaissez bien le Togo.';
            } else if (percentage >= 50) {
                message = 'Bon effort! Vous avez des connaissances sur le Togo.';
            } else {
                message = 'Continuez à apprendre! Le Togo a beaucoup à offrir.';
            }
            
            scoreMessageElement.textContent = message;
            
            // Détails des réponses
            resultsDetails.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];
            
            userAnswers.forEach((answer, index) => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                
                const questionText = document.createElement('div');
                questionText.classList.add('result-question');
                questionText.textContent = `${index + 1}. ${answer.question}`;
                
                const answerText = document.createElement('div');
                answerText.classList.add('result-answer');
                answerText.classList.add(answer.isCorrect ? 'correct' : 'incorrect');
                
                if (answer.userAnswer === null) {
                    answerText.textContent = 'Non répondu';
                } else {
                    const correctOption = currentQuestions[index].options[answer.correctAnswer];
                    answerText.textContent = answer.isCorrect 
                        ? `Correct: ${correctOption}` 
                        : `Votre réponse: ${currentQuestions[index].options[answer.userAnswer]} | Correct: ${correctOption}`;
                }
                
                const icon = document.createElement('div');
                icon.classList.add('result-icon');
                icon.classList.add(answer.isCorrect ? 'correct' : 'incorrect');
                icon.innerHTML = answer.isCorrect ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>';
                
                resultItem.appendChild(icon);
                resultItem.appendChild(questionText);
                resultItem.appendChild(answerText);
                
                resultsDetails.appendChild(resultItem);
            });
        }

        // Recommencer le quiz
        function restartQuiz() {
            resultsScreen.classList.remove('active');
            quizScreen.classList.add('active');
            
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            selectedOption = null;
            
            scoreElement.textContent = score;
            
            showQuestion();
        }

        // Changer de thème
        function changeTheme() {
            resultsScreen.classList.remove('active');
            themeScreen.classList.add('active');
        }

        // Fonctions utilitaires
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }