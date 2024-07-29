import { useGLTF } from '@react-three/drei';

const CopperIngot = () => {
  
  const { nodes } = useGLTF("/3D/Copper-ingot.glb");
  
  return (
    <group scale={[1, 1, 1]}>
        <mesh {...nodes.mesh_0}></mesh>
      </group>
    );
  }
  
export default CopperIngot;

useGLTF.preload("/3D/Copper-ingot.glb");