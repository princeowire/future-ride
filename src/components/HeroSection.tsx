import heroScooter from '../assets/hero-scooter.png';
import arrowRight from '../assets/arrow-right.svg';
import playBtn from '../assets/play-btn.svg';

const HeroSection = () => {
  return (
    <div className="hero-section">

      <div className="hero-container">

        <div className="hero-content">

          <div className="largetext">
            <h2>LET'S RIDE</h2>
            <h2>THE FUTURE.</h2>
          </div>

          <span className='line'></span>

          <p className='smalltext'>Simple and sleek design with users in mind.</p>

          <div className='buy-now'>
            <span>
              <img src={arrowRight} alt="" />
            </span>

            <p>Buy now</p>

            <p className='watch-it'>Watch our video how it works</p>

            <img src={playBtn} alt="" />
          </div>

        </div>

        <div className="hero-image">
          <img src={heroScooter} alt="" />
        </div>

      </div>

      <div className='features'>

        <div className='feat'>
          <span>
            <p className='val'>105</p>
            <p className='si-unit'>lbs</p>
          </span>

          <p className='metric'>New Weight</p>
        </div>

        <div className='feat'>
          <span>
            <p className='val'>26</p>
            <p className='si-unit'>mph</p>
          </span>

          <p className='metric'>New Weight</p>
        </div>

        <div className='feat'>
          <span>
            <p className='val'>38</p>
            <p className='si-unit'>miles</p>
          </span>

          <p className='metric'>New Weight</p>
        </div>

        <div className='feat'>
          <span>
            <p className='val'>89</p>
            <p className='si-unit'>nm</p>
          </span>

          <p className='metric'>New Weight</p>
        </div>

        <div className='feat'>
          <span>
            <p className='val'>22%</p>
            <p className='si-unit'>slope</p>
          </span>

          <p className='metric'>New Weight</p>
        </div>

        <div className='feat'>
          <span>
            <p className='val'>2×</p>
          </span>

          <p className='metric'>Hydralic Disk Brakes</p>
        </div>

      </div>

    </div>
  )
}

export default HeroSection
