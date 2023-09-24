const table = [
    "R", "Rasyed", "35 M", 1, 1,
    "B", "Basit", "39 M", 18, 1,
    "A", "Abbas", "41 M", 1, 2,
    "A", "Aziz", "42 M", 2, 2,
    "A", "Abdullah", "38 M", 13, 2,
    "A", "Abe", "35 M", 14, 2,
    "A", "Abiz", "36 M", 15, 2,
    "A", "Afiq", "28 M", 16, 2,
    "A", "Afizi", "27 M", 17, 2,
    "A", "Afzal", "27 M", 18, 2,
    "F", "Fath", "29 M", 1, 3,
    "S", "Shairazi", "28 M", 2, 3,
    "S", "Syafiq", "29 M", 13, 3,
    "A", "Azamuddin", "30 M", 14, 3,
    "F", "Fauzi", "32 M", 15, 3,
    "I", "Imran", "25 M", 16, 3,
    "S", "Syahiruddin", "27 M", 17, 3,
    "H", "Haziq", "23 M", 18, 3,
    "S", "Sadiqin", "24 M", 1, 4,
    "N", "Najmuddin", "22 M", 2, 4,
    "A", "Ansary", "25 M", 3, 4,
    "H", "Humaira", "25 F", 4, 4,
    "F", "Fikri", "26 M", 5, 4,
    "M", "Maisara", "28 F", 6, 4,
    "H", "Haikal", "27 M", 7, 4,
    "A", "Afnan", "22 M", 8, 4,
    "Z", "Zulkifli", "30 M", 9, 4,
    "H", "Haqif", "18 M", 10, 4,
    "A", "Alvin", "25 M", 11, 4,
    "A", "Afiqah", "21 F", 12, 4,
    "A", "Amer", "32 M", 13, 4,
    "A", "Amin", "33 M", 14, 4,
    "A", "Amir", "26 M", 15, 4,
    "A", "Amirah", "27 F", 16, 4,
    "A", "Amiruddin", "25 M", 17, 4,
    "A", "Amirul", "25 M", 18, 4,
    "A", "Anip", "24 M", 1, 5,
    "Y", "Yen", "29 M", 2, 5,
    "A", "Arif", "28 M", 3, 5,
    "A", "Arman", "30 M", 4, 5,
    "A", "Asyraf", "30 M", 5, 5,
    "A", "Ayadi", "34 M", 6, 5,
    "A", "Azrul", "27 M", 7, 5,
    "B", "Badrul", "25 M", 8, 5,
    "B", "Beedu", "26 M", 9, 5,
    "C", "Cai", "22 M", 10, 5,
    "C", "Chin", "25 M", 11, 5,
    "E", "Emma", "29 F", 12, 5,
    "D", "Danish", "27 M", 13, 5,
    "F", "Fansuri", "31 M", 14, 5,
    "S", "Sazali", "25 M", 15, 5,
    "I", "Ikhwan", "25 M", 16, 5,
    "D", "David", "28 M", 17, 5,
    "E", "Eilzaf", "28 M", 18, 5,
    "D", "Duwub", "24 M", 1, 6,
    "A", "Azry", "33 M", 2, 6,
    "E", "Eliass", "34 M", 4, 9,
    "F", "Firdaus", "30 M", 5, 9,
    "A", "Ahmad", "35 M", 6, 9,
    "E", "Ene", "33 M", 7, 9,
    "E", "Epoy", "32 M", 8, 9,
    "E", "Eugene", "32 F", 9, 9,
    "E", "Eyqa", "30 F", 10, 9,
    "F", "Fadhil", "30 M", 11, 9,
    "W", "Wahab", "32 M", 12, 9,
    "F", "Fahmi", "31 M", 13, 9,
    "R", "Rosli", "24 M", 14, 9,
    "F", "Faiz", "21 M", 15, 9,
    "F", "Faizal", "28 M", 16, 9,
    "F", "Fakhruddin", "27 M", 17, 9,
    "F", "Fakhrul", "28 M", 18, 9,
    "E", "Eyza", "28 F", 4, 6,
    "F", "Farhan", "29 M", 5, 6,
    "R", "Raji", "27 M", 6, 6,
    "F", "Faris", "25 M", 7, 6,
    "F", "Fatin", "25 F", 8, 6,
    "F", "Fealicia", "32 F", 9, 6,
    "F", "Fifi", "30 F", 10, 6,
    "F", "Fikri", "31 M", 11, 6,
    "S", "Sazali", "30 M", 12, 6,
    "F", "Fuad", "32 M", 13, 6,
    "H", "Hafeizzul", "34 M", 14, 6,
    "H", "Hafis", "25 M", 15, 6,
    "H", "Hafiz", "25 M", 16, 6,
    "H", "Hafizah", "36 M", 17, 6,
    "H", "Hairi", "34 M", 18, 6,
    "H", "Hatem", "30 M", 1, 7,
    "H", "Hasif", "25 M", 2, 7,
    "H", "Helmy", "35 M", 4, 10,
    "H", "Hilmi", "33 M", 5, 10,
    "N", "Naufal", "30 M", 6, 10,
    "I", "Ieyda", "29 F", 7, 10,
    "I", "Ifham", "28 M", 8, 10,
    "I", "Ihsan", "27 M", 9, 10,
    "I", "Ijlal", "29 M", 10, 10,
    "I", "Ikhwan", "25 M", 11, 10,
    "I", "Iqbal", "25 M", 12, 10,
    "M", "Mustafa", "25 M", 13, 10,
    "I", "Irfan", "19 M", 14, 10,
    "Z", "Zulkarnain", "20 M", 15, 10,
    "J", "Joshua ", "21 M", 16, 10,
    "K", "Khairul", "18 M", 17, 10,
    "L", "Lokman", "22 M", 18, 10,
    "M", "Man", "25 M", 4, 7,
    "M", "Mie", "26 M", 5, 7,
    "A", "Azrul", "28 M", 6, 7,
    "N", "Naim", "27 M", 7, 7,
    "A", "Azizan", "25 M", 8, 7,
    "N", "Mariah", "27 F", 9, 7,
    "Q", "Qamarul", "29 M", 10, 7,
    "R", "Razen", "38 M", 11, 7,
    "K", "Kasim", "37 M", 12, 7,
    "S", "Shafiq", "30 M", 13, 7,
    "S", "Shah", "28 M", 14, 7,
    "S", "Sya", "25 F", 15, 7,
    "W", "Wan", "25 M", 16, 7,
    "W", "Wieldhan", "25 M", 17, 7,
    "Z", "Zairul", "25 M", 18, 7
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: [], cone: []};


init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');
    addClickListener(targets.cone, 'cone');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
  
    // Check the gender (case-insensitive) and set the color accordingly
    const gender = detectAlphabetLetter(table[i + 2].trim().toLowerCase()); // Trim whitespace and convert to lowercase
  
    if (gender === 'm') {
      element.style.backgroundColor = 'rgba(0, 0, 255, 0.5';
    } else if (gender === 'f') {
      element.style.backgroundColor = 'rgba(255, 0, 0, 0.5';
    }
  
    // Create the table elements
    /**let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);**/
  
    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);
  
    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);
  
    // Add the element to the DOM
    document.body.appendChild(element);
  
    return element;
  }
  
  function detectAlphabetLetter(str) {
    // Remove all spaces and numbers from the string.
    str = str.replace(/\d|\s/g, '');
  
    // Get the last character of the string.
    const letter = str[str.length - 1];
  
    // Return the character if it is an alphabet letter.
    return /[a-zA-Z]/.test(letter) ? letter : null;
  }
  


function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();
    let coneVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
        addConeObject(coneVector, i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function addConeObject(coneVector, index) {
    const theta = index * 4 + Math.PI;
    const y = - (index *12 ) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(theta, y);

    coneVector.x = object.position.x * 2;
    coneVector.y = object.position.y;
    coneVector.z = object.position.z * 2;

    object.lookAt(coneVector);
    targets.cone.push(object);
}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
