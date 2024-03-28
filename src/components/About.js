import React, { useEffect, useState } from 'react';
import { getUserData } from './APIService';
import skillsColors from './skillsColors';

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        setAboutData(userData.about); // Assuming 'about' is part of the userData
        setSkillsData(userData.skills.filter(skill => skill.enabled)); // Assuming 'skills' is part of the userData
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!aboutData || !skillsData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>{aboutData.exp_year}</h3>
                  <span className="rounded">
                    <img src="img/about/flower.png" alt="" />
                  </span>
                </div>
                <div className="experience">
                  <h3>+</h3>
                  <p>years experience</p>
                  <span className="shape">
                    <img src="img/about/dots.png" alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src="img/svg/icon1.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>{aboutData.quote}</span>
                <h3>{`I'm`} Looking For UX/UI Designer.</h3>
              </div>
              <div className="text">
                <p>
                  {aboutData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
      <div className="dodo_progress">
                <ul>
                  {skillsData.map(skill => (
                    <li key={skill._id}>
                      <div className="list_inner">
                        <div
                          className="progress_inner skillsInner___"
                          data-value={skill.percentage}
                          data-color={skillsColors[skill.name]}
                        >
                          <div className="background">
                            <div className="bar">
                              <div className="bar_in" style={{ width: `${skill.percentage}%` }} />
                            </div>
                          </div>
                          <div className="percent">
                            <img
                              className="svg"
                              src={skill.image.url}
                              alt={skill.name}
                            />
                          </div>
                          <span className="skill_name">{skill.name}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
    </div>
</div></div></div></div>
    
  );
}

export default About;
