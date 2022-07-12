import * as THREE from "three";
import ThreeasyComponent from "threeasy/component";

import fragment from "./fragment";
import vertex from "./vertex";

export default class Triangle extends ThreeasyComponent {
  constructor(app) {
    super(app);

    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
    this.geo = new THREE.CylinderGeometry(1, 1, 0.1, 3, 1);
    this.mesh = new THREE.Mesh(this.geo, this.mat);
    this.mesh.rotation.x = -Math.PI * 0.5;
    this.app.scene.add(this.mesh);
  }

  animate() {
    this.mat.uniforms.time.value = this.app.clock.getElapsedTime();
  }
}
