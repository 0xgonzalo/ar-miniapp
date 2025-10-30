'use client';
import dynamic from "next/dynamic";
const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });
import Model from "@/components/model";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <ModelComponent
        model={<Model modelUrl="/models/objects.glb" rotation={[0, 0, 0]} animate={true} />}
        target="/targets/objects.mind"
        scale={1}
        position={[0, 0, 0]}
        ligths={<SceneLights />}
      />
    </main>
  );
}

function SceneLights() {
  return (
    <>
      {/* @ts-ignore */}
      <directionalLight position={[0, 30, 0]} intensity={1.5} />
      {/* @ts-ignore */}
      <directionalLight position={[0, -30, 0]} intensity={1.5} />
      {/* @ts-ignore */}
      <directionalLight position={[0, 0, 30]} intensity={1.5} />
    </>
  );
}
