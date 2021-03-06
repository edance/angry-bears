// Generated by CoffeeScript 1.3.1
var Application, a;

Application = (function() {

  Application.name = 'Application';

  function Application() {
    var that;
    this.lastUpdate = 0;
    this.request = void 0;
    that = this;
    this.gameLoop = function() {
      var timeDiff;
      if (!e.running) {
        cancelAnimFrame(a.request);
      }
      timeDiff = new Date().getTime() - that.lastUpdate;
      that.lastUpdate = that.lastUpdate + timeDiff;
      e.update(timeDiff);
      e.draw();
      return that.request = requestAnimFrame(that.gameLoop);
    };
  }

  Application.prototype.run = function() {
    e.running = true;
    e.initialize();
    return this.gameLoop();
  };

  return Application;

})();

a = new Application();
