import myPhoto from "../assets/WhatsApp Image 2024-12-19 at 12.51.11 PM.jpg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const img = document.querySelector(".hero-image img");

    const handleScroll = () => {
      if (!img) return;
      const rotate = window.scrollY * 0.3; // rotation speed
      img.style.transform = `rotateY(${rotate}deg)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Just a Dreamer💭</h1>
            <p>CodeSmith · WordWeaver · Sunseeker</p>
            <a href="/projects" className="btn-primary">
              View My Work
            </a>
          </div>

          <div className="hero-image">
            <img src={myPhoto} alt="Niviya" />
          </div>
        </div>
        
      </section>

      <section className="hero-quote">
        <p>
          "In a world of code and creativity, I find my true self.
          Every line I write, every project I build, is a step towards my dreams."
        </p>
      </section>
    </>
  );
}
