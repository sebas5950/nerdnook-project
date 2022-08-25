import video from "../assets/backgroundvideo.mp4";
const Home = () => {
  return (
    <div className="home-page">
        <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <h1>Welcome to NerdNook</h1>
        <p>One stop place for all nerds around</p>
      </div>
    </div>
  );
};

export default Home;
