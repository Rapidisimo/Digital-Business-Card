import portrait from './assets/Josue-Rodriguez.jpg';
import qrCode from './assets/qr-code.png'

function Card(props) {
  return (
    <main>
      <section className='image'>
        <img src={props.Photo} className='portrait' alt="Portrait of Josue" />
      </section>
      <h1>{props.Name}</h1>
      <h3>{props.Title}</h3>
      <h4><a href={props.Website} target='_blank' className='website'>{props.WebShort}</a></h4>
      <details>
        <summary>View QR Code</summary>
        <h5 className='qr-heading'>Click or scan QRCode to download vcard</h5>
        <a href={props.Vfile} download={props.Vname} target='_blank'>
          <img src={qrCode} className='qrcode' alt="QR Code for contact details" />
        </a>
      </details>
      <section className='buttons'>
        <a href={props.Email}>
          <button ><i className="fa-solid fa-envelope"></i>Email</button>
        </a>
        <a href={props.LinkedIn} target='_blank'>
          <button className='linkedin'><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </a>
      </section>
    </main>
  )
}

export default Card
