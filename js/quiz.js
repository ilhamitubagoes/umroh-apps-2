(function() {
  function buildQuiz() {
    // dibutuhkan untuk menaruh penyimpanan dari output HTML, atau bisa disebut variabel
    const output = [];

    // untuk setiap pertanyaan
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // digunakan untuk menyimpan daftar jawaban sementara, atau dihimpun kesemuanya
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...menambahkan tombol radio pada sebuah HTML
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      // menambahkan pertanyaan ini dan soal jawaban akan ditampilkan
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // untuk setiap pertanyaan
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // menemukan jawaban yang dipilih
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // jika jawabannya adalah benar
      if (userAnswer === currentQuestion.correctAnswer) {
        // tamabahan ke total jumlah jawaban benar
        numCorrect++;

        // warna hijau untuk jawaban
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // jika jawaban benar atau blank
        // warna jawaban merah
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    // menampilkan total jumlah jawaban benar
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  // mengambil beberapa id pada html menggunakan javascript untuk kemudian diubah nilainya
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();

// sebaiknya daftar pertanyaan diganti dengan data yang disimpan pada json atau pada tambahan kode di paling bawah
// fungsi buildquiz() digunakan untuk menampilkan tombol button secara iterasi
// fungsi showresults() digunakan ketika mengklik tombol di saat terakhir kali pertanyaan muncul