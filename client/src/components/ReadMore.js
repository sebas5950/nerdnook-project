import { useState } from "react";

const ReadMore = ({ children }) => {
  const [readMoreLess, setReadMoreLess] = useState(false);

  const toggleButton = () => setReadMoreLess(!readMoreLess);
  console.log(readMoreLess);
  return (
    <div>
      <span>
        {readMoreLess ? children : `${children.substr(0, 100)}...`}
        <button className="read-more" onClick={toggleButton}>
          {readMoreLess ? "Read Less" : "Read More"}
        </button>
      </span>
    </div>
  );
};

export default ReadMore;
