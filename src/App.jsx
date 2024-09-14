import cart from './assets/cart.png'
import './App.css'
function App() {


  return (
    <>
    <header>
    <div className='header'>
        <h1>RouteX</h1>

        <div className='Headers'>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>
        </div>

        <p> Need help?  <br /> (307) 555-0133</p>
      </div>
    </header>
      
      <main>
        <div className='main'>
            <h1>Journey with Confidence <br />
            <span> Migrate </span> with Us</h1>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet <br />
             rcus nunc. Duis egestas ac ante sed tincidunt.</p>
            <button>Learn More</button>
        </div>
      </main>

      <footer>
        <div className='footer'>
          <div className='image'>
            <img src={cart} />
          </div>
          <div className='about-text'>
          <h4 class="about-title">About Us</h4>
          <h1 class="text-about">Unknown Wanderlust <br /> <span class="about-span">Your Journey into</span></h1>
          <p class="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet <br/> rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          <div class="check">
            <div class="card">
              <div class="input">
                <input type="checkbox" />
                  <h6>Safetiy Guides</h6>
                  </div>
                  <p>Lorem ipsum dolor sit amet, cons ectetur <br/> adipiscing elit.</p>
                  </div><div class="card">
                    <div class="input">
            <input type="checkbox" />
              <h6>Passport Assistance</h6>
              </div>
              <p>Lorem ipsum dolor sit amet, cons ectetur <br/> adipiscing elit.</p>
            </div>
            </div>
            <button class="about-btn">Read More</button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
