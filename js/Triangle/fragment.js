const fragment = /*glsl*/ `
uniform float amount;
uniform sampler2D tDiffuse;
uniform float time;
varying vec2 vUv;
void main() {

  // rough calculations https://graphtoy.com/?f1(x,t)=frac(x)-.3&v1=false&f2(x,t)=max(f1(x),0)*(1/.7)&v2=false&f3(x,t)=pow(f2(x),3)&v3=false&f4(x,t)=1-ceil(f3(x))%20+%20f3(x)&v4=true&f5(x,t)=step(.5,frac(((pow(1.-f4(x),3))%20+%20t%20*%20.1)*9.))%20*(1/.7)&v5=true&f6(x,t)=step(f3(x),f5(x,t))&v6=false&grid=1&coords=0.6648562003946966,1.4089098911471427,1.0068654346588937
  
  float safe = .3;
  float danger = 1.0 - safe;
  float count = 9.;
  float speed = .1;
  float power = 3.;

  float x = 1. - vUv.x;
  float t = fract(time) ;

  float xShift = fract(x) - safe;
  float normalised = max(xShift,0.) * (1./danger);
  float powerCurve = pow(normalised,power);

  float stripesGradient = fract(((pow(1.-x,power)) + time * speed)*count);
  float stripes = step(.5,stripesGradient);

  float result = step(powerCurve,stripes);
  
  vec3 color = vec3(result);
  gl_FragColor = vec4( color, 1);
}
`;
export default fragment;
