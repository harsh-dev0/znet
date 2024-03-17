import React, { useState, useEffect } from "react";

const Typer = () => {
  const typerList = ["Harsh Pal", "Web Developer", "MERN Enthusiast", "Open to Work"];
  const [typerContent, setTyperContent] = useState("");

  const letterTypingTime = 60;
  const phraseRetainTime = 1200;
  const maxGibberishLength = 5; // Adjusting the maximum gibberish length as needed

  const typeAndShowGibberish = async (phrase) => {
    for (let i = 0; i <= phrase.length; i++) {
      const randomGibberish = generateRandomGibberish(phrase.length - i, maxGibberishLength);
      setTyperContent(phrase.slice(0, i) + randomGibberish + "|");
      await sleep(letterTypingTime);
    }

    await sleep(phraseRetainTime);
  };

  const generateRandomGibberish = (length, maxLength) => {
    const characters = "!@#$%^&*()_-+=[]{}|;:'\",.<>/?1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomString = "";

    for (let i = 0; i < Math.min(length, maxLength); i++) {
      randomString += characters[Math.floor(Math.random() * characters.length)];
    }

    return randomString;
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let currentPhraseIndex = 0;

    const animateTyper = async () => {
      const nextPhraseIndex = currentPhraseIndex % typerList.length;
      const nextPhrase = typerList[nextPhraseIndex];

      await typeAndShowGibberish(nextPhrase);

      currentPhraseIndex++;
      requestAnimationFrame(animateTyper);
    };

    animateTyper();

    return () => cancelAnimationFrame(animateTyper);
  }, []); // Running useEffect only once

  return <div id="typer-content">{typerContent}</div>;
};

export default Typer;
