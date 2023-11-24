import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";

function App() {
  // Setting up the initial states using react hook 'useState'
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  // Function to fetch information on button
  // click, and set the data accordingly
  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }

  // Function to play and listen to the
  // phonetics of the searched word
  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="App">

<div id='header' ></div>

      <h1 id="main-title" className="main-heading">
        Free Dictionary
      </h1>
      <div className="searchBox">
        {/* Taking user input */}
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          id="search-input"
          className="input-field"
        />
        <button
          onClick={() => {
            getMeaning();
          }}
          className="search-button"
        >
          <FaSearch size="20px" />
        </button>
      </div>
      {data && (
        <div className="showResults">
          <h2 id="word-title" className="word-heading">
            {data.word}{" "}
            <button
              onClick={() => {
                playAudio();
              }}
              className="audio-button"
            >
              <FcSpeaker size="26px" />
            </button>
          </h2>
          <h4 className="part-of-speech-title">Parts of speech:</h4>
          <p className="part-of-speech">{data.meanings[0].partOfSpeech}</p>

          <h4 className="definition-title">Definition:</h4>
          <p className="definition">{data.meanings[0].definitions[0].definition}</p>

          <h4 className="example-title">Example:</h4>
          <p className="example">{data.meanings[0].definitions[0].example}</p>
        </div>
      )}
    </div>
  );
}

export default App;
