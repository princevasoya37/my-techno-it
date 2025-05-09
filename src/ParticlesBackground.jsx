import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main); // ensures full engine is loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#0d0d0d" }
        },
        particles: {
          number: { value: 40 },
          size: { value: 60, random: true },
          opacity: { value: 0.07 },
          shape: { type: "circle" },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }
          },
          modes: {
            repulse: { distance: 100 }
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
