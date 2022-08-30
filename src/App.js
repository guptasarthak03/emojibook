import React, { useEffect, useState } from 'react';
import './app.css';

const App = () => {
  const emojiDict = {
    '😊': 'Happy Face',
    '😂': 'LOL',
    '😎': 'Cool, Savage',
    '😅': 'nervous smile, awkward smile',
  };

  const defaultOutput = {
    title: 'Translation will come here 👇',
    emoji: '...',
  };

  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState({
    title: '',
    emoji: '',
  });

  const onInputChange = e => {
    const userInput = e.target.value;

    setInputValue(userInput);
    translateEmoji(userInput);
  };

  const translateEmoji = userInput => {
    const output = emojiDict[userInput] || 'No Matches Found';
    setOutputValue({ ...outputValue, title: output, emoji: userInput });
  };

  useEffect(() => {
    console.log(outputValue);
  });

  return (
    <div>
      <header>
        <p> EmojiBook - know your emoji's 😎</p>;
      </header>
      <main className="main">
        <input
          className="emoji-input"
          maxLength={2}
          value={inputValue}
          onChange={onInputChange}
          placeholder="Enter your emoji here.  example:😊"
        ></input>
        <div className="emoji-output-container">
          <p className="emoji-meaning">
            {inputValue ? outputValue.title : defaultOutput.title}
          </p>
          <p className="emoji-output">
            {outputValue.emoji || defaultOutput.emoji}
          </p>
        </div>
      </main>
      {/* <footer className="footer">
        <div className="footer-container">
          <p className="footer-heading">About</p>
          <p className="footer-body">
            EmojiBook aims to help you in replacing your daily repitative words
            with the emojis. So next time you find yourself looking at an emoji,
            and wondering where you might be using it ? check out EmojiBook 🤩✌
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default App;
