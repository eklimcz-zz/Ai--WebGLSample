function Graffiti() {

    var parent = new THREE.Object3D();

    var extrudeSettings = {
        bevelEnabled: false,
        bevelSegments: 0,
        steps: 20,
        amount: 5
    };
    var extrudeSettings2 = {
        bevelEnabled: true,
        bevelThickness: 3.0,
        bevelSize: 1,
        bevelSegments: 10,
        steps: 20,
        amount: 50
    };

    //Exported Paths from Illustrator 
    var outline1 = new THREE.Shape();
    outline1.moveTo(230.6, 52.7);
    outline1.lineTo(217.2, 59.0);
    outline1.lineTo(218.7, 64.2);
    outline1.lineTo(235.2, 59.0);
    outline1.lineTo(230.6, 52.7);

    var outline2 = new THREE.Shape();
    outline2.moveTo(42.6, 41.6);
    outline2.lineTo(43.6, 106.1);
    outline2.lineTo(57.4, 104.5);
    outline2.lineTo(56.4, 37.9);
    outline2.lineTo(42.6, 41.6);

    var outline3 = new THREE.Shape();
    outline3.moveTo(346.9, 132.9);
    outline3.lineTo(342.1, 43.2);
    outline3.lineTo(342.1, 43.1);
    outline3.lineTo(342.1, 43.0);
    outline3.lineTo(342.0, 41.9);
    outline3.lineTo(341.4, 37.1);
    outline3.lineTo(336.6, 37.5);
    outline3.lineTo(311.7, 39.2);
    outline3.lineTo(310.6, 39.3);
    outline3.lineTo(310.9, 36.5);
    outline3.lineTo(307.4, 35.1);
    outline3.lineTo(267.2, 18.7);
    outline3.lineTo(261.5, 16.4);
    outline3.lineTo(260.4, 22.4);
    outline3.lineTo(256.5, 43.2);
    outline3.lineTo(253.8, 34.6);
    outline3.lineTo(253.1, 32.4);
    outline3.lineTo(251.0, 31.5);
    outline3.lineTo(226.0, 21.0);
    outline3.lineTo(225.0, 20.6);
    outline3.lineTo(223.8, 20.6);
    outline3.lineTo(192.3, 22.2);
    outline3.lineTo(189.7, 22.4);
    outline3.lineTo(188.3, 24.6);
    outline3.lineTo(173.0, 50.0);
    outline3.lineTo(172.4, 47.6);
    outline3.lineTo(171.7, 45.0);
    outline3.lineTo(169.2, 44.1);
    outline3.lineTo(148.0, 36.7);
    outline3.lineTo(146.3, 36.1);
    outline3.lineTo(149.1, 33.4);
    outline3.lineTo(145.3, 29.9);
    outline3.lineTo(116.7, 2.7);
    outline3.lineTo(113.8, 0.0);
    outline3.lineTo(110.5, 2.2);
    outline3.lineTo(109.8, 2.7);
    outline3.lineTo(109.4, 3.0);
    outline3.lineTo(109.2, 3.1);
    outline3.bezierCurveTo(109.0, 3.3, 108.6, 3.6, 107.7, 4.3);
    outline3.bezierCurveTo(106.3, 5.4, 104.6, 7.0, 102.6, 9.3);
    outline3.bezierCurveTo(100.8, 11.3, 98.7, 13.9, 96.3, 17.2);
    outline3.bezierCurveTo(93.9, 20.6, 91.5, 24.8, 89.1, 29.7);
    outline3.bezierCurveTo(88.3, 31.5, 87.5, 33.3, 86.8, 35.2);
    outline3.lineTo(82.0, 25.2);
    outline3.lineTo(80.8, 22.8);
    outline3.lineTo(78.2, 22.4);
    outline3.lineTo(43.1, 17.0);
    outline3.lineTo(41.1, 16.7);
    outline3.lineTo(39.4, 17.9);
    outline3.lineTo(9.7, 40.2);
    outline3.lineTo(8.0, 41.5);
    outline3.lineTo(7.8, 43.6);
    outline3.lineTo(0.3, 104.3);
    outline3.lineTo(0.0, 106.4);
    outline3.lineTo(1.3, 108.0);
    outline3.lineTo(18.1, 129.8);
    outline3.lineTo(19.6, 132.1);
    outline3.lineTo(22.1, 132.1);
    outline3.lineTo(73.5, 132.1);
    outline3.lineTo(75.9, 132.1);
    outline3.lineTo(77.4, 129.9);
    outline3.lineTo(79.2, 127.6);
    outline3.lineTo(79.6, 131.8);
    outline3.lineTo(85.7, 129.5);
    outline3.lineTo(116.8, 117.7);
    outline3.lineTo(132.6, 128.1);
    outline3.lineTo(134.4, 129.3);
    outline3.lineTo(136.6, 128.7);
    outline3.lineTo(184.6, 116.0);
    outline3.lineTo(189.4, 114.7);
    outline3.lineTo(189.2, 114.1);
    outline3.lineTo(239.0, 113.0);
    outline3.lineTo(221.9, 127.5);
    outline3.lineTo(217.6, 131.2);
    outline3.lineTo(221.7, 135.0);
    outline3.lineTo(248.8, 160.5);
    outline3.lineTo(250.8, 162.3);
    outline3.lineTo(253.4, 161.7);
    outline3.lineTo(302.8, 149.7);
    outline3.lineTo(312.2, 147.4);
    outline3.lineTo(305.0, 141.1);
    outline3.lineTo(302.7, 139.1);
    outline3.lineTo(321.2, 144.8);
    outline3.lineTo(322.8, 145.3);
    outline3.lineTo(324.3, 144.7);
    outline3.lineTo(343.6, 137.9);
    outline3.lineTo(347.1, 136.7);
    outline3.lineTo(346.9, 132.9);


    var outline4 = new THREE.Shape();
    outline4.moveTo(123.5, 68.1);
    outline4.bezierCurveTo(123.1, 70.1, 122.7, 72.6, 122.5, 74.7);
    outline4.bezierCurveTo(122.3, 76.9, 122.1, 79.0, 121.9, 81.0);
    outline4.bezierCurveTo(121.7, 85.8, 121.7, 90.2, 121.9, 94.2);
    outline4.lineTo(127.0, 90.6);
    outline4.lineTo(140.9, 107.1);
    outline4.lineTo(144.7, 107.1);
    outline4.lineTo(136.9, 68.1);
    outline4.lineTo(123.5, 68.1);

    var outline5 = new THREE.Shape();
    outline5.moveTo(130.8, 87.3);
    outline5.lineTo(127.8, 83.7);
    outline5.lineTo(126.8, 84.5);
    outline5.bezierCurveTo(126.8, 83.5, 126.9, 82.4, 126.9, 81.4);
    outline5.bezierCurveTo(127.1, 79.5, 127.2, 77.4, 127.5, 75.3);
    outline5.bezierCurveTo(127.5, 74.6, 127.6, 74.1, 127.7, 73.1);
    outline5.lineTo(132.8, 73.1);
    outline5.lineTo(137.1, 94.6);
    outline5.lineTo(130.8, 87.3);

    var outline6 = new THREE.Shape();
    outline6.moveTo(78.3, 67.1);
    outline6.bezierCurveTo(77.1, 75.7, 76.6, 84.8, 76.6, 94.3);
    outline6.bezierCurveTo(76.7, 102.6, 77.3, 111.4, 78.4, 120.4);
    outline6.bezierCurveTo(78.4, 120.5, 78.4, 120.8, 78.4, 120.9);
    outline6.lineTo(73.5, 127.1);
    outline6.lineTo(22.1, 127.1);
    outline6.lineTo(5.2, 105.3);
    outline6.lineTo(12.7, 44.4);
    outline6.lineTo(42.4, 22.0);
    outline6.lineTo(77.5, 27.4);
    outline6.lineTo(84.4, 41.6);
    outline6.bezierCurveTo(84.3, 41.8, 84.2, 42.0, 84.2, 42.2);
    outline6.bezierCurveTo(83.6, 43.9, 83.0, 45.6, 82.5, 47.3);
    outline6.bezierCurveTo(80.7, 53.4, 79.3, 60.1, 78.3, 67.1);

    var outline7 = new THREE.Shape();
    outline7.moveTo(135.3, 123.9);
    outline7.lineTo(117.4, 112.1);
    outline7.lineTo(83.9, 124.8);
    outline7.lineTo(83.8, 123.5);
    outline7.bezierCurveTo(83.8, 123.0, 83.7, 122.5, 83.6, 121.9);
    outline7.bezierCurveTo(83.3, 119.6, 83.1, 117.3, 82.8, 115.1);
    outline7.bezierCurveTo(82.1, 107.9, 81.7, 101.0, 81.6, 94.3);
    outline7.bezierCurveTo(81.6, 85.0, 82.1, 76.2, 83.3, 67.8);
    outline7.bezierCurveTo(84.2, 61.0, 85.5, 54.7, 87.3, 48.7);
    outline7.bezierCurveTo(87.3, 48.7, 87.3, 48.7, 87.3, 48.7);
    outline7.bezierCurveTo(88.0, 46.3, 88.8, 44.1, 89.6, 41.9);
    outline7.bezierCurveTo(90.8, 38.4, 92.2, 35.1, 93.6, 31.9);
    outline7.bezierCurveTo(95.9, 27.2, 98.1, 23.3, 100.4, 20.1);
    outline7.bezierCurveTo(102.7, 17.0, 104.6, 14.5, 106.3, 12.6);
    outline7.bezierCurveTo(108.1, 10.6, 109.6, 9.2, 110.7, 8.3);
    outline7.bezierCurveTo(111.9, 7.4, 112.5, 6.9, 112.6, 6.8);
    outline7.lineTo(113.3, 6.4);
    outline7.lineTo(141.9, 33.5);
    outline7.lineTo(141.1, 34.3);
    outline7.bezierCurveTo(138.5, 36.7, 136.2, 39.3, 134.3, 42.0);
    outline7.bezierCurveTo(132.3, 44.8, 130.7, 47.7, 129.2, 50.6);
    outline7.lineTo(146.4, 41.5);
    outline7.lineTo(167.5, 48.8);
    outline7.lineTo(183.3, 111.2);
    outline7.lineTo(135.3, 123.9);

    var outline8 = new THREE.Shape();
    outline8.moveTo(188.7, 109.1);
    outline8.lineTo(174.8, 56.5);
    outline8.lineTo(192.6, 27.2);
    outline8.lineTo(224.1, 25.6);
    outline8.lineTo(249.0, 36.1);
    outline8.lineTo(254.5, 53.7);
    outline8.lineTo(256.0, 58.5);
    outline8.lineTo(253.4, 59.5);
    outline8.lineTo(221.6, 71.9);
    outline8.lineTo(228.3, 86.3);
    outline8.lineTo(236.2, 84.5);
    outline8.lineTo(249.3, 61.5);
    outline8.lineTo(252.8, 62.6);
    outline8.lineTo(257.6, 64.2);
    outline8.lineTo(264.7, 66.5);
    outline8.lineTo(253.4, 86.4);
    outline8.lineTo(248.7, 94.6);
    outline8.lineTo(241.2, 107.9);
    outline8.lineTo(188.7, 109.1);

    var outline9 = new THREE.Shape();
    outline9.moveTo(322.7, 140.0);
    outline9.lineTo(281.7, 127.4);
    outline9.lineTo(301.7, 144.8);
    outline9.lineTo(252.3, 156.8);
    outline9.lineTo(225.1, 131.3);
    outline9.lineTo(248.5, 111.5);
    outline9.lineTo(290.4, 116.3);
    outline9.lineTo(290.8, 109.8);
    outline9.lineTo(266.0, 107.1);
    outline9.lineTo(254.8, 94.0);
    outline9.lineTo(269.1, 68.9);
    outline9.lineTo(272.1, 63.6);
    outline9.lineTo(266.3, 61.7);
    outline9.lineTo(261.7, 60.3);
    outline9.lineTo(260.7, 57.0);
    outline9.lineTo(259.6, 53.4);
    outline9.lineTo(265.3, 23.3);
    outline9.lineTo(305.5, 39.7);
    outline9.lineTo(300.0, 86.4);
    outline9.lineTo(303.5, 87.1);
    outline9.lineTo(312.1, 44.2);
    outline9.lineTo(337.0, 42.5);
    outline9.lineTo(337.1, 43.5);
    outline9.lineTo(341.9, 133.2);
    outline9.lineTo(322.7, 140.0);


    function init() {

        scene.add(parent);
        addShape(outline1, extrudeSettings, 0xffffff, -173.45, 66.45, 1, 0, 3.14, 3.14, 1);
        addShape(outline2, extrudeSettings, 0xffffff, -173.45, 66.45, 1, 0, 3.14, 3.14, 1);
        addShape(outline3, extrudeSettings2, 0xffffff, -173.45, 66.45, -4, 0, 3.14, 3.14, 1);
        addShape(outline4, extrudeSettings, 0xffffff, -173.45, 66.45, 1, 0, 3.14, 3.14, 1);
        addShape(outline5, extrudeSettings, 0x1a1a1a, -173.45, 66.45, 0, 0, 3.14, 3.14, 1);
        addShape(outline6, extrudeSettings, 0x1a1a1a, -173.45, 66.45, 0, 0, 3.14, 3.14, 1);
        addShape(outline7, extrudeSettings, 0x1a1a1a, -173.45, 66.45, 0, 0, 3.14, 3.14, 1);
        addShape(outline8, extrudeSettings, 0x1a1a1a, -173.45, 66.45, 0, 0, 3.14, 3.14, 1);
        addShape(outline9, extrudeSettings, 0x1a1a1a, -173.45, 66.45, 0, 0, 3.14, 3.14, 1);
        parent.scale.multiplyScalar(.033);
    }


    function addShape(shape, extrudeSettings, color, x, y, z, rx, ry, rz, s) {

        var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        var mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
            color: color,
            shading: THREE.FlatShading
        }));

        mesh.position.set(x, y, z);
        mesh.rotation.set(rx, ry, rz);
        mesh.scale.set(s, s, s);

        parent.add(mesh);

    }

    init();

}