import video from "../assets/backgroundvideo.mp4";
const Home = () => {
  return (
    <div className="showcase">
      <div className="video-container">
        <video src={video} autoPlay loop muted className="back-video" />
      </div>
      <div className="video-content">
        <h1>Welcome to NerdNook</h1>
        <p>One stop place for all nerds around!</p>
      </div>
    </div>
  );
};

export default Home;
