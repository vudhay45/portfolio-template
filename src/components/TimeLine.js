import React, { useEffect, useState } from 'react';
import { getUserData } from './APIService';

function TimeLine() {
  const [timelineData, setTimelineData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setTimelineData(userData.timeline);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };
    fetchData();
  }, []);

  if (!timelineData || !Array.isArray(timelineData)) {
    return <div>Loading...</div>;
  }
  const educationItems=timelineData.filter(item=>item.forEducation);
  const experienceItems=timelineData.filter(item=>!item.forEducation);

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Experience</span>
                  <h3>Creative Timeline</h3>
                </div>
                <div className="subtitle">
                  <p>
                    Fusce sollicitudin eros id ex maximus gravida non vitae
                    ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                  </p>
                </div>
              </div>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  {experienceItems.map((item, index) => (
                    <li key={index} className="wow fadeInUp" data-wow-duration="1s">
                      <ul className="items">
                        <li>
                          <div className="list_inner">
                            <div className="details" style={{overflow:'auto',display:'flex',flexDirection:'column'}}>
                              {item.icon && item.icon.url && (
                                <img className="svg" src={item.icon.url} alt="" />
                              )}
                              <div className="title">
                                <h3>{item.jobTitle}</h3>
                                <span>{item.company_name}</span>
                              </div>
                              <div className="text" style={{width:'fit-content'}}>
                                <p>{item.summary}</p>
                                <ul style={{
                                          width: '50%', /* Set the width to half of the page */
                                          listStylePosition: 'inside', /* Ensure bullets start from the first line */
                                          overflow: 'visible', /* Hide overflow text */
                                          textOverflow: 'ellipsis', /* Add an ellipsis to text that overflows */
                                           whiteSpace: 'nowrap', /* Prevent text from wrapping to the next line */
                                           }}>
                                           {item.bulletPoints.map((point, pointIndex) => (
                                           <li key={pointIndex} style={{
                                            display: 'block', /* Display list items as block elements */
                                                 maxHeight: '2.4em', /* Limit the height to two lines */
                                               }}>
                                              {point}
                                                </li>
                                               ))}
                                          </ul>

                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="year">
                              <span>
                                {new Date(item.startDate).getFullYear()}-{new Date(item.endDate).getFullYear()}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="image">
                              {item.icon && item.icon.url && (
                                <img src={item.icon.url} alt="" />
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
             <h4>Education</h4>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  {educationItems.map((item, index) => (
                    <li key={index} className="wow fadeInUp" data-wow-duration="1s">
                      <ul className="items">
                        <li>
                          <div className="list_inner">
                            <div className="details" style={{overflow:'auto',display:'flex',flexDirection:'column'}}>
                              {item.icon && item.icon.url && (
                                <img className="svg" src={item.icon.url} alt="" />
                              )}
                              <div className="title">
                                <h3>{item.jobTitle}</h3>
                                <span>{item.company_name}</span>
                              </div>
                              <div className="text" style={{width:'fit-content'}}>
                                <p>{item.summary}</p>
                                <ul style={{
                                          width: '50%', /* Set the width to half of the page */
                                          listStylePosition: 'inside', /* Ensure bullets start from the first line */
                                          overflow: 'visible', /* Hide overflow text */
                                          textOverflow: 'ellipsis', /* Add an ellipsis to text that overflows */
                                           whiteSpace: 'nowrap', /* Prevent text from wrapping to the next line */
                                           }}>
                                           {item.bulletPoints.map((point, pointIndex) => (
                                           <li key={pointIndex} style={{
                                            display: 'block', /* Display list items as block elements */
                                                 maxHeight: '2.4em', /* Limit the height to two lines */
                                               }}>
                                              {point}
                                                </li>
                                               ))}
                                          </ul>

                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="year">
                              <span>
                                {new Date(item.startDate).getFullYear()}-{new Date(item.endDate).getFullYear()}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="image">
                              {item.icon && item.icon.url && (
                                <img src={item.icon.url} alt="" />
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector6.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon8.svg" alt="" />
            </span>
            <span className="shape3">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape4">
              <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
            </span>
            <span className="shape5">
              <img className="svg" src="img/svg/icon10.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
