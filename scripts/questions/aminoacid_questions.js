const aminoAcidQuestions = [
    {
      question: "What amino acid is this?",
      image: "images/question_images/biochemistry/aminoAcids/arginine_pubchem.png", // Path to the image
      answers: [
        { text: "Glutamine", correct: false },
        { text: "Tryptophan", correct: false },
        { text: "Tyrosine", correct: false },
        { text: "Arginine", correct: true },
      ]
    },
    {
      question: "Which amino acid has the side chain with the highest pKa value?",
      answers: [
        { text: "Arginine", correct: true },
        { text: "Histidine", correct: false },
        { text: "Lysine", correct: false },
        { text: "Glutamate", correct: false },
      ]
    },
    {
      question: "What amino acid is this?",
      image: "images/question_images/biochemistry/aminoAcids/phenylalanine_pubchem.png", // Path to the image
      answers: [
        { text: "Tyrosine", correct: false },
        { text: "Phenylalanine", correct: true },
        { text: "Tryptophan", correct: false },
        { text: "Histidine", correct: false },
      ]
    },
    {
      question: "Which amino acid has the shortest side chain?",
      answers: [
        { text: "Glycine", correct: true },
        { text: "Alanine", correct: false },
        { text: "Serine", correct: false },
        { text: "Valine", correct: false },
      ]
    },
    {
      question: "Which amino acid has a hydroxyl group in its side chain?",
      answers: [
        { text: "Leucine", correct: false },
        { text: "Methionine", correct: false },
        { text: "Serine", correct: true },
        { text: "Proline", correct: false },
      ]
    },
    {
      question: "What is the pKa value of the carboxyl group in amino acids?",
      answers: [
        { text: "Around 4.0", correct: false },
        { text: "Around 6.0", correct: false },
        { text: "Around 2.0", correct: true },
        { text: "Around 8.0", correct: false },
      ]
    },
    {
      question: "What amino acid is this?",
      image: "images/question_images/biochemistry/aminoAcids/tyrosine_pubchem.png", // Path to the image
      answers: [
        { text: "Phenylalanine", correct: false },
        { text: "Tyrosine", correct: true },
        { text: "Tryptophan", correct: false },
        { text: "Histidine", correct: false },
      ]
    },
    {
      question: "Which amino acid is a sulfur-containing amino acid?",
      answers: [
        { text: "Threonine", correct: false },
        { text: "Asparagine", correct: false },
        { text: "Glutamine", correct: false },
        { text: "Cysteine", correct: true },
      ]
    },
    {
      question: "Which amino acid has a side chain that can form disulfide bonds?",
      answers: [
        { text: "Methionine", correct: false },
        { text: "Alanine", correct: false },
        { text: "Valine", correct: false },
        { text: "Cysteine", correct: true },
      ]
    },
    {
      question: "What amino acid is this?",
      image: "images/question_images/biochemistry/aminoAcids/methionine_pubchem.png", // Path to the image
      answers: [
        { text: "Cysteine", correct: false },
        { text: "Methionine", correct: true },
        { text: "Serine", correct: false },
        { text: "Threonine", correct: false },
      ]
    }
  ];
  
  loadQuestions(aminoAcidQuestions);