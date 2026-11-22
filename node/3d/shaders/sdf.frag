uniform vec3 uSpherePos;
uniform float uSphereRadius;
uniform vec3 uLightDir;
uniform mat4 uProjectionMatrix;
varying vec3 vWorldPos;

float sdSphere(vec3 p) {
  return length(p - uSpherePos) - uSphereRadius;
}

vec3 calcNormal(vec3 p) {
  vec2 e = vec2(0.001, 0.0);
  return normalize(vec3(
    sdSphere(p + e.xyy) - sdSphere(p - e.xyy),
    sdSphere(p + e.yxy) - sdSphere(p - e.yxy),
    sdSphere(p + e.yyx) - sdSphere(p - e.yyx)
  ));
}

void main() {
  vec3 ro = cameraPosition;
  vec3 rd = normalize(vWorldPos - cameraPosition);

  float t = 0.0;
  bool hit = false;

  for (int i = 0; i < 64; i++) {
    vec3 p = ro + rd * t;
    float d = sdSphere(p);
    if (d < 0.001) {
      hit = true;
      break;
    }
    t += d;
    if (t > 50.0) break;
  }

  if (!hit) discard;

  // Sync raymarched hit depth with Three.js depth buffer
  vec3 hitPos = ro + rd * t;
  vec4 clipPos = uProjectionMatrix * viewMatrix * vec4(hitPos, 1.0); // <-- Use uProjectionMatrix
  float ndcDepth = clipPos.z / clipPos.w;
  gl_FragDepth = (ndcDepth + 1.0) * 0.5;

  // Lambert + ambient lighting
  vec3 n = calcNormal(hitPos);
  float diff = max(dot(n, uLightDir), 0.0);
  vec3 baseColor = vec3(0.95, 0.35, 0.25);
  vec3 color = baseColor * (diff * 0.85 + 0.2);

  gl_FragColor = vec4(color, 1.0);
}
