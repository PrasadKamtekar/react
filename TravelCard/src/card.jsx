import src from  './assets/dubai.jpeg'
function Card() {
  return (
    <div className="card-container" style={{backgroundImage: `url(${src})`,
    backgroundSize: "cover"}}>
        
      <div className="tourInfo">
        <h1 className="CountryName">
          India <span>🇮🇳</span>
        </h1>
        <h3 className="info">1,345 - 24 Packages</h3>
</div>
        <div className="btn">
          <button className="explore">Explore Now</button>
        
      </div>
    </div>
  );
}

export default Card;
