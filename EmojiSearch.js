import React, { useState } from 'react'
 const emojiData = [
    {
        id : 1,
        symbol : "😄",
        name : " smile",
    },
    {
        id : 2,
        symbol : "😍",
        name : " Crush",
    },
    {
        id : 3,
        symbol : "😡",
        name : " angry",
    },
    {
        id : 4,
        symbol : "🥳",
        name : "party ",
    },
    {
        id : 5,
        symbol : "😘",
        name : "kiss ",
    },
    {
        id : 6,
        symbol : "😴",
        name : "slepping face ",
    },
    {
        id : 7,
        symbol : "😭",
        name : "crying  ",
    },
    {
        id : 8,
        symbol : "🐒",
        name : " monkey",
    },
    {
        id : 9,
        symbol : "🍎",
        name : "apple ",
    },
    {
        id : 10,
        symbol : "❤️",
        name : "love ",
    },
    {
        id : 11,
        symbol : "🦍",
        name : "Hema Dasari",
    },
    {
        id : 12,
        symbol : "🐖",
        name : "Ramesh Andey ",
    },
    {
        id : 13,
        symbol : "",
        name : " yedhava ",
    },
    {
        id : 13,
        symbol : "🐹",
        name : "Raji Dusanapudi ",
    },
    {
        id : 14,
        symbol : "🦣",
        name : "Vidya karna ",
    },
    {
        id : 1,
        symbol : "",
        name : " ",
    },

 ]
function EmojiSearch() {
      const [searchEmoji,setSearchEmoji] = useState("")
      const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
      }
       const showEmoji = emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
       });
      
      return (
    <div>
    <h1>React Emoji App!!</h1>
    <input type="text" placeholder='Search for the emoji....' value={searchEmoji} onChange={handleChange} />
    <div>
       { showEmoji.map((emoji)=>emoji.symbol)}
    </div>
    </div>
      );
}

export default EmojiSearch;