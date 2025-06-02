import galleryScoeter from '../assets/gallery-scooter.png';
import buildQuality from '../assets/build-quality.png'
import part from '../assets/parts.png'

const Gallery = () => {
  return (
    <div className='gallery'>
      <h3>Gallery</h3>
      <p className="ftndtec">View gallery of our products and make yourself satisfied with our creation.</p>

      <div className="gallery-content">

        <div className='gal-grp-one'>
          <img src={galleryScoeter} alt="" />

          <div className='btn-gallery'>
            <button>Battery Images</button>
            <button>Spare Parts Images</button>
            <button>Charging Cable Images</button>
          </div>
        </div>

        <div className='gal-grp-two'>
          <img src={buildQuality} alt="" />
          <img src={part} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Gallery
