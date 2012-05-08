// Generated by CoffeeScript 1.3.1
var Camera2D;

Camera2D = (function() {

  Camera2D.name = 'Camera2D';

  function Camera2D() {
    this.mvp = mat4.create();
    this.pMatrix = mat4.create();
    this.vMatrix = mat4.create();
    this.tX = 0;
    this.tY = 0;
    this.rA = 0;
  }

  Camera2D.prototype.computeMVP = function(model) {
    var tmod;
    mat4.translate(model, [this.tX, this.tY, 0], this.mvp);
    tmod = mat4.rotateZ(this.mvp, this.rA, this.mvp);
    mat4.multiply(this.vMatrix, this.mvp, this.mvp);
    mat4.multiply(this.pMatrix, this.mvp, this.mvp);
    return this.mvp;
  };

  Camera2D.prototype.lookAt = function(x, y) {
    return mat4.lookAt([x, y, 3], [x, y, 0], [0, 1, 0], this.vMatrix);
  };

  Camera2D.prototype.setBounds = function(left, right, bottom, top, near, far) {
    return mat4.ortho(left, right, bottom, top, near, far, this.pMatrix);
  };

  Camera2D.prototype.setRotate = function(angle) {
    return this.rA = angle;
  };

  Camera2D.prototype.setTranslate = function(x, y) {
    this.tX = x;
    return this.tY = y;
  };

  return Camera2D;

})();
