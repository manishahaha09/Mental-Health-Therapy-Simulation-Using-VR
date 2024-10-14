import * as THREE from 'three';
import Experience from './Experience.js';

export default class SimpleLeds {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time = this.experience.time;

        this.setLeds();
    }

    setLeds() {
        this.model = {};
        this.model.items = [];

        const colors = ['#196aff', '#ff0000', '#ff5d00', '#7db81b'];
        const ledCount = colors.length; // Number of LEDs

        // Create simple LED spheres
        for (let i = 0; i < ledCount; i++) {
            const geometry = new THREE.SphereGeometry(0.1, 16, 16); // Create a sphere for the LED
            const material = new THREE.MeshBasicMaterial({
                color: colors[i],
                transparent: true,
                opacity: 1 // Start fully visible
            });

            const ledMesh = new THREE.Mesh(geometry, material);
            ledMesh.position.set(i * 0.3 - (ledCount - 1) * 0.15, 0, 0); // Arrange LEDs in a row
            this.scene.add(ledMesh); // Add LED to the scene

            this.model.items.push({ mesh: ledMesh, material: material }); // Store mesh and material for updates
        }
    }

    update() {
        // Animate LED opacities for a pulsing effect
        for (const item of this.model.items) {
            item.material.opacity = Math.sin(this.time.elapsed * 0.002 - item.mesh.position.x * 2) * 0.5 + 0.5;
        }
    }
}
