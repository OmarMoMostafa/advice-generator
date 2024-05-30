const adviceId = document.querySelector(".adv-id");
const advice = document.querySelector(".adv");
const btn = document.querySelector(".btn");

const apiURL = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  let res = await fetch(apiURL);
  let { slip } = await res.json();

  adviceId.innerHTML = `Advice #${slip.id}`;
  advice.innerHTML = `"${slip.advice}"`;
};

window.addEventListener("load", fetchAdvice);
btn.addEventListener("click", fetchAdvice);
