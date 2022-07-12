const fragment = /*glsl*/ `
uniform float amount;
uniform sampler2D tDiffuse;
uniform float time;
varying vec2 vUv;
void main() {
  float safe = .3;
  float danger = 1.0 - safe;
  float count = 17.;
  float speed = .05;

  float t = fract(time*speed);
  float x = step(.9, pow(fract(vUv.x * count), 5.)) ;
  float y = step(.9, pow(fract(abs(vUv.y + t) * count), 5.));

  float result = x + y;
  
  vec3 color = vec3(result);
  gl_FragColor = vec4( color, color+.97);
}
`;
export default fragment;
