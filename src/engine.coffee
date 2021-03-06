class Engine
  constructor: ->
    @fps = 30
    @initialized = false    
    @running = false
    @worldCam = null
    @triangle = null
    @basicProgram = 'basic'

  draw: ->
    gl.clearColor Math.random(), Math.random(), Math.random(), 1.0
    gl.clear gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT
    @bg.draw @worldCam
    @triangle.draw @worldCam

  initialize: ->
    canvas = document.getElementById 'game_canvas'  
    glUtils.initWebGL canvas
    `gl = WebGLDebugUtils.makeDebugContext(gl, function(err, funcName, args) {
      throw WebGLDebugUtils.glEnumToString(err) + ": " + funcName;
    });`
    if (gl?)   
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    else
      return @running = false
    fScript = document.getElementById('shader-fs').textContent
    vScript = document.getElementById('shader-vs').textContent
    glUtils.addProgram @basicProgram, new GLProgram vScript, fScript
    glUtils.useProgram @basicProgram
    @worldCam = new Camera2D()
    @worldCam.lookAt 0, 0
    @worldCam.setBounds -1, 1, -1, 1
    @triangle = new TriangleTest()
    @bg = new Background 'src/backgroundsample.xml'
    @bg.load()
    @initialized = true

  update: (elapsed) ->
    document.getElementById('text').textContent = elapsed

e = new Engine()