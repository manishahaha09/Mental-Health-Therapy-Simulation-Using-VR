import * as THREE from 'three'
import Experience from './Experience.js'

export default class ElgatoLight
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
    }

    setModel()
    {
        this.model = {}

    }
}
