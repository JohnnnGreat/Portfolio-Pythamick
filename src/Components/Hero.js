import Pythamick from "./Pytha.png";
import Rec from "./interactions/Rec-Hero.svg";
import "./main.scss";

//Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
// import TiktokIcon from "@mui/icons-material/Tiktok";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero-intr">
          <div className="hello">
            <div className="i-line"></div>
            <h2 className="i-text">Hello</h2>
          </div>
          <div className="blur"></div>
          <h1
            className="text-one i-name"
            data-aos="fade-up"
            data-duration="1000"
          >
            I’m Ugorji Micheal.
          </h1>
          <p className="i-desc">
            <span>Ugorji Michael</span> a multitalented artist and storyteller.
            As a cinematographer, graphics designer, photographer, and writer,
            Ugorji brings a unique perspective and skill set to every project.
          </p>
          <div className="cv-lin">
            <a className="i-cv" href="#">
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-img">
          <img src={Pythamick} alt="This is pythamick hero image" />
        </div>
        {/* Social media icons */}
        <div className="sm-icons">
          <a href="#" target="_blank" rel="noopener">
            {" "}
            <FacebookIcon className="icons" />{" "}
          </a>
          <a href="#" target="_blank" rel="noopener">
            {" "}
            <EmailIcon className="icons" />{" "}
          </a>
          <a
            href="https://twitter.com/ugorjimichael?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <TwitterIcon className="icons" />{" "}
          </a>
          <a
            href="https://www.instagram.com/i_am_pythamick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <InstagramIcon className="icons" />{" "}
          </a>
          <a
            href="https://m.youtube.com/@I_am_Pythamick"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            {" "}
            <YouTubeIcon className="icons" />{" "}
          </a>
          <a
            href="https://www.tiktok.com/@i_am_pythamick?_t=8ajIvMENEbl&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <svg
              fill="#f8fd06"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25"
              height="25"
            >
              <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Big rectangle on hero section */}
      <img src={Rec} className="rec-hero" alt="" />

      {/* Micro interactions Hero page - one */}
      <svg
        className="micro-one"
        width="140"
        height="146"
        viewBox="0 0 140 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="68" cy="74" width="30" height="30" r="46" fill="#F8FD06" />
        <rect x="45" y="51" width="46" height="46" rx="9" fill="#171717" />
      </svg>
    </section>
  );
}
export default Hero;
