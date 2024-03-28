import Isotope from "isotope-layout";
import React,{ Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import {getUserData} from './APIService';
const Portfolio = () => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  const[selectedProject,setSelectedProject]=useState(null);
  const[ProjectData,setProjectData]=useState(null);
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);
  const openDetailsPopup=(project)=>{
    setSelectedProject(project);
    setActiveDetailsPopup(true);
  }
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const userData=await getUserData();
        setProjectData(userData.projects);
      }catch(error){
        console.error('error fetching about data:',error);
      }
    };
    fetchData();
  },[])
  if(!ProjectData){
    return <div>Loading...</div>
  }
  return (
    <Fragment>
    {activeDetailsPopup &&(
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
        project={selectedProject}
      />
      )}
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                <h3>Latest Projects</h3>
              </div>
              <div className="subtitle">
                <p>
                  This are my projects done by me.
                </p>
              </div>
            </div>
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
          
                {ProjectData.map((project,index)=>(
                <li className="grid-item">
                  <div key={index}className="list_inner">

                    <div className="image">
                      <img src={project.image.url} alt={project.title} />
                      <div
                        className="main"
                        data-img-url={project.image.url}
                      />
                    </div>
                    <div className="details">
                      <span className="category">{project.techStack.join(', ')}</span>
                      <h3 className="title">{project.title}</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link portfolio_popup c-pointer"
                      onClick={() => openDetailsPopup(project)}
                    />
                  </div>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
