const fragment = /*glsl*/ `
uniform float amount;
uniform sampler2D tDiffuse;
uniform float time;
uniform float color;
varying vec2 vUv;
void main() {
  
  gl_FragColor = vec4( vec3(color), 1);
}
`;
export default fragment;
