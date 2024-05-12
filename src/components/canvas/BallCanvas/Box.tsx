import React, { useRef, useEffect, Fragment } from 'react';
import * as THREE from 'three';
import { technologies } from '../../../constants';

export function Box() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current?.appendChild(renderer.domElement);

    // Define image textures
    const textureLoader = new THREE.TextureLoader();
    const textures = [
        textureLoader.load(technologies[0].icon),
        textureLoader.load(technologies[1].icon),
        textureLoader.load(technologies[2].icon),
        textureLoader.load(technologies[3].icon),
        textureLoader.load(technologies[4].icon),
        textureLoader.load(technologies[5].icon),
        textureLoader.load(technologies[0].icon),
        textureLoader.load(technologies[1].icon),
        textureLoader.load(technologies[2].icon),
        textureLoader.load(technologies[3].icon),
        textureLoader.load(technologies[4].icon),
        textureLoader.load(technologies[5].icon)
    ];

    // Create a box geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    // Create an array of materials with different textures for each side of the box
    const materials = [];
    for (let i = 0; i < 6; i++) {
      materials.push(new THREE.MeshBasicMaterial({ map: textures[i] }));
    }

    // Create a mesh with the box geometry and materials
    const cube = new THREE.Mesh(geometry, materials);

    // Add the cube to the scene
    scene.add(cube);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    // Start the render loop
    animate();

    // Cleanup
    return () => {
      scene.remove(cube);
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default Box;
