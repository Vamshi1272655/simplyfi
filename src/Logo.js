import './Logo.css'

const Logo = () => {

    return (
      <div> 
        <div className="logo-container">           
          <div className="line top-left"></div>
          <div className="line top-right"></div>
          <div className="line bottom-left"></div> 
          <div className="line bottom-right"></div>

          <div className="logo-text">
            <h1>
              HTML <span style={{ color: "#ff6633" }}>&</span> CSS
            </h1>
            <p>design and build websites</p>
          </div>
        </div>
      </div>
    );
  }
  

  export default Logo;
  