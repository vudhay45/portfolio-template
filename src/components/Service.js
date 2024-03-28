import React, { useEffect, useState } from 'react'
import { getUserData } from './APIService'

const Service = () => {
  const [serviceData, setServiceData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData()
        setServiceData(userData.services)
      } catch (error) {
        console.error('Error fetching service data:', error)
      }
    }
    fetchData()
  }, [])

  if (!serviceData) {
    return <div>Loading...</div>
  }

  return (
    <div className="tonni_tm_section" id="service">
      <div className="tonni_tm_service">
        <div className="container bigger">
          <div className="service_in">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Our Services</span>
                  <h3>What Can I Do</h3>
                </div>
                <div className="subtitle">
                  <p>
                    Fusce sollicitudin eros id ex maximus gravida non vitae
                    ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                  </p>
                </div>
              </div>
              <div className="service_list">
                <ul>
                  {serviceData.map((service) => (
                    <li
                      key={service._id}
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <div className="list_inner">
                        <img
                          className="svg"
                          src={service.image.url}
                          alt={service.name}
                        />
                        <div className="title">
                          <h3>{service.name}</h3>
                          <span className="charge">{service.charge}</span>
                          <span
                            style={{
                              display: 'block',
                              color: 'grey',
                              fontWeight: 500,
                            }}
                          >
                            {service.desc}
                          </span>
                        </div>
                        <div className="text"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector4.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
