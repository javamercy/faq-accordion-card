const angels = document.querySelectorAll(".angel");
const contents = document.querySelectorAll(".content");
const questions = document.querySelectorAll(".question");
const rightCard = document.querySelector(".card-right");
let unWrappedContent = null;
let boldedQuestion = null;

rightCard.addEventListener("click", (e) => {
  let element = e.target;

  if (element.classList.contains("question")) {
    element = element.nextElementSibling;
  }

  if (element.classList.contains("fa-solid")) {
    element = element.parentElement;
  }

  if (element.className === "angel") {
    showContent(element);
    changeAngelsToDown(element);
    wrapContents();
    unboldQuestions();
  }
});

function showContent(element) {
  const content = element.parentElement.parentElement.lastElementChild;
  unWrappedContent = content;
  content.classList.toggle("d-block");

  changeAngel(element);

  const question = element.parentElement.firstElementChild;
  boldedQuestion = question;
  question.classList.toggle("bold-question");
}

function wrapContents() {
  contents.forEach((content) => {
    if (content !== unWrappedContent && content.classList.contains("d-block")) {
      content.classList.remove("d-block");
    }
  });
}

function unboldQuestions() {
  questions.forEach((question) => {
    if (
      question !== boldedQuestion &&
      question.classList.contains("bold-question")
    ) {
      question.classList.remove("bold-question");
    }
  });
}

function changeAngelsToDown(angel) {
  angels.forEach((ang) => {
    if (ang !== angel) {
      ang.firstElementChild.className = "fa-solid fa-angle-down";
    }
  });
}

function changeAngel(angel) {
  if (angel.firstElementChild.className == "fa-solid fa-angle-down") {
    angel.firstElementChild.className = "fa-solid fa-angle-up";
  } else {
    angel.firstElementChild.className = "fa-solid fa-angle-down";
  }
}
