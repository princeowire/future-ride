import srtipedScooter from '../assets/srtiped-scooter.png'
import check from '../assets/check.svg'
import wheel from '../assets/striped-wheel.svg'

const ProductInfo = () => {
  return (
    <>
      <div className="product-info">
        <h2>Product Infomation</h2>
        <p className="ftndtec">Our Scooter has following unique design and technology features:</p>

        <div className='product-container'>

          <div className='product-image'>
            <img src={srtipedScooter} alt="" />
          </div>

          <div className='product-details'>

            <span>
              <img src={check} alt="" />
              <p>Lightweight aircraft grade aluminium frame</p>
            </span>

            <span>
              <img src={check} alt="" />
              <p>Car grade lithium battery</p>
            </span>

            <span>
              <img src={check} alt="" />
              <p>Self-balanced</p>
            </span>

            <span>
              <img src={check} alt="" />
              <p>Plug N Play</p>
            </span>

            <span>
              <img src={check} alt="" />
              <p>Quick release adapter</p>
            </span>

            <span>
              <img src={check} alt="" />
              <p>RFID key card</p>
            </span>
            
          </div>

        </div>

      </div>

      <div className='efficient-motor'>
        <h2>High Efficiency Motor</h2>
        <p className="ftndtec">More torque for powerful riding with 22% maximum hill climbing capability.</p>

        <div className='moter-img'>
          <img src={wheel} alt="" />
        </div>

      </div>
    </>
  )
}

export default ProductInfo
