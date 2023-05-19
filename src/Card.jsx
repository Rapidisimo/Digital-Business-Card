import portrait from './assets/Josue-Rodriguez.jpg';
import qrCode from './assets/qr-code.png'

function Card() {
  const url = 'https://www.linkedin.com/in/josue-rodriguez-/'
  return (
    <main>
      <section className='image'>
        <img src={portrait} className='portrait' alt="Portrait of Josue" />
      </section>
      <h1>Josu&eacute; Rodriguez</h1>
      <h3>Frontend Developer</h3>
      <h4><a href="https://josue.me" target='_blank' className='website'>www.josue.me</a></h4>
      <details>
        <summary>View QR Code</summary>
        <h5 className='qr-heading'>Click or scan QRCode to download vcard</h5>
        <a href="./jr.vcf" download="jr.vcf" target='_blank'>
          <img src={qrCode} className='qrcode' alt="QR Code for contact details" />
        </a>
      </details>
      <section className='buttons'>
        <a href="mailto:hello@josue.me">
          <button ><i className="fa-solid fa-envelope"></i>Email</button>
        </a>
        <a href="https://www.linkedin.com/in/josue-rodriguez-/" target='_blank'>
          <button className='linkedin'><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </a>
      </section>
    </main>
  )
}

export default Card
