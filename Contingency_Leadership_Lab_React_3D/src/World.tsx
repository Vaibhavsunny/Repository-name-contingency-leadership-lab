import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Text, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";

const themeMap: Record<string,{color:string;accent:string;fog:string}> = {
  theory:{color:"#8fffc7",accent:"#19c37d",fog:"#071014"},
  archive:{color:"#d8fff1",accent:"#27d7a0",fog:"#071014"},
  fiedler:{color:"#c7d0ff",accent:"#6573ff",fog:"#080a18"},
  tylenol:{color:"#ff8b82",accent:"#d92f3d",fog:"#16090b"},
  southwest:{color:"#ffdc72",accent:"#f2bd32",fog:"#06121d"},
  intel:{color:"#64e8ff",accent:"#18a7d8",fog:"#06101a"},
  adaptive:{color:"#d6ffed",accent:"#4bdc9b",fog:"#071510"},
  microsoft:{color:"#7bbcff",accent:"#3aa0ff",fog:"#07111c"},
  toyota:{color:"#ff9696",accent:"#e2262f",fog:"#10090a"},
  city:{color:"#d9d5ff",accent:"#8f72ff",fog:"#090817"},
  final:{color:"#f4fff9",accent:"#ffffff",fog:"#050708"}
};

function CameraRig({progress, mouse, theme}:{progress:number;mouse:{x:number;y:number};theme:string}) {
  const {camera} = useThree();
  const target = useRef(new THREE.Vector3());
  useFrame((_,dt)=>{
    const z = 8.5 - progress * 2.4;
    const x = Math.sin(progress * Math.PI * 2.2) * 1.2 + mouse.x * 0.28;
    const y = Math.cos(progress * Math.PI * 1.4) * 0.45 + mouse.y * 0.18;
    target.current.set(x,y,z);
    camera.position.lerp(target.current, 1 - Math.pow(0.0005,dt));
    camera.lookAt(0,0,0);
  });
  return null;
}

function LeadershipCore({progress,theme}:{progress:number;theme:string}) {
  const ref = useRef<THREE.Group>(null);
  const meta = themeMap[theme] || themeMap.theory;
  const nodes = useMemo(()=>["LEADER","FOLLOWERS","TASK","AUTHORITY","ENVIRONMENT","SITUATION"],[]);
  useFrame((_,dt)=>{
    if(!ref.current) return;
    ref.current.rotation.y += dt * (0.12 + progress * 0.2);
    ref.current.rotation.x = Math.sin(progress*Math.PI*2)*0.15;
  });
  return <group ref={ref}>
    <mesh>
      <icosahedronGeometry args={[1.55,2]}/>
      <MeshTransmissionMaterial color={meta.accent} roughness={0.22} transmission={0.82} thickness={1.2} ior={1.3} chromaticAberration={0.05} />
    </mesh>
    <mesh scale={1.16}>
      <icosahedronGeometry args={[1.55,1]}/>
      <meshBasicMaterial color={meta.accent} wireframe transparent opacity={0.3}/>
    </mesh>
    {nodes.map((n,i)=>{
      const a=(i/nodes.length)*Math.PI*2;
      return <group key={n} position={[Math.cos(a)*2.45,Math.sin(a)*1.35,Math.sin(a*2)*0.5]}>
        <mesh><sphereGeometry args={[0.08,16,16]}/><meshBasicMaterial color={meta.color}/></mesh>
        <Text fontSize={0.17} color={meta.color} anchorX="center" anchorY="middle">{n}</Text>
      </group>
    })}
  </group>
}

function Mechanism({progress,theme}:{progress:number;theme:string}) {
  const ref=useRef<THREE.Group>(null);
  const meta=themeMap[theme]||themeMap.fiedler;
  useFrame((_,dt)=>{
    if(ref.current) ref.current.rotation.y -= dt*0.18;
  });
  return <group ref={ref}>
    {[1.7,2.25,2.8].map((r,i)=><mesh key={r} rotation={[Math.PI/2,0,i*0.35+progress*1.5]}>
      <torusGeometry args={[r,0.055,10,64]}/>
      <meshBasicMaterial color={meta.accent} transparent opacity={0.35}/>
    </mesh>)}
    <mesh>
      <cylinderGeometry args={[1.15,1.15,0.22,48]}/>
      <meshStandardMaterial color={meta.accent} metalness={0.8} roughness={0.25}/>
    </mesh>
    {Array.from({length:12}).map((_,i)=>{
      const a=i/12*Math.PI*2;
      return <mesh key={i} position={[Math.cos(a)*1.75,0,Math.sin(a)*1.75]} rotation={[0,a,0]}>
        <boxGeometry args={[0.12,0.12,0.62]}/>
        <meshStandardMaterial color={meta.color} metalness={0.7} roughness={0.3}/>
      </mesh>
    })}
  </group>
}

function EnvironmentObjects({theme,progress}:{theme:string;progress:number}) {
  const meta=themeMap[theme]||themeMap.theory;
  if(theme==="tylenol") return <group>{Array.from({length:30}).map((_,i)=><mesh key={i} position={[(i%6-2.5)*1.1,Math.sin(i)*0.6,(Math.floor(i/6)-2)*0.8]}>
    <boxGeometry args={[0.35,0.12,0.18]}/><meshStandardMaterial color={i%3===0?"#d92f3d":"#f5f5f5"} emissive={i%3===0?"#5b0810":"#000000"} emissiveIntensity={0.7}/>
  </mesh>)}</group>;
  if(theme==="southwest") return <group>{[-2,-1,0,1,2].map((x,i)=><mesh key={i} position={[x*1.5,-1.4,Math.sin(x)*1.4]} rotation={[0,0,0]}>
    <boxGeometry args={[0.8,0.03,3.8]}/><meshBasicMaterial color={i%2?"#f2bd32":"#e5e5e5"}/>
  </mesh>)}<mesh position={[0,0,-1]} rotation={[0,Math.PI/2,0]}><boxGeometry args={[2.4,.12,.08]}/><meshBasicMaterial color="#ff4d59"/></mesh></group>;
  if(theme==="intel") return <group>{Array.from({length:22}).map((_,i)=><mesh key={i} position={[(i%11-5)*.65,0,(Math.floor(i/11)-1)*1.2]}>
    <boxGeometry args={[0.45,.08,.7]}/><meshStandardMaterial color={meta.accent} metalness={.65} roughness={.3}/>
  </mesh>)}</group>;
  if(theme==="toyota") return <group>{[[-1.9,-.6,0],[0,-.6,0],[1.9,-.6,0]].map((p,i)=><group key={i} position={p as [number,number,number]}>
    <mesh><boxGeometry args={[1.4,.3,.8]}/><meshStandardMaterial color={i===1?"#d9d9d9":"#262626"} metalness={.75} roughness={.22}/></mesh>
    <mesh position={[0,.35,0]}><cylinderGeometry args={[.18,.18,.8,24]}/><meshStandardMaterial color="#e2262f" metalness={.8}/></mesh>
  </group>)}</group>;
  if(theme==="microsoft") return <group>{Array.from({length:12}).map((_,i)=>{
    const a=i/12*Math.PI*2;
    return <mesh key={i} position={[Math.cos(a)*2.3,Math.sin(a)*1.1,Math.sin(a*3)*.4]}>
      <boxGeometry args={[.5,.3,.08]}/><meshBasicMaterial color={["#3aa0ff","#53b175","#f6bd45","#e25555"][i%4]} transparent opacity={.85}/>
    </mesh>
  })}</group>;
  return null;
}

function Scene({progress,theme,mouse,reduced}:{progress:number;theme:string;mouse:{x:number;y:number};reduced:boolean}) {
  const meta=themeMap[theme]||themeMap.theory;
  return <Canvas dpr={[1,1.7]} gl={{antialias:true,alpha:true}} camera={{position:[0,0,8.5],fov:42}}>
    <color attach="background" args={[meta.fog]}/>
    <fog attach="fog" args={[meta.fog,7,18]}/>
    <ambientLight intensity={0.45}/>
    <pointLight position={[4,4,5]} intensity={8} color={meta.accent}/>
    <pointLight position={[-4,-2,3]} intensity={4} color={meta.color}/>
    {!reduced && <Sparkles count={500} scale={[14,8,12]} size={1.1} speed={0.18} color={meta.color}/>}
    <Float speed={reduced?0.15:1.1} rotationIntensity={reduced?0.05:0.35} floatIntensity={reduced?0.05:0.45}>
      <LeadershipCore progress={progress} theme={theme}/>
    </Float>
    {(theme==="fiedler" || theme==="adaptive") && <Mechanism progress={progress} theme={theme}/>}
    <EnvironmentObjects theme={theme} progress={progress}/>
    <CameraRig progress={progress} mouse={mouse} theme={theme}/>
    <Environment preset="night"/>
  </Canvas>
}

export default Scene;
