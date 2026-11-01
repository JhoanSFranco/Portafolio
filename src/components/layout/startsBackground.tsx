import {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial} from '@react-three/drei'

function StartField(props: Record<string, any>){
    const ref = useRef<any>(null);

    const [positions] = useState(() => {
        const cords = new Float32Array(2000 * 3);
        for(let i = 0; i < 2000 * 3; i += 3){
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const r = Math.cbrt(Math.random()) * 1*2;

            cords[i] = r * Math.sin(phi) * Math.cos(theta);
            cords[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            cords[i + 2] = r * Math.cos(phi);
        }
        return cords;
    });

    useFrame((_state, delta) => {
        if (ref.current) {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
        }
    });

    return(
        <group rotation={[0,0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color= {'#f7f7f7'}
                size={0.002} 
                sizeAttenuation={true} 
                depthWrite={false}/>
            </Points>
        </group>
    );
}

export default function StartsBackground(){
    return(
        <div style={{position: 'fixed', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, #b7e3f5 0%, #133b53 100%)', pointerEvents: 'none'}}>
            <Canvas camera={{position: [0,0,1]}}>
                <StartField/>
            </Canvas>
        </div>

    );
}