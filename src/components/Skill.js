import React, { useEffect, useState } from 'react';
import { getUserData } from './APIService';

function Skill() {
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

<div className="dodo_progress">
                <ul>
                  {skillsData.map(skill => (
                    <li key={skill._id}>
                      <div className="list_inner">
                        <div
                          className="progress_inner skillsInner___"
                          data-value={skill.percentage}
                          data-color="#000"
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
}
export default Skill