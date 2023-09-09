import Finger from "../../app/assets/fingerup-hero.png";
import HeroVideo from "../../app/assets/hero-video.png";

const Hero = () => {
  return (
    <>
      <div className="relative  flex  justify-between">
        <span
          className=" absolute left-0  -z-10 h-4/5  w-full opacity-20"
          style={{ backgroundColor: "#FAFAFA" }}
        ></span>
        <div>
          <h1
            className=" mb-10 mt-60 text-7xl"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Show your Link
          </h1>
          <p className=" w-4/5  text-3xl font-semibold leading-normal">
            Watch prepaid bookings flow in
          </p>
          <span className=" absolute   left-80">
            <img src={Finger} alt="Finger" />
          </span>
        </div>
        <div>
          <img src={HeroVideo} alt="HeroVideo" className=" mt-32" />
        </div>
      </div>
      <div className=" mt-80">
        <form
          action=""
          className="  flex h-48 items-center border  border-solid border-gray-300 bg-white px-12 [&>input]:mr-2 "
          style={{
            filter: "drop-shadow(0px 15px 40px rgba(0, 0, 0, 0.05))",
            borderRadius: "25px",
          }}
        >
          <input
            type="text"
            className="  font-open-sans  h-16  w-80   rounded-full  text-center text-3xl text-base font-normal text-gray-600"
            placeholder="Consultify.ai/Reserve your link"
            style={{
              borderRadius: "8px",
              background: "#F5F4F8",
            }}
          />
          <input
            type="text"
            className="  font-open-sans  h-16  w-80  rounded-full  text-center text-3xl text-base font-normal text-gray-600"
            placeholder="Your Hourly Rate"
            style={{
              borderRadius: "8px",
              background: "#F5F4F8",
            }}
          />
          <input
            type="text"
            className="  font-open-sans  h-16  w-80  rounded-full  text-center text-3xl text-base font-normal text-gray-600"
            placeholder="Enter your email"
            style={{
              borderRadius: "8px",
              background: "#F5F4F8",
            }}
          />
          <button
            className="  font-open-sans h-16 w-64 p-5 text-center text-base text-lg  font-bold  text-white"
            style={{
              borderRadius: "8px",
              background: "#FBBB06",
            }}
          >
            Continue to Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Hero;
