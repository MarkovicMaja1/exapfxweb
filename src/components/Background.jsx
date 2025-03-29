import React from "react";
import Particles from "react-tsparticles";

const Background = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 50 },
          color: { value: "#00ffcc" },
          links: { enable: true, color: "#00ffcc", opacity: 0.6 },
          move: { enable: true, speed: 2 },
        },
      }}
    />
  );
};

export default Background;