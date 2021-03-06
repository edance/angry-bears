// Generated by CoffeeScript 1.3.1
var GLUtils, gl, glUtils;

gl = null;

GLUtils = (function() {

  GLUtils.name = 'GLUtils';

  function GLUtils() {
    this.programs = new Object();
    this.activeProgram = null;
  }

  GLUtils.prototype.addProgram = function(name, program) {
    if (this.programs['name'] != null) {
      return alert('Program named: \'{# name}\' already loaded');
    } else {
      return this.programs['name'] = program;
    }
  };

  GLUtils.prototype.loadShader = function(type, code) {
    var shader;
    shader = gl.createShader(type);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    return shader;
  };

  GLUtils.prototype.createProgram = function(vScript, fScript) {
    var fragmentShader, prog, vertexShader;
    prog = gl.createProgram();
    vertexShader = this.loadShader(gl.VERTEX_SHADER, vScript);
    fragmentShader = this.loadShader(gl.FRAGMENT_SHADER, fScript);
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    return prog;
  };

  GLUtils.prototype.deleteProgram = function(prog) {
    return gl.deleteProgram(prog);
  };

  GLUtils.prototype.deleteTexture = function(tex) {
    return gl.deleteTextures(1, tex, 0);
  };

  GLUtils.prototype.getAttrib = function(prog, attrib) {
    return gl.getAttribLocation(prog, attrib);
  };

  GLUtils.prototype.getUniform = function(prog, attrib) {
    return gl.getUniformLocation(prog, attrib);
  };

  GLUtils.prototype.initWebGL = function(canvas) {
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (error) {

    }
    if (!gl) {
      return alert('Unable to initialize WebGL. Your browser may not support it.');
    }
  };

  GLUtils.prototype.setTextureBuffer = function(buffer, offset, stride) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(this.activeProgram.textureHandle);
    return gl.vertexAttribPointer(this.activeProgram.textureHandle, 2, gl.FLOAT, false, stride, offset);
  };

  GLUtils.prototype.setVertexBuffer = function(buffer, offset, stride) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(this.activeProgram.vertexHandle);
    return gl.vertexAttribPointer(this.activeProgram.vertexHandle, 3, gl.FLOAT, false, stride, offset);
  };

  GLUtils.prototype.useCamera = function(cam, model) {
    return gl.uniformMatrix4fv(this.activeProgram.matrixHandle, false, cam.computeMVP(model));
  };

  GLUtils.prototype.useProgram = function(name) {
    var program;
    program = this.programs['name'];
    if (program != null) {
      this.activeProgram = this.programs['name'];
      return gl.useProgram(this.activeProgram.program);
    } else {
      return alert('Program: \'{# name}\' does not exist');
    }
  };

  GLUtils.prototype.useTexture = function(texture) {
    var got;
    gl.activeTexture(gl.TEXTURE0);
    got = texture.texture;
    gl.bindTexture(gl.TEXTURE_2D, got);
    return gl.uniform1i(this.activeProgram.samplerHandle, 0);
  };

  return GLUtils;

})();

glUtils = new GLUtils();
