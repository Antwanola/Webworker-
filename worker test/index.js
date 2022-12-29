const sumBtn = document.querySelector("#sum");
const coloursBtn = document.querySelector("#color");
const worker = new Worker("worker.js");

sumBtn.addEventListener("click", (event) => {
  worker.postMessage("Hellow Worker mi");
});

worker.onmessage = (sum) => {
  alert(`This is the overall Sum: ${sum.data}`);
};

coloursBtn.addEventListener("click", (event) => {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
