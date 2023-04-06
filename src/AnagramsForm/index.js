import React, { useState } from "react";
import "./style.css";

export default function AnagramChecker() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [isAnagram, setIsAnagram] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function checkAnagram() {
    let cleanedWord1 = word1.replace(/\s/g, "").toLowerCase();
    let cleanedWord2 = word2.replace(/\s/g, "").toLowerCase();
    if (cleanedWord1.length !== cleanedWord2.length) {
      setIsAnagram(false);
    } else {
      const sortedWord1 = cleanedWord1.split("").sort().join("");
      const sortedWord2 = cleanedWord2.split("").sort().join("");
      setIsAnagram(sortedWord1 === sortedWord2);
    }
    setSubmitted(true);
  }

  return (
    <>
      <div className="main-container">
        <div className="anagram-form">
          <h1>Anagrams Checker</h1>
          <p>Word1:</p>
          <input
            type="text"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
          />
          <p>Word2:</p>
          <input
            type="text"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
          />
          <p></p>
          <button onClick={checkAnagram}>Check Anagram</button>
          {submitted && isAnagram && (
            <h3 className="green">
              {word1} and {word2} are anagrams!
            </h3>
          )}
          {submitted && !isAnagram && (
            <h3 className="red">
              *** {word1} and {word2} are not anagrams.
            </h3>
          )}
        </div>
      </div>
    </>
  );
}



// listen / silent
// race / care
// tired / tried
// evil / live
// debit card / bad credit
// dessert / stressed
// stop / pots
// angel / angle
// schoolmaster / the classroom
// conversation / voices rant on