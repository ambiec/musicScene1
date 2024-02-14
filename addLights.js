import { DirectionalLight } from "three";

export const addLight = () => {
    let light = new DirectionalLight(0xffffff, 1.25)
    light.position.set(-0.5, 0.5, 0.5)
    return light
}