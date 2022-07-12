import * as THREE from "three";
import ThreeasyComponent from "threeasy/component";

import fragment from "./fragment";
import vertex from "./vertex";

export default class Mountain extends ThreeasyComponent {
  constructor(app, color = 1, pos = 0, wireframe = true) {
    super(app);

    const w = 10;
    const h = 1;
    const multiplier = 10;

    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: color },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
      wireframe: wireframe,
      side: THREE.DoubleSide,
    });
    this.geo = new THREE.PlaneGeometry(w, h, w * multiplier, h * multiplier);
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.mesh.rotation.x = -Math.PI * 0.5;

    this.mesh.position.y = pos;
    this.mesh.position.z = 0.45;
    this.app.scene.add(this.mesh);
  }
  animate() {
    this.mat.uniforms.time.value = this.app.clock.getElapsedTime();
  }
}
