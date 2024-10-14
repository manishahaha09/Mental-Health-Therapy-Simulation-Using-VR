import * as THREE from 'three';
import Experience from './Experience.js';

export default class TopChair {
    constructor() {
        this.experience = new Experience();
        this.resources = this.experience.resources;
        this.scene = this.experience.scene;

        this.setModel();
    }

    setModel() {
        this.model = {};

        // Access the chair model from resources and add it to the scene
        this.model.group = this.resources.items.topChairModel.scene.children[0];
        this.scene.add(this.model.group);
        
        // Set the material for the mesh
        this.model.group.traverse((_child) => {
            if (_child instanceof THREE.Mesh) {
                _child.material = this.experience.world.baked.model.material;
            }
        });
    }
}
