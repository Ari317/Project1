import { useState } from "react";

const Collapse = ({ title, content, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={toggleCollapse}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && (
        <div>
          {imageUrl && <img src={imageUrl} alt={title} />}
          {content && <p>{content}</p>}
          <button onClick={toggleCollapse}></button>
        </div>
      )}
    </div>
  );
};

export default Collapse;
