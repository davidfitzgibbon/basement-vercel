import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Threeasy from "threeasy";

import Triangle from "./Triangle";
import Mountains from "./Mountains";
import Floor from "./Floor";
import Stars from "./Stars";
import PostProcessing from "./PostProcessing";

window.app = new Threeasy(THREE);

app.renderer.toneMapping = THREE.ACESFilmicToneMapping;

new OrbitControls(app.camera, app.renderer.domElement);
app.camera.position.y += 0.1;
app.camera.position.z += 1;
app.camera.lookAt(0, 0, 0);

app.triangle = new Triangle(app);
app.mountains = new Mountains(app);
app.floor = new Floor(app);
app.stars = new Stars(app);
app.postprocessing = new PostProcessing(app);
