import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import ThreeasyComponent from "threeasy/component";

export default class Stars extends ThreeasyComponent {
  constructor(app) {
    super(app);

    // set up materials and geometries
    this.mat = new THREE.MeshBasicMaterial({ color: "white" });
    this.universeGeo = new THREE.IcosahedronGeometry(10, 0);
    this.starGeo = new THREE.IcosahedronGeometry(0.02, 0);
    this.mesh = new THREE.Mesh(this.universeGeo, this.mat);

    // create a sampler from them
    const sampler = new MeshSurfaceSampler(this.mesh).build();

    // define how many stars we want, and create an InstancedMesh to hold them
    const starCount = 300;
    this.stars = new THREE.InstancedMesh(this.starGeo, this.mat, starCount);

    // some dummy objects, so we can work with object tools
    this.dummy = new THREE.Object3D();
    this.tempPos = new THREE.Vector3();
    // sample points, and apply those findings to the InstancedMesh instances
    for (let i = 0; i < starCount; i++) {
      sampler.sample(this.tempPos);
      this.dummy.position.copy(this.tempPos);
      this.dummy.updateMatrix();
      this.stars.setMatrixAt(i, this.dummy.matrix);
    }
    app.scene.add(this.stars);
  }
  animate() {
    this.stars.rotation.x += 0.001;
  }
}
