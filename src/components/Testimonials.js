import React, { useEffect, useRef, useState } from 'react'
import { getUserData } from './APIService'

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [active, setActive] = useState()

  let reviewData = useRef()
  console.log(reviewData)
  const activeDotFun = (value, i) => {
    setActive(value)
    console.log(active)
    let data = reviewData.current
    data.push(data[i])
    data.splice(i, 1)
    reviewData.current = data
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData()
        setTestimonialsData(userData.testimonials)
        setActive(userData.testimonials[0])
        setActiveIndex(0)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (testimonialsData) {
      reviewData.current = testimonialsData
    }
  }, [testimonialsData])

  if (!testimonialsData.length) {
    return <div>Loading...</div>
  }

  const activeTestimonial = testimonialsData[activeIndex]

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }
  let activeImg
  if (testimonialsData.length > 0)
    activeImg = (value, key) => (active[key] == value ? 'active' : '')

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_testimonials">
        <div className="container">
          <div
            className="testimonials_inner wow fadeInUp"
            data-wow-duration="1s"
          >
            <span className="shape">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon12.svg" alt="" />
            </span>
            <div className="leftpart">
              <ul>
                {testimonialsData.length > 0 &&
                  testimonialsData.map((data, idx) => (
                    <li
                      className={activeImg(data.image.url, 'image')}
                      data-index={idx + 1}
                      key={idx}
                    >
                      {console.log(data.image.url)}
                      <div className="image">
                        {/* <img src="img/thumbs/37-45.jpg" alt="" /> */}
                        <div
                          className="main"
                          data-img-url={data.image.url}
                          style={{
                            backgroundImage: `url(${data.image.url})`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="rightpart">
              <div className="rightpart_in">
                <div className="main_title">
                  <h3>
                    <span className="big">
                      Testimonials
                      <span className="small">
                        Testimonials
                        <img className="svg" src="img/svg/quote.svg" alt="" />
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="quotes">
                  <ul>
                    {testimonialsData.length > 0 &&
                      testimonialsData.map((data, idx) => (
                        <li
                          key={idx}
                          className={activeImg(data.review, 'review')}
                          data-index={idx + 1}
                        >
                          <p>{data.review}</p>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="details">
                  <div className="infos">
                    <div className="avatars">
                      <ul className="grid-sort">
                        {reviewData.current.map((review, i) => (
                          <li className={` grid-item ${i}`} key={i}>
                            <span onClick={() => activeDotFun(review, i)}>
                              <div
                                data-img-url={review && review.img}
                                style={{
                                  backgroundImage: `url(${
                                    review && review.img
                                  })`,
                                }}
                              />
                            </span>
                            <span className="hidden">1</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="short">
                      <ul className="name">
                        {testimonialsData.length > 0 &&
                          testimonialsData.map((data, idx) => (
                            <li
                              key={idx}
                              className={activeImg(data.name, 'name')}
                              data-index={1}
                            >
                              <h3>{data.name}</h3>
                            </li>
                          ))}
                      </ul>
                      <ul className="job">
                        {testimonialsData.length > 0 &&
                          testimonialsData.map((data, idx) => (
                            <li
                              key={idx}
                              className={activeImg(data.position, 'job')}
                              data-index={1}
                            >
                              <span>{data.position}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
