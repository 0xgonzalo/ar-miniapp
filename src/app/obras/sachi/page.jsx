'use client';
import dynamic from "next/dynamic";
const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });
import Model from "@/components/model";

export default function Page() {

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-start">
      <ModelComponent 
        model={<Model modelUrl="/models/sachi.glb" />} 
        target={"/targets/sachi.mind"}
        scale={1.3}
        position={[0,3,-2]}
        ligths={<SceneLights />}  
        />
    </div>
  );
}
function SceneLights() {

  return(
  <>
    <directionalLight position={[0,30,0]} intensity={1.5}/> 
    <directionalLight position={[0,-30,0]} intensity={1.5}/> 
    <directionalLight position={[0,-30,0]} intensity={1.5}/> 
  </>
)}