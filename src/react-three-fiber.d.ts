import { extend } from '@react-three/fiber'
import * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    directionalLight: ReactThreeFiber.Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
    ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight, typeof THREE.PointLight>
    spotLight: ReactThreeFiber.Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>
    hemisphereLight: ReactThreeFiber.Object3DNode<THREE.HemisphereLight, typeof THREE.HemisphereLight>
    group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>
    mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  }
}
