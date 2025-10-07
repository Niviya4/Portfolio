import myPhoto from "../assets/WhatsApp Image 2024-12-19 at 12.51.11 PM.jpg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    const img = document.querySelector(".hero-image img");

    const handleScroll = () => {
      if (!img) return;
      const rotate = window.scrollY * 0.3;
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

           
            <Link to="/projects" className="view-work-btn">
              <span>View My Work</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="arrow-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
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
