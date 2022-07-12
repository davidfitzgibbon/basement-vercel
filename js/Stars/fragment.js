const fragment = /*glsl*/ `
uniform float amount;
uniform sampler2D tDiffuse;
uniform float time;
varying vec2 vUv;
varying vec3 vNormal;
void main() {
  float safe = .3;
  float danger = 1.0 - safe;
  float count = 17.;
  float speed = .1;

  float t = fract(time*speed) ;
  float x = vUv.x - .5;
  float y = vUv.y - .5;

  float result = x + y;
  
  vec3 color = vec3(vUv.x);
  gl_FragColor = vec4( color, 1);
}
`;
export default fragment;
