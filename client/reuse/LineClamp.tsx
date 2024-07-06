import { useState } from "react";
const LineClamp = ({ content }: { content: string }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="text-lg">
      <div className={`${readMore ? "line-clamp-none" : "line-clamp-6"}`}>
        {content}
      </div>
      <a
        onClick={() => {
          setReadMore((prev) => !prev);
        }}
        className="link text-xs"
      >
        read{` ${readMore ? "less" : "more"}`}
      </a>
    </div>
  );
};
export default LineClamp;
