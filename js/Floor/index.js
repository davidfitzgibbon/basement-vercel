import ThreeasyComponent from "threeasy/component";

import Grid from "./grid";
import Mirror from "./mirror";

export default class Floor extends ThreeasyComponent {
  constructor(app) {
    super(app);

    const grid = new Grid(app);
    const mirror = new Mirror(app);
  }
}
