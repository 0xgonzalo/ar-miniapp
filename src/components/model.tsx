// @ts-nocheck
import { useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader, useFrame } from "@react-three/fiber";
import { MathUtils, Group } from 'three';
import ControlesRotacion from "./utils/controles-rotacion";
import type { ModelProps } from '@/types';

export default function Model({
  modelUrl = "/models/objects.glb",
  rotation = [-0.01, 0.02, -0.1],
  animate = false,
  rotationSpeed = 1
}: ModelProps) {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const modelRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (animate && modelRef.current) {
      const modelRotationY = modelRef.current.rotation.y;
      modelRef.current.rotation.y = MathUtils.damp(modelRotationY, modelRotationY + rotationSpeed, 1, delta);
    }
  });

  return (
    <group position={[0, -3.5, -1.5]}>
      <ControlesRotacion>
        <primitive
          scale={1}
          rotation={rotation}
          object={gltf.scene}
          ref={modelRef}
        />
      </ControlesRotacion>
    </group>
  );
}
