import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"

const Social = () => {
  return (
    <div className="flex bg-blue-800 p-2">
      <a href="https://github.com/khandoit-123" target="_blank" className="text-gray-800 hover:text-gray-600 pr-4 transition-transform duration-300 hover:scale-115">
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: "50px" }}/>
      </a>
      <a href="https://www.linkedin.com/in/lim-khan-8b4962304/" target="_blank" className="text-gray-800 hover:text-gray-600 pr-4 transition-transform duration-300 hover:scale-115">
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "50px" }}/>
      </a>
    </div>
  );
};

export default Social;