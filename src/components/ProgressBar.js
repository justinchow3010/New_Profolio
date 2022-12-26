import React from "react";

const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 20,
      width: "10vw",
      backgroundColor: "#F8F2FF",
      borderRadius: 50,
      padding: 0
    };
  
    const fillerStyles = {
      height: "100%",
      width: `${completed}%`,
      background: `linear-gradient(90deg, rgba(0,24,73,0.8631827731092436) 0%, rgba(0,63,70,0.8687850140056023) 36%, rgba(0,143,122,0.7763480392156863) 100%)`,
      // borderRadius: "inherit",
      textAlign: "right",
    };
  
    const labelStyles = {
      padding: 5,
      color: "white",
      fontWeight: "bold",
      fontSize: 12
    };
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;