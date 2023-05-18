import portrait from './assets/Josue-Rodriguez.jpg';
import qrCode from './assets/qr-code.png'

function Card() {
  return (
    <main>
      <section className='image'>
        <img src={portrait} className='portrait' alt="Portrait of Josue" />
      </section>
      <h1>Josue Rodriguez</h1>
      <h3>Frontend Developer</h3>
      <h4><a href="https://josue.me" className='website'>www.josue.me</a></h4>
      <details>
        <summary>View QR Code</summary>
        <img src={qrCode} className='qrcode' alt="QR Code for contact details" />
      </details>
      <section className='buttons'>
        <button>Email</button>
        <button>LinkedIn</button>
      </section>
    </main>
  )
}

export default Card
