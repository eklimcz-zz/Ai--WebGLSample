var container, stats;
var camera, scene, renderer;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var attributes, uniforms, shaderMaterial, vc1;
var mesh, parent;
var renderPass, copyPass, effectFocus, composer, hblur, vblur;

var clock = new THREE.Clock();
var cameraControls;

init();
animate();



function init() {

    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 20);
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 1000);

    //renderer
    renderer = new THREE.WebGLRenderer({
        antialias: false
    });
    renderer.autoClear = false;
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    //lights
    var light = new THREE.DirectionalLight(0x558b8d);
    light.position.set(200, 200, 200);
    scene.add(light);

    var light2 = new THREE.DirectionalLight(0xdab088);
    light2.position.set(-200, 200, 200);
    scene.add(light2);


    var light3 = new THREE.DirectionalLight(0xffffff);
    light3.position.set(0, -100, 200);
    light3.intensity = 1.2;
    scene.add(light3);
  
    var obeyText = new Graffiti();

    // Grid
    var line_material = new THREE.LineBasicMaterial({
        color: 0x84b7df,
        linewidth: .5,
        transparent: true,
        opacity: .3
    }),
        geometry = new THREE.Geometry(),
        floor = -1,
        step = 1,
        size = 14;

    for (var i = 0; i <= size / step * 2; i++) {

        geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(-size, floor, i * step - size)));
        geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(size, floor, i * step - size)));

        geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(i * step - size, floor, -size)));
        geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(i * step - size, floor, size)));

    }

    var line = new THREE.Line(geometry, line_material, THREE.LinePieces);
    line.scale.multiplyScalar(50);
    line.position.set(0, -50, -100);
    scene.add(line);


    // Gradient Back
    var vertexShader = document.getElementById('vertexShader').textContent;
    var fragmentShader = document.getElementById('fragmentShader').textContent;
    var uniforms = {
        topColor: {
            type: "c",
            value: new THREE.Color(0x374c5f)
        },
        bottomColor: {
            type: "c",
            value: new THREE.Color(0x0d111c)
        },
        offset: {
            type: "f",
            value: 50
        },
        exponent: {
            type: "f",
            value: 1
        }
    }

    var skyGeo = new THREE.SphereGeometry(1500, 32, 15);
    var skyMat = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: uniforms,
        side: THREE.BackSide
    });
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000
    });
    var sky = new THREE.Mesh(skyGeo, skyMat);
    sky.position.set(0, 0, 0);
    scene.add(sky);

    initPostProcessing();
   
    cameraControls = new THREEx.DragPanControls(camera)

    window.addEventListener('resize', onWindowResize, false);

}

function initPostProcessing() {

    //Create Shader Passes
    var renderModel = new THREE.RenderPass(scene, camera);
    copyPass = new THREE.ShaderPass(THREE.CopyShader);
    composer = new THREE.EffectComposer(renderer);
    composer.addPass(renderModel);
    composer.addPass(copyPass);
    copyPass.renderToScreen = true;
    toggleEffects();
}

function toggleEffects() {

    composer = new THREE.EffectComposer(renderer);
    composer.addPass(new THREE.RenderPass(scene, camera));

    var effectFXAA = new THREE.ShaderPass(THREE.FXAAShader);
    var width = window.innerWidth || 2;
    var height = window.innerHeight || 2;
    effectFXAA.uniforms['resolution'].value.set(1 / width, 1 / height);
    composer.addPass(effectFXAA);

    var effectFilm = new THREE.FilmPass(0.1, 0.125, 2048, false);
    composer.addPass(effectFilm);

    var effectBloom = new THREE.BloomPass(.45);
    composer.addPass(effectBloom);

    var vignettePass = new THREE.ShaderPass(THREE.VignetteShader);
    vignettePass.uniforms["darkness"].value = 1.1;
    vignettePass.uniforms["offset"].value = 1;
    vignettePass.renderToScreen = true;
    composer.addPass(vignettePass);


}


function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}


function animate() {

    requestAnimationFrame(animate);
    render();
}

function render() {

    cameraControls.update();
    renderer.clear();
    composer.render(0.05);

}