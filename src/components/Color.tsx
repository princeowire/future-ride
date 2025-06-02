import colorScooter from '../assets/color-scooter.png'
import oneScooter from '../assets/one-scooter.png'
import twoScooter from '../assets/two-scooter.png'
import threeScooter from '../assets/three-scooter.png'
import fourScooter from '../assets/four-scooter.png'


const Color = () => {
  return (
    <div className='color'>
      <h3>Colors</h3>
      <p className="ftndtec">Checkout our products colors.</p>

      <div className="color-imgs">
        <div className='white-sco'>
          <img src={colorScooter} alt="" />
        </div>

        <div className="scoter-colors">
          <img src={oneScooter} alt="" />
          <img src={twoScooter} alt="" />
          <img src={threeScooter} alt="" />
          <img src={fourScooter} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Color
