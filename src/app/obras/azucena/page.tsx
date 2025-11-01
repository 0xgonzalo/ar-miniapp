'use client';
import dynamic from "next/dynamic";
const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });
import Model from "@/components/model";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Page() {

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-start">
      <HamburgerMenu />
      <ModelComponent 
        model={<Model modelUrl="/models/azucenas.glb" />} 
        target={"/targets/azucenas.mind"}
        scale={0.003}
        position={[0,-1,0]}
        ligths={<SceneLights />}  
        />
    </div>
  );
}
function SceneLights() {

  return(
  <>
    {/* @ts-ignore */}
    <directionalLight position={[0,30,0]} intensity={1.5}/> 
    {/* @ts-ignore */}
    <directionalLight position={[0,-30,0]} intensity={1.5}/> 
    {/* @ts-ignore */}
    <directionalLight position={[0,0,30]} intensity={1.5}/> 
  </>
)}