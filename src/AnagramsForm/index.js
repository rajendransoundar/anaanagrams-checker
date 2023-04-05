import React, { useState } from 'react';
import "./style.css"

export default function AnagramChecker() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [isAnagram, setIsAnagram] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function checkAnagram() {
    if (word1.length !== word1.length) {
        return false;
      }
   
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');
    setIsAnagram(sortedWord1 === sortedWord2);
    setSubmitted(true);
  }


  return (
    <>
    <div className='main-container'>
        <div className='anagram-form'>
            <h1>Anagrams Checker</h1>
<p>Word1:</p>
        <input type="text" value={word1} onChange={(e) => setWord1(e.target.value)} />
        <p>Word2:</p>
        <input type="text" value={word2} onChange={(e) => setWord2(e.target.value)} />
        <p></p>
      <button onClick={checkAnagram}>Check Anagram</button>
      {submitted && isAnagram && <h3 className='green'>{word1} and {word2} are anagrams!</h3>}
      {submitted && !isAnagram && <h3 className='red'>{word1} and {word2} are not anagrams.</h3>}
      </div>
    </div>
    </>
  );
}
