import {Button, Col} from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl,websiteUrl }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div>{description}</div>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button>
              <i className="fab fa-github"></i>
            </Button>
          </a>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Button>
              <i className="fab fa-github"></i>
            </Button>
          </a>

        </div>
      </div>
    </Col>
  );
};
