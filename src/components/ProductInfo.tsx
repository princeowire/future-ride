import srtipedScooter from '../assets/srtiped-scooter.png'
import check from '../assets/check.svg'

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
          </div>

        </div>

      </div>
    </>
  )
}

export default ProductInfo
