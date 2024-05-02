'use client'
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadBaseMover } from "tsparticles-move-base";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadImageShape } from "tsparticles-shape-image";
import particlesConfig from "../Config/particlesjsConfig";
import { loadSlim } from "tsparticles-slim";
export default function ParticlesBackground() {
  async function particlesInit(engine) {
    await loadColorUpdater(engine);
    await loadCircleShape(engine);
    await loadBaseMover(engine);
    await loadSizeUpdater(engine);
    await loadOpacityUpdater(engine);
    await loadOutModesUpdater(engine);
    await loadImageShape(engine);
    await loadSlim(engine);
    
  }
  
  const particlesLoaded = useCallback(
    async (container) => {
      await console.log(container);
    },
    []
  );
  return (
    <>
    <Particles
    id="tsparticles"
    loaded={particlesLoaded}
      init={particlesInit}
      options={particlesConfig}
      className="absolute h-full "
    />
    </>
  );
}
