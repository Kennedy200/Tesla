import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

export default function ThreeDModel() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting - Ambient and Spot
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Brighter Ambient
    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(10, 20, 10);
    scene.add(ambientLight, spotLight);

    // Load Model
    const loader = new GLTFLoader();
    loader.load('/Models/tesla_cybertrucks.glb', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Adjust Model Size and Position to Center
      model.scale.set(0.9, 0.9, 0.9);
      model.position.set(0, -1, 0);
      model.rotation.y = Math.PI / 6;

      // Model Material Shine
      model.traverse((node) => {
        if (node.isMesh) {
          node.material.roughness = 0.15;
          node.material.metalness = 0.85;
        }
      });

      // GSAP Model Upwards Animation
      gsap.to(model.position, {
        y: 0,
        duration: 2,
        ease: 'power2.out',
      });

      // Infinite Rotation Animation
      gsap.to(model.rotation, {
        y: Math.PI * 2,
        duration: 12,
        repeat: -1,
        ease: 'none',
      });

      // Responsive Resizing
      const resizeHandler = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', resizeHandler);
      resizeHandler();

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      camera.position.set(0, 2, 6); // Adjust for centered view

      // Cleanup
      return () => {
        window.removeEventListener('resize', resizeHandler);
        mountRef.current.removeChild(renderer.domElement);
      };
    });
  }, []);

  return <div ref={mountRef} className="w-full h-screen" />;
}
