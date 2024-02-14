import { 
    BoxGeometry, 
    SphereGeometry, 
    TorusGeometry, 
    MeshBasicMaterial, 
    MeshStandardMaterial, 
    MeshPhysicalMaterial,
    Mesh, 
    TextureLoader } from "three";

const loader = new TextureLoader()

export const outline = () => {
    const outlineGeometry = new TorusGeometry(2, 0.08, 10, 80) //(radius, width, height)
    const outlineMaterial = new MeshStandardMaterial({ 
        color: 0xFFC0CB,
        roughness: 0.1,
        emissive: 0x95f0f0
     })
    const outlineMesh = new Mesh(outlineGeometry, outlineMaterial)
    return outlineMesh;
}
export const outline2 = () => {
    const outline2Geometry = new TorusGeometry(2, 0.08, 10, 80) //(radius, width, height)
    const outline2Material = new MeshPhysicalMaterial({ 
        color: 0x00FFFF,
        sheen: 1,
        sheenColor: 0x00FFFF,
        reflectivity: 1,
        roughness: 0.1,
        emissive: 0xFFC0CB
    })
    const outline2Mesh = new Mesh(outline2Geometry, outline2Material)
    return outline2Mesh
}

export const ball = () => {
    const base = loader.load('/textures/Abstract_003_COLOR.jpg')
    const displace = loader.load('/textures/Abstract_003_DISP.png')
    const normal = loader.load('/textures/Abstract_003_NRM.jpg')
    const specular = loader.load('/textures/Abstract_003_SPEC.jpg')
    const ballGeometry = new SphereGeometry(1.5, 100, 100) //(radius, width, height)
    const ballMaterial = new MeshPhysicalMaterial({ 
        color: base,
        // displacementMap: displace,
        normalMap: normal,
        specularColorMap: specular,
        reflectivity: 0.8,
        roughness: 0.1,
        sheen: 1,
        sheenColor: 0xffffff,
        emissive: 0xe5c243
     })
    const ballMesh = new Mesh(ballGeometry, ballMaterial)
    return ballMesh
}

