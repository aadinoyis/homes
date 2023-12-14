import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero_container}>
        <div className={styles.filter}>
          <div className={styles.hero_banner}>
            <header>
              <a href="#" className='logo'>
                
                <Image src={'/logo.png'} width={1000} height={1000} alt={'lexicon royal apartment'} className='logo'/>
              </a>

              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Rooms</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>

                <button className='btn'>Book Now</button>
              </nav>
            </header>

            <div className={styles.hero_content}>
              <div>
                <div>
                  <h3>Always in Control</h3>

                  <button className="btn">Explore apartments</button>
                </div>

                <div>
                  <h1>One simple apartment for a smart living</h1>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.prop_section}>

        <h1>Stay in a home that uplift <br /> your everyday living and <br /> meaningful moments.</h1>

        <div className={styles.prop_grid}>
          <div className={styles.prop_grid_group}>
            <Image src={'/1.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.prop_image}/>

            <div className={styles.prop_content}>
              <div>
                <h3>01 - Memorable Care</h3>
                <p>We&apos;re here to help when you need it, with human support that exceeds expectations</p>
              </div>

              <div>
                <h3>02 - Seamless Experiences</h3>
                <p>We offer effortles solutions that just work, on their own and with other smart home systems</p>
              </div>
            </div>
          </div>
          <div className={styles.prop_grid_group}>
            <Image src={'/2.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.prop_image}/>

            <div className={styles.prop_content}>
              <div>
                <h3>03 - Welcome Guest</h3>
                <p>We think of ourselves as a guest in your home, so we won&apos;t sell or misuse your data.</p>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      <section className={styles.facilities_section}>
        <h1>A unique fusion of luxury and comfort</h1>

        <div className={styles.facilities_grid}>
          <div>
            <Image src={'/hotel-room.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>Fully furnished apartments</h4>
            </div>
          </div>
          <div>
            <Image src={'/electricity.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>24/7 Electricity</h4>
            </div>
          </div>
          <div>
            <Image src={'/wifi.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>Free Wi-fi</h4>
            </div>
          </div>
          <div>
            <Image src={'/air-conditioner.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>AC and DSTV in all Rooms</h4>
            </div>
          </div>
          <div>
            <Image src={'/cleaning-tools.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>Housekeeping and Laundry</h4>
            </div>
          </div>
          <div>
            <Image src={'/house-party.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>House party facilities</h4>
            </div>
          </div>
          <div>
            <Image src={'/outdoor-game.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>Indoor and Outdoor Games</h4>
            </div>
          </div>
          <div>
            <Image src={'/netflix.png'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>Netflix and Chill</h4>
            </div>
          </div>
          <div>
            <Image src={'/security.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>24/7 Security</h4>
            </div>
          </div>
          <div>
            <Image src={'/garden.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.facilities_image}/>
            
            <div className={styles.facilities_text}>
              <h4>Outdoor garden (s)</h4>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.rooms_section}>
        <h1>Check some of our apartments</h1>
        
        <div className={styles.rooms_grid}>
          <div className={styles.room}>
            <Image src={'/2.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.room_image}/>

            <div className={styles.room_details}>
              <div>
                <div className={styles.new_keyword}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.327 12.4l3.56 2.6-1.352 4.187A3.178 3.178 0 004.719 22.8a3.177 3.177 0 003.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 004.983-3.591L19.113 15l3.56-2.6a3.227 3.227 0 00-1.9-5.832H16.4l-1.327-4.136a3.227 3.227 0 00-6.146 0L7.6 6.568H3.231a3.227 3.227 0 00-1.9 5.832z"></path>
                  </svg>
                  <span>New</span>
                </div>

                <span>Housing road, Ado Ekiti</span>

                <h3>4bedroom Duplex at Housing Road</h3>
              </div>
              <div>
                <span>Stay Fee: <b>&#8358;120,000/night</b></span>

                <Link href={`#`}><button className='btn_inv'>Book Now</button></Link>
              </div>
            </div>
          </div>
          <div className={styles.room}>
            <Image src={'/2.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.room_image}/>

            <div className={styles.room_details}>
              <div>
                <div className={styles.new_keyword}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.327 12.4l3.56 2.6-1.352 4.187A3.178 3.178 0 004.719 22.8a3.177 3.177 0 003.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 004.983-3.591L19.113 15l3.56-2.6a3.227 3.227 0 00-1.9-5.832H16.4l-1.327-4.136a3.227 3.227 0 00-6.146 0L7.6 6.568H3.231a3.227 3.227 0 00-1.9 5.832z"></path>
                  </svg>
                  <span>New</span>
                </div>

                <span>NTA Road, Ado Ekiti</span>

                <h3>NTA Road 2 units of 2bedroom apartments</h3>
              </div>
              <div>
                <span>Stay Fee: <b>&#8358;85,000/night</b></span>

                <Link href={`#`}><button className='btn_inv'>Book Now</button></Link>
              </div>
            </div>
          </div>
          <div className={styles.room}>
            <Image src={'/2.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.room_image}/>

            <div className={styles.room_details}>
              <div>
                <div className={styles.new_keyword}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.327 12.4l3.56 2.6-1.352 4.187A3.178 3.178 0 004.719 22.8a3.177 3.177 0 003.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 004.983-3.591L19.113 15l3.56-2.6a3.227 3.227 0 00-1.9-5.832H16.4l-1.327-4.136a3.227 3.227 0 00-6.146 0L7.6 6.568H3.231a3.227 3.227 0 00-1.9 5.832z"></path>
                  </svg>
                  <span>New</span>
                </div>

                <span>Iworoko Road, Ado Ekiti</span>

                <h3>4bedroom Bungalow at Iworoko Road</h3>
              </div>
              <div>
                <span>Stay Fee: <b>&#8358;120,000/night</b></span>

                <Link href={`#`}><button className='btn_inv'>Book Now</button></Link>
              </div>
            </div>
          </div>
          <div className={styles.room}>
            <Image src={'/2.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.room_image}/>

            <div className={styles.room_details}>
              <div>
                <div className={styles.new_keyword}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.327 12.4l3.56 2.6-1.352 4.187A3.178 3.178 0 004.719 22.8a3.177 3.177 0 003.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 004.983-3.591L19.113 15l3.56-2.6a3.227 3.227 0 00-1.9-5.832H16.4l-1.327-4.136a3.227 3.227 0 00-6.146 0L7.6 6.568H3.231a3.227 3.227 0 00-1.9 5.832z"></path>
                  </svg>
                  <span>New</span>
                </div>

                <span>Iworoko Road, Ado Ekiti</span>

                <h3>2bedroom flat at Iworoko Road</h3>
              </div>
              <div>
                <span>Stay Fee: <b>&#8358;80,000/night</b></span>

                <Link href={`#`}><button className='btn_inv'>Book Now</button></Link>
              </div>
            </div>
          </div>
            
        </div>
      </section>
      
      <section className={styles.locations_section}>

        <h1>Where you can find us</h1>

        <div className={styles.locations_image}>

        </div>

        <div className={styles.locations_grid}>
          <div>
            <h3>Ekiti</h3>

            <Image src={'/map-ekiti.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.map_image}/>
          </div>
          <div>
            <h3>Lagos</h3>

            <Image src={'/map-lagos.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.map_image}/>
          </div>
          <div>
            <h3>Ibadan</h3>

            <Image src={'/map-oyo.jpg'} width={1000} height={1000} alt={'grid image'} className={styles.map_image}/>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footer_top}>
          <a href="#" className='logo'>
            <Image src={'/logo.png'} width={1000} height={1000} alt={'lexicon royal apartment'} className='logo'/>
          </a>

          <nav>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Rooms</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <div>
            <h3>Find Us</h3>

            <ul>
              <li>No. 156, Beside Internal Revenue, Opp. Technology Incubation, Ikere Rd, Ajilosun, Ado-Ekiti.</li>
              <li>+234 (91) 5246 6740</li>
              <li>+234 (91) 5265 6737</li>
            </ul>
            <button className='btn'>Book Now</button>
          </div>
        </div>

        <div className={styles.footer_down}>
          <span>&copy; {new Date().getFullYear()} Lexicon royal apartment. All Rights Reserved</span>
        </div>
      </footer>
      
    </main>
  )
}
