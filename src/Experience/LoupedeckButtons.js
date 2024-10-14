import * as THREE from 'three'
import Experience from './Experience.js'

export default class LoupedeckButtons
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene

        this.setModel()
    }

    setModel()
    {
        this.model = {}
        this.model.items = []

        // Children
        const children = [...this.resources.items.loupedeckButtonsModel.scene.children]
        children.sort((_a, _b) =>
        {
            if(_a.name < _b.name)
                return -1
            if(_a.name > _b.name)
                return 1
            return 0
        })

        let i = 0
        for(const _child of children)
        {
            const item = {}

            item.material = new THREE.MeshBasicMaterial({
                color: 0xffffff,  // Set the button color to white
                transparent: true
            })

            item.mesh = _child
            item.mesh.material = item.material
            this.scene.add(item.mesh)

            this.model.items.push(item)

            i++
        }
    }

    update()
    {
        // No specific updates are required; this can be left empty
    }
}
