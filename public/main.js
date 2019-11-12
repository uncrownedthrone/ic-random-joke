const qs = e => document.querySelector(e);

let jokeData;

const getJoke = async () => {
  console.log("going out to api");
  qs(".punchline").textContent = "";
  const resp = await fetch("https://official-joke-api.appspot.com/random_joke");
  console.log("back from api");
  console.log(resp);
  jokeData = await resp.json();
  console.log(jokeData);
  displayData(jokeData);
};

const displayData = jokeData => {
  qs(".setup").textContent = jokeData.setup;
};

const revealPunchline = () => {
  qs(".punchline").textContent = jokeData.punchline;
};

qs(".tellMeAJoke").addEventListener("click", getJoke);
qs(".revealPunchline").addEventListener("click", revealPunchline);
