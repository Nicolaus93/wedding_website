document.addEventListener("DOMContentLoaded", (event) => {
  const textContainer = document.getElementById("textContainer");
  let totalDelay = 0; // Keeps track of the cumulative delay

  function createAndAnimateText(text, isHeader, delay, style) {
    const words = text.split(" ");
    const textElement = document.createElement(isHeader ? "h1" : "div");
    textContainer.appendChild(textElement);
    if (isHeader) {
      textElement.classList.add("animated-header");
    }

    words.forEach((word, index) => {
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word + " ";
      wordSpan.classList.add("animated-paragraph")
      textElement.appendChild(wordSpan);

      setTimeout(() => {
        for (const prop in style) {
            wordSpan.style[prop] = style[prop];
          }          
      }, delay + 100 * index);
    });

    // Update the total delay for the next text
    totalDelay += 100 * words.length;
  }

  textStyle = {
    opacity: 1,
    fontSize: "1.4em",
    lineHeight: 1.8,
    wordSpacing: "0.2em"
  };
  headerStyle = {
    opacity: 1,
    fontSize: "1.5em",
  };

  // Sequential calls with delays
  createAndAnimateText(
    "Nicolò & Anisa",
    true,
    totalDelay,
    headerStyle
  );
  createAndAnimateText(
    "Ma che ve dico, ahò, daje! Ma no 'o so', nun so' che dije... 'tacci! E che ve devo dì, trovasse sposati è 'na sensazione nova, che te fa sentire come... come se po dì, no 'o so'... te fa sentì proprio... strano! Eh! Te fa sentì strano!",
    false,
    totalDelay,
    textStyle
  );
  createAndAnimateText("Dove?", true, totalDelay, headerStyle);
  createAndAnimateText(
    "Palazzo Pecci, Via Giacomo Zamparelli, 82010 San Leucio Del Sannio, BN",
    false,
    totalDelay,
    textStyle
  );
  createAndAnimateText("Timeline", true, totalDelay, headerStyle);
  createAndAnimateText("More info coming soon, stay tuned!", false, totalDelay, textStyle);
});
