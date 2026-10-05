/* "Silk" shader (21st.dev Shader Builder) -> window.SilkBackground(container) */
(function () {
  var VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  var FRAG = [
    "#ifdef GL_FRAGMENT_PRECISION_HIGH",
    "precision highp float;",
    "#else",
    "precision mediump float;",
    "#endif",
    "uniform vec3 u_colors[8];",
    "uniform vec4 u_scene;uniform vec4 u_shape;uniform vec4 u_surface;uniform vec4 u_finish;uniform vec4 u_transform;uniform vec4 u_space;uniform vec4 u_cursor;",
    "#define u_resolution u_scene.xy",
    "#define u_time u_scene.z",
    "#define u_colorCount u_scene.w",
    "#define u_scale u_shape.x",
    "#define u_intensity u_shape.y",
    "#define u_warp u_shape.w",
    "#define u_detail u_surface.x",
    "#define u_contrast u_surface.y",
    "#define u_brightness u_surface.z",
    "#define u_saturation u_surface.w",
    "#define u_hue u_finish.x",
    "#define u_vignette u_finish.y",
    "#define u_blur u_finish.z",
    "#define u_grain u_finish.w",
    "#ifdef GL_FRAGMENT_PRECISION_HIGH",
    "#define u_seed u_transform.x",
    "#else",
    "#define u_seed mod(u_transform.x, 31.0)",
    "#endif",
    "#define u_rotate u_transform.y",
    "#define u_drift u_transform.z",
    "#define u_oklab u_transform.w",
    "#define u_offset u_space.xy",
    "#define u_mouse u_space.zw",
    "#define u_cursorPresence u_cursor.x",
    "#define u_cursorEffect u_cursor.y",
    "#define u_cursorStrength u_cursor.z",
    "#define u_cursorRadius u_cursor.w",
    "float hash21(vec2 p){",
    "#ifndef GL_FRAGMENT_PRECISION_HIGH",
    "p=mod(p,31.0);",
    "#endif",
    "p=fract(p*vec2(234.34,435.345));p+=dot(p,p+34.23);return fract(p.x*p.y);}",
    "float grainHash(vec2 p){vec3 p3=fract(vec3(p.xyx)*0.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}",
    "float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.0-2.0*f);",
    "return mix(mix(hash21(i),hash21(i+vec2(1.0,0.0)),u.x),mix(hash21(i+vec2(0.0,1.0)),hash21(i+vec2(1.0,1.0)),u.x),u.y);}",
    "float fbm(vec2 p){float v=0.0;float a=0.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.03+vec2(17.0,9.2);a*=0.5;}return v;}",
    "vec3 mixColour(vec3 a,vec3 b,float t){return mix(a,b,t);}",
    "vec3 palette(float x){float n=max(u_colorCount-1.0,1.0);float f=clamp(x,0.0,1.0)*n;vec3 col=u_colors[0];",
    "for(int i=0;i<7;i++){if(float(i)<n)col=mixColour(col,u_colors[i+1],smoothstep(0.0,1.0,clamp(f-float(i),0.0,1.0)));}return col;}",
    "vec3 shade(vec2 uv,vec2 p,float t){vec2 q=p*1.6;float amp=0.25+u_intensity*0.85;",
    "for(float i=1.0;i<5.0;i+=1.0){q.x+=amp/i*cos(i*2.4*q.y+t*0.8+u_seed);q.y+=amp/i*cos(i*1.7*q.x+t*0.6);}",
    "return palette(0.5+0.5*sin(q.x+q.y));}",
    "void main(){",
    "vec2 uv=gl_FragCoord.xy/u_resolution.xy;vec2 screenUv=uv;",
    "vec2 p=(gl_FragCoord.xy-0.5*u_resolution.xy)/min(u_resolution.x,u_resolution.y);",
    "float cursorMask=0.0;",
    "if(u_cursorPresence>0.001){",
    "vec2 cursor=(0.5*u_mouse*u_resolution.xy)/min(u_resolution.x,u_resolution.y);",
    "vec2 cursorDelta=p-cursor;",
    "if(u_cursorEffect<0.5){p+=cursor*u_cursorPresence*u_cursorStrength*0.55;}",
    "else{float cursorDistance=length(cursorDelta);vec2 cursorDirection=cursorDelta/max(cursorDistance,0.0001);",
    "cursorMask=u_cursorPresence*(1.0-smoothstep(0.0,u_cursorRadius,cursorDistance));",
    "if(u_cursorEffect<1.5){p-=cursorDirection*cursorMask*u_cursorStrength*0.24;}",
    "else if(u_cursorEffect<2.5){float ca=cursorMask*u_cursorStrength*2.2;float cc=cos(ca),cs=sin(ca);p=cursor+mat2(cc,-cs,cs,cc)*cursorDelta;}",
    "else if(u_cursorEffect<3.5){float ripple=sin(cursorDistance/max(u_cursorRadius,0.001)*18.0-u_time*5.0);p-=cursorDirection*ripple*cursorMask*u_cursorStrength*0.07;}}}",
    "uv=p*min(u_resolution.x,u_resolution.y)/u_resolution.xy+0.5;",
    "p*=u_scale;",
    "if(abs(u_rotate)>0.0001){float cr=cos(u_rotate),sr=sin(u_rotate);p=mat2(cr,-sr,sr,cr)*p;}",
    "p+=u_offset;",
    "if(u_drift>0.0001)p+=u_drift*vec2(sin(u_time*0.31),cos(u_time*0.23));",
    "if(u_warp>0.0){p+=u_warp*(vec2(fbm(p*u_detail+u_seed),fbm(p*u_detail+vec2(5.2,1.3)))-0.5);}",
    "vec3 col=shade(uv,p,u_time);",
    "if(abs(u_contrast-1.0)>0.0001)col=(col-0.5)*u_contrast+0.5;",
    "if(abs(u_saturation-1.0)>0.0001){float luma=dot(col,vec3(0.299,0.587,0.114));col=mix(vec3(luma),col,u_saturation);}",
    "if(abs(u_brightness)>0.0001)col+=u_brightness;",
    "if(u_vignette>0.0001){float vd=length(screenUv-0.5)*1.41421356;col*=1.0-u_vignette*smoothstep(0.35,1.0,vd);}",
    "if(u_grain>0.0001)col+=(grainHash(gl_FragCoord.xy+vec2(u_seed*17.0,u_seed*31.0))-0.5)*u_grain;",
    "gl_FragColor=vec4(clamp(col,0.0,1.0),1.0);}"
  ].join("\n");

  var COLORS = [0.03, 0.12, 0.06, 0.25, 0.41, 0.3, 0.48, 0.58, 0.46, 0.87, 0.87, 0.76]; // sampled from the arc photo

  window.SilkBackground = function (el) {
    var cv = document.createElement("canvas");
    cv.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
    el.appendChild(cv);
    var gl = cv.getContext("webgl", { antialias: false, alpha: false, preserveDrawingBuffer: true });
    if (!gl) return;
    function sh(type, src) {
      var s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(s));
      return s;
    }
    var pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(pr);
    gl.useProgram(pr);
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    var U = function (n) { return gl.getUniformLocation(pr, n); };
    var uc = new Float32Array(24);
    uc.set(COLORS);
    gl.uniform3fv(U("u_colors"), uc);
    gl.uniform4f(U("u_shape"), 1.5, 0.55, 0.5, 0.0);
    gl.uniform4f(U("u_surface"), 2.4, 1.0, -0.05, 1.0);
    gl.uniform4f(U("u_finish"), 0.0, 0.0, 0.0, 0.03);
    gl.uniform4f(U("u_transform"), 1.0, 0.0, 0.0, 0.0);
    var uScene = U("u_scene"), uSpace = U("u_space"), uCursor = U("u_cursor");

    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    function size() {
      var r = el.getBoundingClientRect();
      cv.width = Math.max(1, Math.round(r.width * dpr));
      cv.height = Math.max(1, Math.round(r.height * dpr));
      gl.viewport(0, 0, cv.width, cv.height);
    }
    size();
    new ResizeObserver(size).observe(el);

    var mx = 0, my = 0, tx = 0, ty = 0, pres = 0, tp = 0;
    window.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      tp = inside ? 1 : 0;
      if (inside) {
        tx = ((e.clientX - r.left) / r.width) * 2 - 1;
        ty = 1 - ((e.clientY - r.top) / r.height) * 2;
      }
    }, { passive: true });

    var visible = true, t0 = performance.now(), raf;
    var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function frame() {
      raf = 0;
      mx += (tx - mx) * 0.1; my += (ty - my) * 0.1; pres += (tp - pres) * 0.06;
      gl.uniform4f(uScene, cv.width, cv.height, ((performance.now() - t0) / 1000) * 0.86, 4.0);
      gl.uniform4f(uSpace, 0, 0, mx, my);
      gl.uniform4f(uCursor, pres, 2.0, 0.21, 0.27);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (visible && !still) raf = requestAnimationFrame(frame);
    }
    var ioReady = false;
    new IntersectionObserver(function (es) {
      // the observer's first callback is just an async snapshot of initial layout, not a real
      // "scrolled away" event; it can land mid-transform and report false-negative. Only react
      // to intersection changes that happen after that first delivery.
      if (!ioReady) { ioReady = true; return; }
      visible = es[0].isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(frame);
    }).observe(el);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden && visible && !raf) raf = requestAnimationFrame(frame);
    });
    raf = requestAnimationFrame(frame);
  };
})();
