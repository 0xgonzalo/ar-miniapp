'use client';
import dynamic from "next/dynamic";
const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });
import Model from "@/components/model";

export default function Page() {

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-start">
      <ModelComponent 
        model={<Model modelUrl="/models/bicho.glb" rotation={[0,-Math.PI/2,0]} animate={true} />} 
        target={"/targets/bicho.mind"}
        scale={10}
        position={[0,16,-20]}
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
    <directionalLight position={[0,0,30]} intensity={1.5}/> 

  </>
)}