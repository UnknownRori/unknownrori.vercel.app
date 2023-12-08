import type { Container } from "tsparticles-engine";

type useParticlesConfig = {
  // TODO : Implement event triggered
};

function onLoadParticle(container: Container) {
  container.pause();
  setTimeout(() => container.play(), 2000);
}

export { useParticlesConfig };
export default function () {
  return onLoadParticle;
}
