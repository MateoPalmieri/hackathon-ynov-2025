const quizData = [
    {
      question: "Tu veux manger des fraises en hiver. Que te suggère l'IA ?",
      choices: [
        { text: "Acheter des fraises importées du Pérou", correct: false, co2: 300,
          explanation: "Importer des fraises du Pérou génère beaucoup d'émissions de CO₂ dues au transport longue distance." },
        { text: "Attendre la saison locale ou choisir un fruit de saison", correct: true, co2: -200,
          explanation: "Choisir un fruit de saison évite les transports et favorise une consommation durable." },
        { text: "Les cultiver sous serre chauffée", correct: false, co2: 250,
          explanation: "Les serres chauffées consomment beaucoup d'énergie, ce qui augmente l'empreinte carbone." }
      ]
    },
    {
      question: "Tu as une vieille ampoule. Que recommande l'IA ?",
      choices: [
        { text: "La jeter directement à la poubelle", correct: false, co2: 100,
          explanation: "Jeter une ampoule sans recyclage gaspille des ressources et pollue." },
        { text: "La remplacer par une LED basse consommation", correct: true, co2: -150,
          explanation: "Les LED consomment moins d'électricité et durent plus longtemps, réduisant le CO₂." },
        { text: "La laisser en place tant qu'elle fonctionne", correct: false, co2: 50,
          explanation: "Les vieilles ampoules consomment plus d'énergie, augmentant la consommation électrique." }
      ]
    },
    {
      question: "Tu veux aller au travail. L’IA t’analyse et propose :",
      choices: [
        { text: "Covoiturage selon ton trajet et ceux proches", correct: true, co2: -180,
          explanation: "Le covoiturage réduit le nombre de véhicules sur la route, diminuant les émissions." },
        { text: "Taxi seul pour plus de confort", correct: false, co2: 200,
          explanation: "Prendre un taxi seul augmente considérablement les émissions de CO₂ par personne." },
        { text: "Acheter une nouvelle voiture électrique", correct: false, co2: 100,
          explanation: "Acheter une nouvelle voiture a un coût carbone important lié à sa fabrication." }
      ]
    },
    {
      question: "Tu dois laver ton linge. L'IA recommande :",
      choices: [
        { text: "Utiliser un programme à 90°C pour tout", correct: false, co2: 180,
          explanation: "Laver à haute température consomme beaucoup d'énergie." },
        { text: "Lancer une machine à basse température et pleine", correct: true, co2: -120,
          explanation: "Laver à basse température et à pleine charge économise de l'énergie et de l'eau." },
        { text: "Laver chaque type de vêtement séparément", correct: false, co2: 100,
          explanation: "Laver trop souvent avec de petites charges gaspille des ressources." }
      ]
    },
    {
      question: "Pour chauffer ton logement, l’IA suggère :",
      choices: [
        { text: "Isoler ton logement et baisser légèrement le chauffage", correct: true, co2: -200,
          explanation: "L'isolation réduit la perte de chaleur, ce qui diminue la consommation d'énergie." },
        { text: "Utiliser un radiateur d’appoint en permanence", correct: false, co2: 150,
          explanation: "Les radiateurs d’appoint consomment beaucoup d'électricité sur la durée." },
        { text: "Laisser les fenêtres entrouvertes pour l’air frais", correct: false, co2: 80,
          explanation: "Laisser les fenêtres ouvertes fait fuir la chaleur, augmentant le chauffage nécessaire." }
      ]
    },
    {
      question: "Tu veux acheter un nouvel appareil électronique. Que dit l'IA ?",
      choices: [
        { text: "Choisir un modèle reconditionné", correct: true, co2: -100,
          explanation: "Le reconditionné évite la fabrication d'un nouvel appareil, limitant l'impact environnemental." },
        { text: "Prendre le plus récent avec les meilleures performances", correct: false, co2: 200,
          explanation: "Les appareils neufs ont un coût environnemental élevé lié à leur production." },
        { text: "En acheter deux pour être tranquille", correct: false, co2: 250,
          explanation: "Acheter en double gaspille des ressources et augmente l'empreinte carbone." }
      ]
    },
    {
      question: "Que recommande l’IA pour les déplacements courts ?",
      choices: [
        { text: "Utiliser un vélo ou marcher", correct: true, co2: -90,
          explanation: "Le vélo et la marche ne génèrent quasiment aucune émission de CO₂." },
        { text: "Prendre la voiture pour gagner du temps", correct: false, co2: 120,
          explanation: "Utiliser la voiture pour de courts trajets augmente inutilement la pollution." },
        { text: "Utiliser un scooter thermique", correct: false, co2: 130,
          explanation: "Les scooters thermiques consomment des carburants fossiles et polluent." }
      ]
    },
    {
      question: "Tu reçois beaucoup de mails inutiles. L’IA te conseille :",
      choices: [
        { text: "Supprimer régulièrement les emails inutiles", correct: true, co2: -30,
          explanation: "Supprimer les mails réduit la charge sur les serveurs et la consommation énergétique." },
        { text: "Les ignorer, ce n'est pas grave", correct: false, co2: 40,
          explanation: "Ignorer les mails inutiles ne réduit pas leur impact énergétique." },
        { text: "Les imprimer pour trier à la main", correct: false, co2: 70,
          explanation: "Imprimer consomme du papier et de l'énergie, ce qui augmente le CO₂." }
      ]
    },
    {
      question: "Quel usage de l’IA favorise un comportement éco-responsable ?",
      choices: [
        { text: "Optimiser la consommation d'énergie à la maison", correct: true, co2: -150,
          explanation: "Optimiser l'énergie réduit la consommation et les émissions." },
        { text: "Planifier des voyages en avion moins chers", correct: false, co2: 180,
          explanation: "Les voyages en avion sont très polluants, même s'ils sont économiques." },
        { text: "Rechercher les produits les plus à la mode", correct: false, co2: 120,
          explanation: "La mode rapide favorise la surconsommation et la pollution." }
      ]
    },
    {
      question: "Quel comportement numérique l’IA déconseille ?",
      choices: [
        { text: "Laisser ses appareils en veille constamment", correct: true, co2: 100,
          explanation: "La veille consomme de l'électricité inutilement." },
        { text: "Éteindre son ordinateur quand il n’est pas utilisé", correct: false, co2: -80,
          explanation: "Éteindre économise de l'énergie et réduit les émissions." },
        { text: "Utiliser un navigateur éco-conçu", correct: false, co2: -60,
          explanation: "Les navigateurs éco-conçus optimisent la consommation des ressources." }
      ]
    }
  ];

  let currentQuestion = 0;
  let totalCO2 = 0;

  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const resultEl = document.getElementById('result');
  const scoreDisplay = document.getElementById('score-display');
  const finalResult = document.getElementById('final-result');
  const retryBtn = document.getElementById('retry-btn');
  const nextBtn = document.getElementById('next-btn');

  const maxScore = quizData.reduce((acc, q) => {
    let minCO2 = Math.min(...q.choices.map(c => c.co2));
    return acc + minCO2;
  }, 0);

  function updateScoreDisplay() {
    scoreDisplay.textContent = `Consommation de CO₂ : ${totalCO2}g`;
  }

  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = '';
    resultEl.textContent = '';
    finalResult.textContent = '';
    retryBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    updateScoreDisplay();

    q.choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.textContent = choice.text;
      btn.onclick = () => selectAnswer(choice);
      choicesEl.appendChild(btn);
    });
  }

  function selectAnswer(choice) {
    totalCO2 += choice.co2;
    document.querySelectorAll('#choices button').forEach(btn => btn.disabled = true);

    if (choice.correct) {
      resultEl.innerHTML = `✅ Bonne réponse ! CO₂ évité : ${Math.abs(choice.co2)}g<br><em>${choice.explanation}</em>`;
      resultEl.style.color = '#388e3c';
    } else {
      resultEl.innerHTML = `❌ Mauvaise réponse. CO₂ généré : ${choice.co2}g<br><em>${choice.explanation}</em>`;
      resultEl.style.color = '#d32f2f';
    }

    updateScoreDisplay();
    nextBtn.style.display = 'inline-block';
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz terminé !";
      choicesEl.innerHTML = '';
      resultEl.textContent = '';
      finalResult.innerHTML = `Total CO₂ : ${totalCO2}g<br>Score idéal (CO₂ minimal possible) : ${maxScore}g<br>Merci d'avoir joué et réfléchi avec l'IA !`;
      retryBtn.style.display = 'inline-block';
      nextBtn.style.display = 'none';
    }
  }

  function restartQuiz() {
    currentQuestion = 0;
    totalCO2 = 0;
    loadQuestion();
  }

  loadQuestion();