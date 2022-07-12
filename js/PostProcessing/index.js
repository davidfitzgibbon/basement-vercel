import * as THREE from "three";
import ThreeasyComponent from "threeasy/component";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js";

export default class PostProcessing extends ThreeasyComponent {
  constructor(app) {
    super(app);

    // create a new composer
    const composer = new EffectComposer(app.renderer);
    // set it as the render function
    app.render = () => composer.render();

    // Run an initial render pass
    const renderScene = new RenderPass(app.scene, app.camera);

    // BLOOM setup
    const bloomParams = {
      exposure: 1,
      bloomStrength: 0.55,
      bloomThreshold: 0,
      bloomRadius: 0,
    };
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = bloomParams.bloomThreshold;
    bloomPass.strength = bloomParams.bloomStrength;
    bloomPass.radius = bloomParams.bloomRadius;

    // AFTERIMAGE setup
    const strength = 0.8;
    const afterimagePass = new AfterimagePass(strength);

    // run the various passes
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    composer.addPass(afterimagePass);
  }
}
