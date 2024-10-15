import * as THREE from 'three';

import Experience from './Experience.js';

export default class Screen {
    constructor(_mesh, _texturePath) {
        this.experience = new Experience();
        this.resources = this.experience.resources;
        this.debug = this.experience.debug;
        this.scene = this.experience.scene;
        this.world = this.experience.world;

        this.mesh = _mesh;
        this.texturePath = _texturePath; // Path to the static texture

        this.setModel();
    }

    setModel() {
        this.model = {};

        // Texture
        const textureLoader = new THREE.TextureLoader();
        this.model.texture = textureLoader.load(this.texturePath);

        // Material
        this.model.material = new THREE.MeshBasicMaterial({
            map: this.model.texture,
        });

        // Mesh
        this.model.mesh = this.mesh;
        this.model.mesh.material = this.model.material;
        this.scene.add(this.model.mesh);
    }

    update() {
        // Add any update logic if needed
    }
}
