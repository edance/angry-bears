// Generated by CoffeeScript 1.3.1
var GLUtils, gl, glUtils;

gl = null;

GLUtils = (function() {

  GLUtils.name = 'GLUtils';

  function GLUtils() {
    this.programs = new Object();
    this.activeProgram = null;
  }

  GLUtils.prototype.addShader = function(name, program) {
    if (programs['name'] === null) {
      return programs['name'] = program;
    } else {
      return alert('Program named: \'{# name}\' already loaded');
    }
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
    return gl.GetUniformLocation(prog, attrib);
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
    gl.vertexAttribPointer(this.activeProgram.textureHandle, 2, gl.FLOAT, false, stride, offset);
    return gl.enableVertexAttribArray(this.activeProgram.textureHandle);
  };

  GLUtils.prototype.setVertexBuffer = function(buffer, offset, stride) {
    gl.vertexAttribPointer(this.activeShader.vertexHandle, 3, gl.FLOAT, false, stride, offset);
    return gl.enableVertexAttribArray(this.activeShader.vertexHandle);
  };

  GLUtils.prototype.useCamera = function(cam, model) {
    return gl.uniformMatrix4fv(this.activeProgram.matrixHandle, 1, false, cam.computeMVP(model), 0);
  };

  GLUtils.prototype.useProgram = function(name) {
    var shader;
    shader = this.programs['name'];
    if (shader != null) {
      this.activeShader = this.programs['name'];
      return gl.useProgram(this.activeProgram.program);
    } else {
      return alert('Program: \'{# name}\' does not exist');
    }
  };

  GLUtils.prototype.useTexture = function(texture) {
    if (texture.isLoaded()) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture.getTexture());
      return gl.uniform1i(this.activeProgram.samplerHandle, 0);
    } else {
      return alert('Texture has not yet loaded');
    }
  };

  return GLUtils;

})();

glUtils = new GLUtils();
