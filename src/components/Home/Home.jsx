/* eslint-disable no-unused-vars */
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => {
    const slider = (
        <AutoplaySlider
          className="h-full pt-1"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={2000}
        >
          <div className="w-full h-full">
            <div
              className="hero min-h-screen h-full"
              style={{
                backgroundImage: "url(https://i.ibb.co/drJpcB4/html-system-website-concept.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="md:mb-5 text-xl md:text-3xl lg:text-5xl text-col0 font-bold">
                  Embark on a Journey of Innovation and Success with Raf-IT
                  </h1>
                  <p className="md:mb-5 lg:text-2xl md:text-lg text-sm">
                  At Raf-IT, We are More Than Developers; We are Architects of Transformation. Explore Our Suite of Services, Unleash Your Potential, and Redefine What is Possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div
              className="hero min-h-screen h-full"
              style={{
                backgroundImage: "url(https://i.ibb.co/jV2cqp6/programming-background-with-person-working-with-codes-computer.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="md:mb-5 text-xl md:text-3xl lg:text-5xl text-col0 font-bold">
                  Empowering Innovation, Driving Success: Welcome to Raf-IT, Where Ideas Come to Life.
                  </h1>
                  <p className="md:mb-5 lg:text-2xl md:text-lg text-sm">
                  Our Commitment to Excellence Drives Us to Build Tomorrows Technology Today, Setting You on a Path to Unprecedented Success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div
              className="hero min-h-screen h-full"
              style={{
                backgroundImage: "url(https://i.ibb.co/WcHj7xG/html-system-website-concept-1.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="md:mb-5 text-xl md:text-3xl lg:text-5xl text-col0 font-bold">
                  Your Dreams, Our Code: Raf-IT - Shaping Tomorrows Digital Landscape.
                  </h1>
                  <p className="md:mb-5 lg:text-2xl md:text-lg text-sm">
                  A Symphony of Skills, Vision, and Technology. Your Business Transformation Begins Here, Where We Code, Create, and Propel You Towards Unmatched Digital Excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AutoplaySlider>
    );
    return (
        <div>
            {slider}
        </div>
    );
};

export default Home;