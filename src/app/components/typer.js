import React, { useState, useEffect } from "react";

const Typer = () => {
  const typerList = ["Harsh", "Web Developer", "MERN Enthusiast", "Open to Exciting Projects and Work Opportunities"];
  const [typerContent, setTyperContent] = useState("");

  const letterTypingTime = 100;
  const letterUnTypingTime = 30;
  const phraseRetainTime = 1000;

  const typeAndUntype = async (phrase) => {
    for (let i = 0; i <= phrase.length; i++) {
      setTyperContent(phrase.slice(0, i) + "|");
      await sleep(letterTypingTime);
    }

    await sleep(phraseRetainTime);

    for (let i = phrase.length; i >= 0; i--) {
      setTyperContent(phrase.slice(0, i) + "|");
      await sleep(letterUnTypingTime);
    }
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    let currentPhraseIndex = 0;

    const animateTyper = async () => {
      if (currentPhraseIndex === 0) {
        // Initial typing of "Harsh"
        await typeAndUntype(typerList[0]);
      } else {
        const nextPhraseIndex = currentPhraseIndex % typerList.length;
        const nextPhrase = typerList[nextPhraseIndex];

        await typeAndUntype(nextPhrase);
      }

      currentPhraseIndex++;
      requestAnimationFrame(animateTyper);
    };

    animateTyper();

    return () => cancelAnimationFrame(animateTyper);
  }, []); // Run useEffect only once

  return <div id="typer-content">{typerContent}</div>;
};

export default Typer;
