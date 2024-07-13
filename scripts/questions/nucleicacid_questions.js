const nucleicAcidQuestions = [
    {
      question: "What is the base pair for Adenine in DNA?",
      image: "", // No image for this question
      answers: [
        { text: "Cytosine", correct: false },
        { text: "Thymine", correct: true },
        { text: "Guanine", correct: false },
        { text: "Uracil", correct: false },
      ]
    },
    {
      question: "What is the strongest bond holding the two strands of DNA together?",
      image: "", // No image for this question
      answers: [
        { text: "Ionic Bonds", correct: false },
        { text: "Hydrogen Bonds", correct: true },
        { text: "Covalent Bonds", correct: false },
        { text: "Van der Waals Forces", correct: false },
      ]
    },
    {
      question: "Identify the structure shown.",
      image: "images/question_images/biochemistry/nucleicAcids/adenine_pubchem.png", // Path to the image
      answers: [
        { text: "Thymine", correct: false },
        { text: "Guanine", correct: false },
        { text: "Adenine", correct: true },
        { text: "Cytosine", correct: false },
      ]
    },
    {
        question: "How many hydrogen bonds form between Adenine and Thymine?",
        image: "", // No image for this question
        answers: [
          { text: "Two", correct: true },
          { text: "Three", correct: false },
          { text: "Four", correct: false },
          { text: "One", correct: false },
        ]
      },
    {
      question: "Identify the structure shown.",
      image: "images/question_images/biochemistry/nucleicAcids/thymine_pubchem.png", // Path to the image
      answers: [
        { text: "Uracil", correct: false },
        { text: "Adenine", correct: false },
        { text: "Guanine", correct: false },
        { text: "Thymine", correct: true },
      ]
    },
    {
      question: "Which nucleotide is found in RNA but not in DNA?",
      image: "", // No image for this question
      answers: [
        { text: "Thymine", correct: false },
        { text: "Adenine", correct: false },
        { text: "Uracil", correct: true },
        { text: "Guanine", correct: false },
      ]
    },
    {
      question: "Identify the structure shown.",
      image: "images/question_images/biochemistry/nucleicAcids/guanine_pubchem.png", // Path to the image
      answers: [
        { text: "Cytosine", correct: false },
        { text: "Adenine", correct: false },
        { text: "Guanine", correct: true },
        { text: "Thymine", correct: false },
      ]
    },
    {
      question: "What is the base pair for Cytosine in DNA?",
      image: "", // No image for this question
      answers: [
        { text: "Thymine", correct: false },
        { text: "Guanine", correct: true },
        { text: "Adenine", correct: false },
        { text: "Uracil", correct: false },
      ]
    },
    {
      question: "Identify the structure shown.",
      image: "images/question_images/biochemistry/nucleicAcids/uracil_pubchem.png", // Path to the image
      answers: [
        { text: "Uracil", correct: true },
        { text: "Thymine", correct: false },
        { text: "Adenine", correct: false },
        { text: "Guanine", correct: false },
      ]
    },
    {
      question: "What is the primary function of nucleic acids?",
      image: "", // No image for this question
      answers: [
        { text: "Provide energy for cellular processes", correct: false },
        { text: "Serve as enzymes", correct: false },
        { text: "Store and transmit genetic information", correct: true },
        { text: "Provide structural support to cells", correct: false },
      ]
    }
  ];
  loadQuestions(nucleicAcidQuestions);
  