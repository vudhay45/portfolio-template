import React, { useEffect, useState } from 'react'
import { getUserData } from './APIService'

function Home() {
  const [aboutData, setAboutData] = useState(null)
  const [youtubeData, setYoutubeData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData()
        setAboutData(userData.about)
        setYoutubeData(userData.youtube)
      } catch (error) {
        console.error('Error featching about data:', error)
      }
    }
    fetchData()
  }, [])
  if (!aboutData) {
    return <div>Loading....</div>
  }

  return (
    <div className="tonni_tm_section" id="home">
      <div className="tonni_tm_hero">
        <div className="background">
          {aboutData && (
            <div className="image ">
              <div className="img-background">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={aboutData?.avatar?.url}
                  alt=""
                />
              </div>
            </div>
          )}
          <div className="overlay" />
        </div>
        <div className="container">
          <div className="content">
            <div className="content_in">
              <h3 className="name">
                <span>I</span> am
                <br />
                {aboutData.name}
              </h3>
              <span className="welcome">{aboutData.title}</span>
              <p>{aboutData.subTitle}</p>
              <div className="tonni_tm_button">
                <a className="anchor" href="#portfolio">
                  See All Projects{' '}
                  <img className="svg" src="img/svg/arrow-right.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="tonni_tm_down">
            <a className="anchor" href="#about">
              <img className="svg" src="img/svg/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="play_button">
          {youtubeData.map((utube, index) => (
            <a key={index} className="popup-youtube" href={utube.url} />
          ))}
        </div>
        <span className="shape1">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape2">
          <img className="svg" src="img/svg/icon7.svg" alt="" />
        </span>
        <span className="shape3">
          <img className="svg" src="img/svg/icon3.svg" alt="" />
        </span>
        <span className="shape4">
          <img className="svg anim_circle" src="img/svg/icon6.svg" alt="" />
        </span>
        <span className="shape5">
          <img className="svg" src="img/svg/icon1.svg" alt="" />
        </span>
        <span className="shape6">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape7">
          <img className="svg" src="img/svg/icon2.svg" alt="" />
        </span>
      </div>
    </div>
  )
}
export default Home
