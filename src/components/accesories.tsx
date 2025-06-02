import check from '../assets/check.svg'
import golfRack from '../assets/golf-bag-rack.png'
import scoterPlusRack from '../assets/scooter-rack.png'
import scooterShopRack from '../assets/scooter-shop-rack.png'
import shopRack from '../assets/shop-rack.png'

const Accesories = () => {
  return (
    <div className="accesories">
      <h2>Multiple Accessories</h2>
      <p className="ftndtec">There are multiple modes for the scooter for your multiple needs.</p>

      <div className="golf-container">

        <div className='bag-rock'>  

          <h3>Golf Bag Rack</h3>

          <span>
            <img src={check} alt="" />
            <p>Material : Aluminium alloy</p>
          </span>

          <span>
            <img src={check} alt="" />
            <p>Color : Black</p>
          </span>

          <span>
            <img src={check} alt="" />
            <p>Capacity : 45lbs</p>
          </span>

          <span>
            <img src={check} alt="" />
            <p>Ease : Steady & adjustable</p>
          </span>

        </div>

        <div className='bag-rock-img'>
          <img src={golfRack} alt="" />
          <img src={scoterPlusRack} alt="" />
        </div>

      </div>

      <div className='shopping-rack'>

        <div className='shop-rack-img'>

          <img src={scooterShopRack} alt="" />

          <img src={shopRack} alt="" />

        </div>

        <div className='shop-rack'>

          <h3>Shopping Rack</h3>

          <span>
            <img src={check} alt="" />
            <p>Material : Aluminium alloy</p>
          </span>

          <span>
            <img src={check} alt="" />
            <p>Color : Black</p>
          </span>

          <span>
            <img src={check} alt="" />
            <p>Capacity : 45lbs</p>
          </span>

          <span>
            <img src={check} alt="" />
            <p>Ease : Quick & adjustable</p>
          </span>
        </div>
        
      </div>

      <div className="coming-soon">
        More Accessories Coming Soon
      </div>

    </div>
  )
}

export default Accesories
