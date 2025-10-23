import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import d11 from "../assets/poems/dreams/11.png";
import d20 from "../assets/poems/dreams/20.png";
import d27 from "../assets/poems/dreams/27.png";
import d36 from "../assets/poems/dreams/36.png";
import d83 from "../assets/poems/dreams/83.png";
import d85 from "../assets/poems/dreams/85.png";
import d86 from "../assets/poems/dreams/86.png";


import w4 from "../assets/poems/women/4.png";
import w29 from "../assets/poems/women/29.png";
import w49 from "../assets/poems/women/49.png";
import w54 from "../assets/poems/women/54.png";
import w67 from "../assets/poems/women/67.png";

import f6 from "../assets/poems/faith/6.png";
import f15 from "../assets/poems/faith/15.png";
import f32 from "../assets/poems/faith/32.png";
import f33 from "../assets/poems/faith/33.png";
import f69 from "../assets/poems/faith/69.png";

import o40 from "../assets/poems/others/40.png";
import o42 from "../assets/poems/others/42.png";
import o47 from "../assets/poems/others/47.png";
import o50 from "../assets/poems/others/50.png";
import o52 from "../assets/poems/others/52.png";
import o60 from "../assets/poems/others/60.png";
import o71 from "../assets/poems/others/71.png";
import o79 from "../assets/poems/others/79.png";



export default function PoemBook() {
  const [category, setCategory] = useState("women");
  const bookRef = useRef();

  const poems = {
    women: [ w4, w29, w49, w54, w67],
    dreams: [d11, d20, d27, d36, d83, d85, d86],
    faith: [f6, f15, f32, f33, f69],
    others: [o40, o42, o47, o50, o52, o60, o71, o79],
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    
    setTimeout(() => {
      if (bookRef.current) bookRef.current.pageFlip().turnToPage(0);
    }, 100);
  };

  return (
    <div className="poem-wrapper">
      <h1 className="poem-title">Poems</h1>
      <p classsname="intro-text">
        Welcome to my Enchanted Shelf 🌸 <br></br> 
        Dive into the Forgotten Vault and here is your key <em>Ink & Insight</em>.
      </p>
      <div className="categories">
        {Object.keys(poems).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <HTMLFlipBook
        width={420}
        height={400}
        showCover
        className="poem-book"
        ref={bookRef}
      >
        {poems[category].map((img, i) => (
          <div key={i} className="poem-page">
            <img src={img} alt={`${category} ${i + 1}`} />
          </div>
          
        ))}
        
      </HTMLFlipBook>
        <div className="controls">
        <button onClick={() => bookRef.current.pageFlip().flipPrev()}>⬅ Prev</button>
        <button onClick={() => bookRef.current.pageFlip().flipNext()}>Next ➡</button>
      </div>
      
    </div>
  );
}
