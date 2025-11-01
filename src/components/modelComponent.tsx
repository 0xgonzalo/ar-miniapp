// @ts-nocheck
'use client';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef } from 'react';
import type { ModelComponentProps } from '@/types';

const ARView = dynamic(() => import('react-three-mind').then((mod) => mod.ARView), { ssr: false });
const ARAnchor = dynamic(() => import('react-three-mind').then((mod) => mod.ARAnchor), { ssr: false });

interface LoadingSpinnerProps {
  size?: number;
}

export default function ModelComponent({
  model,
  target = `/targets/objects.mind`,
  scale = 1,
  position = [0, 0, 0],
  ligths
}: ModelComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cleanup function to prevent WebGL context loss
    return () => {
      // Clean up WebGL context and canvas properly
      if (containerRef.current) {
        const canvases = containerRef.current.querySelectorAll('canvas');
        canvases.forEach(canvas => {
          // First, try to get and lose the WebGL context
          const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
          if (gl) {
            const loseContextExt = gl.getExtension('WEBGL_lose_context');
            if (loseContextExt) {
              loseContextExt.loseContext();
            }
          }
          // Remove the canvas from DOM
          canvas.remove();
        });
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Suspense fallback={
        <div className="h-[50vh] flex justify-center items-center">
          <div className="w-12">
            <LoadingSpinner size={12} />
          </div>
        </div>
      }>
        <ARView
          autoplay={true}
          imageTargets={target}
          filterMinCF={0.0001}
          filterBeta={1}
          missTolerance={10}
          warmupTolerance={0}
        >
          <ARAnchor target={0}>
            <group scale={scale} position={position}>
              {model}
            </group>
            {ligths}
          </ARAnchor>
        </ARView>
      </Suspense>
    </div>
  );
}

function LoadingSpinner({ size = 8 }: LoadingSpinnerProps) {
  return (
    <div>
      <svg
        aria-hidden="true"
        className={`w-${size} h-${size} mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-fomo-pri-two`}
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
    </div>
  );
}
