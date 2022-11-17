import Head from 'next/head'
import { use, useCallback, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useEmblaCarousel from 'embla-carousel-react'

export default function Home() {

  const [filter, setFilter] = useState('guests');
  const [openMenu, setOpenMenu] = useState(false);
  const [openSuperhost, setOpenSuperhost] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [openIdentity, setOpenIdentity] = useState(false);
  const [showReviews, setShowReviews] = useState(false)
  const [readMore, setReadMore] = useState(false);


  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    draggable: false,
    slidesToScroll: 2,
    speed: 12,
  })



  const handleSuperhost = () => {
    setOpenSuperhost(!openSuperhost)
    setOpenIdentity(false)
    setOpenReviews(false);

  }
  const handleReviews = () => {
    setOpenReviews(!openReviews)
    setOpenIdentity(false)
    setOpenSuperhost(false);

  }

  const handleIdentity = () => {
    setOpenIdentity(!openIdentity)
    setOpenSuperhost(false)
    setOpenReviews(false);

  }

  const moreReviewHandler = () => {
    setShowReviews(!showReviews);
    document.getElementById('showReviewsBtn').style.display = 'none';

  }


  const menuHandler = () => {
    setOpenMenu(!openMenu);
  }

  const handleFromGuests = () => {
    document.getElementById('fromGuests').classList.add(`${styles.reviews_filter_clicked}`)
    document.getElementById('fromHosts').classList.remove(`${styles.reviews_filter_clicked}`)
    setFilter('guests')

  }
  const handleFromHosts = () => {
    document.getElementById('fromHosts').classList.add(`${styles.reviews_filter_clicked}`)
    document.getElementById('fromGuests').classList.remove(`${styles.reviews_filter_clicked}`)
    setShowReviews(false);
    setFilter('hosts')

  }
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <>
      <header className={`${styles.navbar}`}>
        <div className={`${styles.navbarLeft}`}>
          <Image src='/airbnbLogo.svg' width={110} height={33} alt="..." className={`pointer`}/>
        </div>

        <div className={`flex-row ${styles.navbarRight}`}>
          <p className={`${styles.navbarText} pointer`}>Airbnb your home</p>
          <Image src='/languageIcon.svg' width={40} height={40} alt="..." className={`${styles.navbarText} pointer`} />
          <div className={`${styles.navbarProfile} flex-row`} onClick={menuHandler}>
            <Image src='/burgerMenu.svg' width={16} height={16} alt="..." />
            <Image src='/profileIcon.svg' width={31} height={31} alt="..." />
            {openMenu ?
              <div className={`${styles.dropDown}`}>
                <div className={`${styles.dropDown_top}`}>
                  <p className={`${styles.signUp}`}>Sign up</p>
                  <p>Log in</p>
                </div>
                <p>Host you home</p>
                <p>Host you experience</p>
                <p>Help</p>
              </div>
              :
              null
            }
          </div>
        </div>

      </header>

      <main className={`${styles.main_page} flex-row`}>
        <div className={`flex-col ${styles.main_page_left} `}>
          <div className={`${styles.profile_image}`}>
            <Image src="/userImage.webp" width={120} height={120} alt="..." className={`border-circle `} />
          </div>
          <div className={`${styles.profile_lists} ${styles.first_profile_list}`}>
            <p onClick={handleSuperhost}><Image src="/superhost.png" width={22} height={22} alt="..." />Superhost
            </p>
            {openSuperhost ? <div className={`${styles.superhostTooltip} flex-row`}>
              <div>
                <p>Chiara&apos;s a Superhost</p>
                <p className={`${styles.tooltipText}`}>Superhosts are highly rated and committed to providing great stays for guests.</p>
              </div>
              <Image src="/cross.svg" width={20} height={20} alt="..." onClick={() => setOpenSuperhost(!openSuperhost)} className="pointer" />
            </div>
              :
              null
            }
            <p onClick={handleReviews}><Image src="/reviews.png" width={22} height={22} alt="..." />59 reviews</p>
            {openReviews ? <div className={`${styles.superhostTooltip} flex-row`}>
              <div>
                <p className={`${styles.tooltipText}`}>
                  Get to know Chiara better through reviews. Reviews can only be left by past guests or hosts. Check out reviews.
                </p>
              </div>
              <Image src="/cross.svg" width={20} height={20} alt="..." onClick={() => setOpenReviews(!openReviews)} className="pointer" />
            </div>
              :
              null
            }
            <p onClick={handleIdentity} ><Image src="/identity.png" width={22} height={22} alt="..." />Identity verified</p>
            {openIdentity ? <div className={`${styles.superhostTooltip} flex-row`}>
              <div>
                <p className={`${styles.tooltipText}`}>Chiara successfully provided the required info to confirm their identity.</p>
              </div>
              <Image src="/cross.svg" width={20} height={20} alt="..." onClick={() => setOpenIdentity(!openIdentity)} className="pointer" />
            </div>
              :
              null
            }
          </div>

          <div className={`${styles.profile_lists}`}>

            <h3>Chiara confirmed</h3>
            <p className={`${styles.checkmarks}`}><Image src="/checkmark.png" width={18} height={18} alt="..." />Identity</p>
            <p className={`${styles.checkmarks}`}><Image src="/checkmark.png" width={18} height={18} alt="..." />Email address</p>
            <p className={`${styles.checkmarks}`}><Image src="/checkmark.png" width={18} height={18} alt="..." />Phone number</p>
          </div>

        </div>


        <div className={`${styles.main_page_right}`}>
          <p className={`${styles.greeting}`}>Hi, I&apos;m Chiara</p>
          <p className={`${styles.joinedIn}`}>Joined in 2018</p>
          <p className={`flex-row ${styles.translateText}`}><Image src="/translate.png" width={20} height={20} alt="..." />Some info has been automatically translated. <a href="...">Show original language</a></p>

          <h3>About</h3>
          <div>
            <p className={`flex-row ${styles.aboutInfo}`}><Image src="/address.png" width={15} height={15} alt="..." />Lives in Santa Flavia, Italy</p>
            <p className={`flex-row ${styles.aboutInfo}`}><Image src="/speaks.png" width={15} height={15} alt="..." />Speaks English, Español, Italiano</p>
          </div>


          <div className={`${styles.listings_wrapper}`}>
            <h3>Chiara&apos;s listings</h3>
            <div className={`${styles.user_listings}`}>
            </div>

            <div className={`${styles.embla}`} ref={emblaRef}>
              <div className={`${styles.embla__container}`}>
                <div className={`${styles.embla__slide}`}>
                  <Image src='/hotelRoom.webp' width={300} height={200} alt="..." className={`${styles.roomImage}`} />
                  <p className={`flex-row ${styles.roomReviews} mb-0`}><Image src='/star.png' width={15} height={15} />4.95(22)</p>
                  <p>Entire home/apt &#8226; Dome house Le Cupole</p>
                </div>
                <div className={`${styles.embla__slide}`}>
                  <Image src='/hotelRoom2.webp' width={300} height={200} alt="..." className={`${styles.roomImage}`} />
                  <p className={`flex-row ${styles.roomReviews} mb-0`}><Image src='/star.png' width={15} height={15} />4.8(22)</p>
                  <p>Entire home/apt &#8226; Condominium Grecale Wind</p>
                </div>
                <div className={`${styles.embla__slide}`}>
                  <Image src='/hotelRoom3.webp' width={300} height={200} alt="..." className={`${styles.roomImage}`} />
                  <p className={`flex-row ${styles.roomReviews} mb-0`}><Image src='/star.png' width={15} height={15} />5.0(22)</p>
                  <p>Entire home/apt &#8226; Apartment Wind of Scirocco</p>
                </div>
              </div>
              <button className={`embla__prev ${styles.prevButton}`} onClick={scrollPrev}>
                <Image src='/prevCarousel.png' width={17} height={17} alt="..." className='low-opacity' />
              </button>
              <button className={`embla__next ${styles.nextButton}`} onClick={scrollNext}>
                <Image src='/nextCarousel.png' width={17} height={17} alt="..." className='low-opacity' />
              </button>

            </div>


          </div>

          <div className={`${styles.guidebook_wrapper}`}>
            <h3>Chiara&apos;s guidebook</h3>

            <div className={`${styles.guidebook} pointer`}>
              <h4 className={``}><Image src="/translateWhite.png" width={18} height={18} alt="..." /> Chiara&apos;s guidebook</h4>
              <p className={`flex-row`}><Image src="/userImage.webp" width={22} height={22} alt="..." className={`border-circle`} />Chiara</p>
            </div>

          </div>

          <h3 className={`${styles.mainRight_totalReviews}`}><Image src='/star.png' width={15} height={15} alt="..." />59 reviews</h3>
          <div className={`${styles.reviews_filter_bar}`}>
            <p onClick={handleFromGuests} id="fromGuests" className={`${styles.reviews_filter_clicked}`}>From guests (58)</p>
            <p onClick={handleFromHosts} id="fromHosts">From hosts (1)</p>
          </div>

          <div className={`${styles.reviews}`}>

            {
              filter === 'guests' ?

                <>
                  <section className={`${styles.review_wrapper}`}>
                    <div className={`flex-row ${styles.reviewTitle}`}>
                      <div>
                        <h4>Wind of Scirocco - house a few meters from the sea</h4>
                        <p>October 2022</p>
                      </div>
                      <Image src="/hotelRoom.webp" width={70} height={40} alt="..." className={`${styles.reviewImage}`} />
                    </div>
                    <p>
                      We really enjoyed our stay in Santa Flavia thanks to the wondeful apartment by Chiara. The place is very cozy and modern and had everything we needed.
                    </p>
                    <div className={`flex-row ${styles.reviewAuthor}`}>
                      <Image src="/userImage.webp" width={55} height={55} alt="..." className={`border-circle`} />
                      <div>
                        <h4>Lisa, St. Gallen, Switzerland</h4>
                        <p>Joined in 2017</p>
                      </div>
                    </div>
                  </section>
                  <section className={`${styles.review_wrapper}`}>
                    <div className={`flex-row ${styles.reviewTitle}`}>
                      <div>
                        <h4>Grecale wind - a few meters from the sea</h4>
                        <p>October 2022</p>
                      </div>
                      <Image src="/hotelRoom2.webp" width={70} height={40} alt="..." className={`${styles.reviewImage}`} />
                    </div>
                    {/* <p className={`${styles.reviewMessage}`}> */}
                      {readMore === false ? <p>Everything was amazing! I was supposed to be here for just a week but decided to stay for a month in the end! The house is amazing and so comfortable! I couldn&apos;t ask for more in this tiny city...<button className={`${styles.readMoreBtn}`} onClick={() => setReadMore(!readMore)}>read more</button>
                      </p>

                        :

                        <p>Everything was amazing! I was supposed to be here for just a week but decided to stay for a month in the end! The house is amazing and so comfortable! I couldn&apos;t ask for more in this tiny city that gained my heart! Chiara and Salve are amazing hosts and made everything so much easier for me! Recommend it to everyone a 100%! ❤️<button className={`${styles.readMoreBtn}`} onClick={() => setReadMore(!readMore)} >read less</button></p>
                      }


                    {/* </p> */}
                    <div className={`flex-row ${styles.reviewAuthor}`}>
                      <Image src="/userImage2.webp" width={55} height={55} alt="..." className={`border-circle`} />
                      <div>
                        <h4>Lisa, St. Gallen, Switzerland</h4>
                        <p>Joined in 2017</p>
                      </div>
                    </div>
                  </section>
                  <section className={`${styles.review_wrapper}`}>
                    <div className={`flex-row ${styles.reviewTitle}`}>
                      <div>
                        <h4>Wind of Scirocco - house a few meters from the sea</h4>
                        <p>October 2022</p>
                      </div>
                      <Image src="/hotelRoom3.webp" width={70} height={40} alt="..." className={`${styles.reviewImage}`} />
                    </div>
                    <p>
                      We really enjoyed our stay in Santa Flavia thanks to the wondeful apartment by Chiara. The place is very cozy and modern and had everything we needed.
                    </p>
                    <div className={`flex-row ${styles.reviewAuthor}`}>
                      <Image src="/userImage3.webp" width={55} height={55} alt="..." className={`border-circle`} />
                      <div>
                        <h4>Lisa, St. Gallen, Switzerland</h4>
                        <p>Joined in 2017</p>
                      </div>
                    </div>
                  </section>
                  <section className={`${styles.review_wrapper}`}>
                    <div className={`flex-row ${styles.reviewTitle}`}>
                      <div>
                        <h4>Grecale wind - a few meters from the sea</h4>
                        <p>October 2022</p>
                      </div>
                      <Image src="/hotelRoom.webp" width={70} height={40} alt="..." className={`${styles.reviewImage}`} />
                    </div>
                      {readMore === false ? <p>My parents stayed here and they were very welcome! The apartment was sparkling clean and had everything you need on vacation! Super friendly and helpful hosts! This home is right in the heart of mine!…<button className={`${styles.readMoreBtn}`} onClick={() => setReadMore(!readMore)}>read more</button>
                      </p>

                        :

                        <p>My parents stayed here and they were very welcome! The apartment was sparkling clean and had everything you need on vacation! Super friendly and helpful hosts! This home is right in the heart of mine! Hope to be back soon with the whole family! Homes and hosts are sublime! <button className={`${styles.readMoreBtn}`} onClick={() => setReadMore(!readMore)} >read less</button></p>
                      }
                    <div className={`flex-row ${styles.reviewAuthor}`}>
                      <Image src="/userImage4.webp" width={55} height={55} alt="..." className={`border-circle`} />
                      <div>
                        <h4>Lisa, St. Gallen, Switzerland</h4>
                        <p>Joined in 2017</p>
                      </div>
                    </div>
                  </section>
                  <section className={`${styles.review_wrapper}`}>
                    <div className={`flex-row ${styles.reviewTitle}`}>
                      <div>
                        <h4>Grecale wind - a few meters from the sea</h4>
                        <p>October 2022</p>
                      </div>
                      <Image src="/hotelRoom2.webp" width={70} height={40} alt="..." className={`${styles.reviewImage}`} />
                    </div>
                    <p>
                      We really enjoyed our stay in Santa Flavia thanks to the wondeful apartment by Chiara. The place is very cozy and modern and had everything we needed.
                    </p>
                    <div className={`flex-row ${styles.reviewAuthor}`}>
                      <Image src="/userImage5.webp" width={55} height={55} alt="..." className={`border-circle`} />
                      <div>
                        <h4>Lisa, St. Gallen, Switzerland</h4>
                        <p>Joined in 2017</p>
                      </div>
                    </div>
                  </section>
                  <button onClick={moreReviewHandler} className={`${styles.moreReviewsButton}`} id="showReviewsBtn">Show more reviews</button>
                </>
                :

                <section className={`${styles.review_wrapper}`}>
                  <div className={`flex-row ${styles.reviewTitle}`}>
                    <div className={`${styles.hostsReviews}`}>
                      <p>October 2022</p>
                      <h4 className={`low-opacity ${styles.hostsReviewText}`}>Good guests</h4>
                      <p className={`${styles.translatedFrom}`}><Image src="/translateGray.svg" width={15} height={15} alt="..." />Translated from Italian</p>
                    </div>

                  </div>

                  <div className={`flex-row ${styles.reviewAuthor}`}>
                    <Image src="/userImage6.webp" width={55} height={55} alt="..." className={`border-circle`} />
                    <div>
                      <h4>Pietro</h4>
                      <p>Joined in 2020</p>
                    </div>
                  </div>
                </section>
            }

            {
              showReviews ?
                <>
                  <section className={`${styles.review_wrapper}`}>
                    <div className={`flex-row ${styles.reviewTitle}`}>
                      <div>
                        <h4>Grecale wind - a few meters from the sea</h4>
                        <p>October 2022</p>
                      </div>
                      <Image src="/hotelRoom.webp" width={70} height={40} alt="..." className={`${styles.reviewImage}`} />
                    </div>
                    <p>
                      We really enjoyed our stay in Santa Flavia thanks to the wondeful apartment by Chiara. The place is very cozy and modern and had everything we needed.
                    </p>
                    <div className={`flex-row ${styles.reviewAuthor}`}>
                      <Image src="/userImage.webp" width={55} height={55} alt="..." className={`border-circle`} />
                      <div>
                        <h4>Lisa, St. Gallen, Switzerland</h4>
                        <p>Joined in 2017</p>
                      </div>
                    </div>
                  </section>
                  <section className={`${styles.review_wrapper}`}>
                    <div className={`flex-row ${styles.reviewTitle}`}>
                      <div>
                        <h4>Grecale wind - a few meters from the sea</h4>
                        <p>October 2022</p>
                      </div>
                      <Image src="/hotelRoom2.webp" width={70} height={40} alt="..." className={`${styles.reviewImage}`} />
                    </div>
                    <p>
                      We really enjoyed our stay in Santa Flavia thanks to the wondeful apartment by Chiara. The place is very cozy and modern and had everything we needed.
                    </p>
                    <div className={`flex-row ${styles.reviewAuthor}`}>
                      <Image src="/userImage2.webp" width={55} height={55} alt="..." className={`border-circle`} />
                      <div>
                        <h4>Lisa, St. Gallen, Switzerland</h4>
                        <p>Joined in 2017</p>
                      </div>
                    </div>
                  </section>
                </>
                :
                null

            }



          </div>
          <p className={`${styles.reportText}`}>Report this profile</p>


        </div>




      </main>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.footerNavbar} flex-row`}>
          <div>
            <h5>Support</h5>
            <ul>
              <li>Help Center</li>
              <li>AirCover</li>
              <li>Safety information</li>
              <li>Supporting people with disabilities</li>
              <li>Cancellation options</li>
              <li>Our COVID-19 Response</li>
              <li>Report a neighborhood concern</li>
            </ul>
          </div>
          <div>
            <h5>Community</h5>
            <ul>
              <li>Airbnb.org: disaster relief housing</li>
              <li>Support Afghan refugees</li>
              <li>Combating discrimination</li>
            </ul>
          </div>
          <div>
            <h5>Hosting</h5>
            <ul>
              <li>Try hosting</li>
              <li>AirCover for Hosts</li>
              <li>Explore hosting resources</li>
              <li>Visit our community forum</li>
              <li>How to host responsibly</li>

            </ul>
          </div>
          <div>
            <h5>Airbnb</h5>
            <ul>
              <li>Newsroom</li>
              <li>Learn about new features</li>
              <li>Letter from our founders</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>

            </ul>
          </div>
        </div>

        <div className={`${styles.footer_media_links}`}>
          <div className={`${styles.footer_media_left} flex-row`}>
            <p>© 2022 Airbnb, Inc.</p>
            <span>·</span>
            <p>Privacy</p>
            <span>·</span>
            <p>Terms</p>
            <span>·</span>
            <p>Sitemap</p>
          </div>
          <div className={`${styles.footer_media_right} flex-row`}>
            <Image src="/languageIcon.svg" width={15} height={15} alt="..." />
            <p>English (US)</p>
            <p>$ USD</p>
            <Image src="/fbIcon.svg" width={20} height={20} alt="..." />
            <Image src="/twitterIcon.svg" width={20} height={20} alt="..." />
            <Image src="/instaIcon.svg" width={20} height={20} alt="..." />

          </div>
        </div>



      </footer>





    </>


  )
}
