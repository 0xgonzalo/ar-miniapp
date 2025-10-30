// @ts-nocheck
'use client';
import { useMemo, ReactNode } from 'react';
import { useThree } from '@react-three/fiber';
import { animated, useSpring } from '@react-spring/three';
import { useDrag } from '@use-gesture/react';
import * as THREE from 'three';
import type { ControlesRotacionProps } from '@/types';

export default function ControlesRotacion({ children }: ControlesRotacionProps) {
  const { size } = useThree();
  const responsiveness = 20;
  const euler = useMemo(() => new THREE.Euler(), []);
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0] as [number, number, number],
  }));

  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += (dx / size.width) * responsiveness;
    set({ rotation: euler.toArray().slice(0, 3) as [number, number, number] });
  });

  return (
    <animated.group {...bind()} {...spring}>
      {children}
    </animated.group>
  );
}
