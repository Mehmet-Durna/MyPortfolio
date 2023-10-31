import { Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


export const ProjectCard = ({ title, description, imgUrl, githubUrl, websiteUrl }) => {
    return (
        <Col size={12} sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="project-img" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <div>{description}</div>
                    <div className="buttons-bottom mt-5">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <a className="btn bg-transparent border-0 text-dark">
                            <FontAwesomeIcon icon={faGithub} beatFade/> GitHub
                        </a>
                    </a>
                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                        <a className="btn bg-transparent border-0 text-info">
                            <FontAwesomeIcon icon={faGlobe} beatFade/> Website
                        </a>
                    </a>
                    </div>
                </div>
            </div>
        </Col>
    );
};
