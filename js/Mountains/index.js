import ThreeasyComponent from "threeasy/component";
import Mountain from "./mountain";

export default class Mountains extends ThreeasyComponent {
  constructor(app, color = 1, pos = 0, wireframe = true) {
    super(app);

    this.wire = new Mountain(app);
    this.solid = new Mountain(app, 0, -0.001, false);
  }
}
