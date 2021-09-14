import React, { useState } from "react";
import "./styles.css";

const songsDictionary = {
  "Arijit Singh": [
    { Song: "Tujhe Kitna Chahne Lage Hum", Movie: "kabir Singh" },
    { Song: "Jaan Nissar", Movie: "Kedarnath" },
    { Song: "Ek tu hi yar mera", Movie: "Pati patni aur woh" }
  ],
  "Shreya Ghosal": [
    { Song: "Yeh Ishq Hai", Movie: "Jab We Met" },
    { Song: "Hasi", Movie: "Hamari Adhuri Kahani" },
    { Song: "Teri meri", Movie: "Bodyguard" }
  ],
  "Sanam Puri": [
    { Song: "Yeh raat bheegi bheegi", Movie: "Chori Chori" },
    { Song: "Hai apna dil to awara", Movie: "Solva Saal" },
    { Song: "Lag jaa gale", Movie: "Woh jo hasina" }
  ],
  Avicii: [
    { Song: "The nights", Movie: "" },
    { Song: "I could be the one", Movie: "" },
    { Songs: "The day", Movie: "" }
  ],
  "Ellie Goulding": [
    { Song: "Love me like you do", Movie: "50 Shades of Grey" },
    { Song: "I know you care", Movie: "Now Is Good" },
    { Song: "Beating Heart", Movie: "Halcyon Days" }
  ]
};

var heading = "🎵 Good Music 🎵";
var subHeading = "Here are some good soothing musics of popular musicians.";

// console.log(musics[0][0].Song)
// var musician = "Arijit Singh"
// console.log(songsDictionary[musician][0].Song)
export default function App() {
  const [genrelist, setGenrelist] = useState("Arijit Singh");

  function onClickHandler(musician) {
    setGenrelist(musician);
  }

  return (
    <div className="App">
      <h1>{heading}</h1>
      <h4>{subHeading}</h4>
      <hr />
      {Object.keys(songsDictionary).map((musician) => {
        return (
          <button
            className="musicians"
            onClick={() => onClickHandler(musician)}
            key={musician}
          >
            {musician}
          </button>
        );
      })}
      <ul>
        {songsDictionary[genrelist].map((genre) => {
          return (
            <li className="musicList" key={genre.Song}>
              <div className="songDet">
                <span className="spanText">Song - </span>
                {genre.Song}
              </div>
              <div className="songDet">
                <span className="spanText">Movie - </span>
                {genre.Movie}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
