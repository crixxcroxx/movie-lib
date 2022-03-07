import { useParams } from "react-router-dom";
import "./watch.css";

const Watch = () => {
  const { id, title } = useParams();

  return (
    <div className="watch">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder={0}
      />
    </div>
  );
};

export default Watch;
