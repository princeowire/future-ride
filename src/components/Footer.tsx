import footerScotter from '../assets/ft-img.png'
import twitter from '../assets/twitter.svg'
import faceBook from '../assets/facebook.svg'
import ig from '../assets/instagramm.svg'

const Footer = () => {
  return (
    <footer className="footer">

    <div className='ft-container'>      

      <img className='ft-scooter' src={footerScotter} alt="" />

      <div className="ft-content">

        <div className='ft-grps'>
          <h6>About</h6>
          <p>Company</p>
          <p>Teams</p>
          <p>Profile</p>
          <p>Careers</p>
        </div>

        <div className='ft-grps'>
          <h6>Resources</h6>
          <p>Contact</p>
          <p>Application</p>
          <p>FAQ Features</p>
        </div>

        <div className='ft-grps'>
          <h6>Legals</h6>
          <p>Copyright Privacy</p>
          <p>Policy Disclaimer</p>
          <p>Terms</p>
          <div className='socials'>
            <img src={faceBook} alt="" />
            <img src={twitter} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>
      </div>

    </div>


    <p className="copyright">© Copyright 2021. All rights reserved.</p>

    </footer>
  )
}

export default Footer
