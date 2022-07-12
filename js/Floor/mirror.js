import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import ThreeasyComponent from "threeasy/component";

export default class Mirror extends ThreeasyComponent {
  constructor(app) {
    super(app);

    this.geo = new THREE.PlaneGeometry(1, 1);

    this.mirror = new Reflector(this.geo, {
      clipBias: 0.003,
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
      color: 0xffffff,
    });

    this.mirror.rotation.x = -Math.PI * 0.5;

    this.mirror.position.y = -0.72;
    this.mirror.position.z = 2.5;
    this.mirror.scale.set(5, 5);
    this.app.scene.add(this.mirror);
  }
}
