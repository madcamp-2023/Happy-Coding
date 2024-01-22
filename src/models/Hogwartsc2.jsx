import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Hogwartsc2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("assets/hogwartsc2.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="AAA"
          position={[-38.864, 9.071, 12.53]}
          rotation={[1.599, Math.PI / 6, -Math.PI / 2]}
          scale={0.317}
        />
        {/* 
        <mesh
          name="Plane014"
          geometry={nodes.Plane014.geometry}
          material={materials["Feather 2"]}
          position={[-30.762, 7.185, 5.607]}
          rotation={[-1.592, -0.546, 1.742]}
          scale={[0.064, 0.042, 0.042]}
        />
        <mesh
          name="Plane013"
          geometry={nodes.Plane013.geometry}
          material={materials["Feather 2"]}
          position={[-30.762, 7.185, 5.607]}
          rotation={[1.337, -0.483, -1.734]}
          scale={[0.064, 0.042, 0.042]}
        />
        <mesh
          name="Plane012"
          geometry={nodes.Plane012.geometry}
          material={materials.Feather}
          position={[-30.762, 7.185, 5.607]}
          rotation={[1.337, -0.483, -1.734]}
          scale={[0.064, 0.042, 0.042]}
        />
        <mesh
          name="Cylinder035"
          geometry={nodes.Cylinder035.geometry}
          material={materials["Bow wood"]}
          position={[-30.762, 7.185, 5.607]}
          rotation={[1.367, -0.487, -0.149]}
          scale={[0.003, 0.294, 0.003]}
        />
        <mesh
          name="Cylinder034"
          geometry={nodes.Cylinder034.geometry}
          material={materials["Bow wood"]}
          position={[-30.79, 7.202, 5.703]}
          rotation={[1.262, -0.45, -0.206]}
          scale={[0.002, 0.199, 0.002]}
        /> */}
        <group
          name="Circle008"
          position={[-30.913, 7.387, 6.074]}
          rotation={[1.311, -0.653, -0.446]}
          scale={[0.037, 0.037, 0.024]}
        >
          <mesh
            name="Circle001_1"
            geometry={nodes.Circle001_1.geometry}
            material={materials["Leather.001"]}
          />
          <mesh
            name="Circle001_2"
            geometry={nodes.Circle001_2.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Circle001_3"
            geometry={nodes.Circle001_3.geometry}
            material={materials.Black}
          />
        </group>
        <group
          name="BezierCurve010"
          position={[-30.917, 7.28, 5.661]}
          rotation={[0.81, 0.853, -1.18]}
          scale={[0.261, 0.27, 0.262]}
        >
          <mesh
            name="Mesh004"
            geometry={nodes.Mesh004.geometry}
            material={materials["Bow wood"]}
          />
          <mesh
            name="Mesh004_1"
            geometry={nodes.Mesh004_1.geometry}
            material={materials.Brass}
          />
        </group>
        <group
          name="BezierCurve000"
          position={[-30.736, 7.268, 6.157]}
          rotation={[2.658, 0.282, 0.685]}
          scale={[0.261, 0.27, 0.262]}
        >
          <mesh
            name="Mesh003"
            geometry={nodes.Mesh003.geometry}
            material={materials["Bow wood"]}
          />
          <mesh
            name="Mesh003_1"
            geometry={nodes.Mesh003_1.geometry}
            material={materials.Brass}
          />
        </group>
        <mesh
          name="Cone004"
          geometry={nodes.Cone004.geometry}
          material={nodes.Cone004.material}
          position={[-30.835, 7.232, 5.6]}
          rotation={[-1.723, 0.444, 2.612]}
          scale={[0.009, 0.018, 0.009]}
        />
        <mesh
          name="Cylinder033"
          geometry={nodes.Cylinder033.geometry}
          material={materials["Bow wood"]}
          position={[-30.841, 7.233, 5.699]}
          rotation={[1.315, -0.41, -2.671]}
          scale={[0.002, 0.199, 0.002]}
        />
        <mesh
          name="Cylinder032"
          geometry={nodes.Cylinder032.geometry}
          material={materials["Bow wood"]}
          position={[-30.835, 7.232, 5.6]}
          rotation={[1.418, -0.444, -2.612]}
          scale={[0.003, 0.294, 0.003]}
        />
        <mesh
          name="Plane011"
          geometry={nodes.Plane011.geometry}
          material={materials.Feather}
          position={[-30.841, 7.233, 5.699]}
          rotation={[1.382, -0.271, 2.07]}
          scale={[0.043, 0.028, 0.028]}
        />
        <group
          name="Cylinder031"
          position={[-30.988, 7.459, 6.577]}
          rotation={[1.513, -0.13, -0.079]}
          scale={[0.007, 0.005, 0.004]}
        >
          <mesh
            name="Cylinder033_1"
            geometry={nodes.Cylinder033_1.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Cylinder033_2"
            geometry={nodes.Cylinder033_2.geometry}
            material={materials["Hamer Silver"]}
          />
          <mesh
            name="Cylinder033_3"
            geometry={nodes.Cylinder033_3.geometry}
            material={materials.Leather}
          />
        </group>
        <mesh
          name="Cylinder030"
          geometry={nodes.Cylinder030.geometry}
          material={materials["Smooth Metal"]}
          position={[-30.988, 7.459, 6.577]}
          rotation={[1.513, -0.13, -1.65]}
          scale={[0.004, 0.048, 0.003]}
        />
        <mesh
          name="Cube018"
          geometry={nodes.Cube018.geometry}
          material={materials.Blade}
          position={[-30.988, 7.459, 6.577]}
          rotation={[-0.047, 0.079, -0.131]}
          scale={[0.015, 0.002, 0.014]}
        />
        <mesh
          name="Cube017"
          geometry={nodes.Cube017.geometry}
          material={materials.Blade}
          position={[-30.987, 7.469, 6.578]}
          rotation={[-0.55, -1.261, -0.655]}
          scale={[0.015, 0.002, 0.014]}
        />
        <mesh
          name="Cylinder029"
          geometry={nodes.Cylinder029.geometry}
          material={materials["Smooth Metal"]}
          position={[-30.987, 7.469, 6.578]}
          rotation={[1.653, -0.187, -0.249]}
          scale={[0.004, 0.048, 0.003]}
        />
        <group
          name="Cylinder028"
          position={[-30.987, 7.469, 6.578]}
          rotation={[1.653, -0.187, 1.322]}
          scale={[0.007, 0.005, 0.004]}
        >
          <mesh
            name="Cylinder030_1"
            geometry={nodes.Cylinder030_1.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Cylinder030_2"
            geometry={nodes.Cylinder030_2.geometry}
            material={materials["Hamer Silver"]}
          />
          <mesh
            name="Cylinder030_3"
            geometry={nodes.Cylinder030_3.geometry}
            material={materials.Leather}
          />
        </group>
        <group
          name="Cylinder027"
          position={[-30.987, 7.477, 6.578]}
          rotation={[1.583, -0.172, 0.484]}
          scale={[0.007, 0.005, 0.004]}
        >
          <mesh
            name="Cylinder029_1"
            geometry={nodes.Cylinder029_1.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Cylinder029_2"
            geometry={nodes.Cylinder029_2.geometry}
            material={materials["Hamer Silver"]}
          />
          <mesh
            name="Cylinder029_3"
            geometry={nodes.Cylinder029_3.geometry}
            material={materials.Leather}
          />
        </group>
        <mesh
          name="Cylinder026"
          geometry={nodes.Cylinder026.geometry}
          material={materials["Smooth Metal"]}
          position={[-30.987, 7.477, 6.578]}
          rotation={[1.583, -0.172, -1.087]}
          scale={[0.004, 0.048, 0.003]}
        />
        <mesh
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={materials.Blade}
          position={[-30.987, 7.477, 6.578]}
          rotation={[-0.078, -0.477, -0.194]}
          scale={[0.015, 0.002, 0.014]}
        />
        <mesh
          name="Cube015"
          geometry={nodes.Cube015.geometry}
          material={materials.Blade}
          position={[-35.242, 8.697, 7.307]}
          rotation={[-0.132, -0.203, -0.146]}
          scale={[0.015, 0.002, 0.014]}
        />
        <mesh
          name="Cylinder025"
          geometry={nodes.Cylinder025.geometry}
          material={materials["Smooth Metal"]}
          position={[-35.242, 8.697, 7.307]}
          rotation={[1.469, -0.143, -1.366]}
          scale={[0.004, 0.048, 0.003]}
        />
        <group
          name="Cylinder024"
          position={[-35.242, 8.697, 7.307]}
          rotation={[1.469, -0.143, 0.205]}
          scale={[0.007, 0.005, 0.004]}
        >
          <mesh
            name="Cylinder026_1"
            geometry={nodes.Cylinder026_1.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Cylinder026_2"
            geometry={nodes.Cylinder026_2.geometry}
            material={materials["Hamer Silver"]}
          />
          <mesh
            name="Cylinder026_3"
            geometry={nodes.Cylinder026_3.geometry}
            material={materials.Leather}
          />
        </group>
        <group
          name="Cylinder023"
          position={[-35.242, 8.69, 7.308]}
          rotation={[1.532, -0.177, 1.04]}
          scale={[0.007, 0.005, 0.004]}
        >
          <mesh
            name="Cylinder024_1"
            geometry={nodes.Cylinder024_1.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Cylinder024_2"
            geometry={nodes.Cylinder024_2.geometry}
            material={materials["Hamer Silver"]}
          />
          <mesh
            name="Cylinder024_3"
            geometry={nodes.Cylinder024_3.geometry}
            material={materials.Leather}
          />
        </group>
        <mesh
          name="Cylinder022"
          geometry={nodes.Cylinder022.geometry}
          material={materials["Smooth Metal"]}
          position={[-35.242, 8.69, 7.308]}
          rotation={[1.532, -0.177, -0.53]}
          scale={[0.004, 0.048, 0.003]}
        />
        <mesh
          name="Cube014"
          geometry={nodes.Cube014.geometry}
          material={materials.Blade}
          position={[-35.242, 8.69, 7.308]}
          rotation={[-0.331, -1.014, -0.34]}
          scale={[0.015, 0.002, 0.014]}
        />
        <mesh
          name="Cylinder021"
          geometry={nodes.Cylinder021.geometry}
          material={materials["Material.002"]}
          position={[-33.085, 8.306, -5.748]}
          rotation={[1.658, -0.128, 1.198]}
          scale={0.002}
        />
        <mesh
          name="Cylinder020"
          geometry={nodes.Cylinder020.geometry}
          material={materials["Material.002"]}
          position={[-39.606, 9.535, 3.186]}
          rotation={[1.488, 0.116, -2.34]}
          scale={0.002}
        />
        <mesh
          name="Cube013"
          geometry={nodes.Cube013.geometry}
          material={materials.Blade}
          position={[-35.243, 8.68, 7.308]}
          rotation={[-0.126, 0.353, -0.09]}
          scale={[0.015, 0.002, 0.014]}
        />
        <mesh
          name="Cylinder019"
          geometry={nodes.Cylinder019.geometry}
          material={materials["Smooth Metal"]}
          position={[-35.243, 8.68, 7.308]}
          rotation={[1.413, -0.085, -1.925]}
          scale={[0.004, 0.048, 0.003]}
        />
        <group
          name="Cylinder018"
          position={[-35.243, 8.68, 7.308]}
          rotation={[1.413, -0.085, -0.355]}
          scale={[0.007, 0.005, 0.004]}
        >
          <mesh
            name="Cylinder019_1"
            geometry={nodes.Cylinder019_1.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Cylinder019_2"
            geometry={nodes.Cylinder019_2.geometry}
            material={materials["Hamer Silver"]}
          />
          <mesh
            name="Cylinder019_3"
            geometry={nodes.Cylinder019_3.geometry}
            material={materials.Leather}
          />
        </group>
        <group
          name="Cylinder017"
          position={[-38.773, 10.23, 6.985]}
          rotation={[1.456, -0.046, -0.075]}
          scale={[0.005, 0.005, 0.004]}
        >
          <mesh
            name="Cylinder017_1"
            geometry={nodes.Cylinder017_1.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Cylinder017_2"
            geometry={nodes.Cylinder017_2.geometry}
            material={materials["Hamer Silver"]}
          />
          <mesh
            name="Cylinder017_3"
            geometry={nodes.Cylinder017_3.geometry}
            material={materials.Leather}
          />
        </group>
        <mesh
          name="Cylinder016"
          geometry={nodes.Cylinder016.geometry}
          material={materials["Smooth Metal"]}
          position={[-38.773, 10.23, 6.985]}
          rotation={[1.456, -0.046, -1.645]}
          scale={[0.004, 0.034, 0.003]}
        />
        <mesh
          name="Cube012"
          geometry={nodes.Cube012.geometry}
          material={materials.Blade}
          position={[-38.773, 10.23, 6.985]}
          rotation={[-0.111, 0.074, -0.046]}
          scale={[0.007, 0.002, 0.01]}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={materials["Feather 2"]}
          position={[-34.009, 8.436, 9.967]}
          rotation={[-0.747, 0.466, -2.618]}
          scale={[0.043, 0.028, 0.028]}
        />
        <mesh
          name="Plane006"
          geometry={nodes.Plane006.geometry}
          material={materials["Feather 2"]}
          position={[-33.973, 8.46, 9.878]}
          rotation={[1.653, 0.201, 2.507]}
          scale={[0.064, 0.042, 0.042]}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials.Feather}
          position={[-34.009, 8.436, 9.967]}
          rotation={[-0.747, 0.466, -2.618]}
          scale={[0.043, 0.028, 0.028]}
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials.Feather}
          position={[-34.009, 8.436, 9.967]}
          rotation={[1.555, 0.193, 2.496]}
          scale={[0.043, 0.028, 0.028]}
        />
        <mesh
          name="Cylinder015"
          geometry={nodes.Cylinder015.geometry}
          material={materials["Bow wood"]}
          position={[-33.973, 8.46, 9.878]}
          rotation={[1.656, 0.048, -2.212]}
          scale={[0.003, 0.294, 0.003]}
        />
        <mesh
          name="Cylinder014"
          geometry={nodes.Cylinder014.geometry}
          material={materials["Bow wood"]}
          position={[-34.009, 8.436, 9.967]}
          rotation={[1.556, 0.041, -2.223]}
          scale={[0.002, 0.199, 0.002]}
        />
        <mesh
          name="Cone003"
          geometry={nodes.Cone003.geometry}
          material={nodes.Cone003.material}
          position={[-33.973, 8.46, 9.878]}
          rotation={[-1.485, -0.048, 2.212]}
          scale={[0.009, 0.018, 0.009]}
        />
        <mesh
          name="Cone001"
          geometry={nodes.Cone001.geometry}
          material={nodes.Cone001.material}
          position={[-34.009, 8.436, 9.967]}
          rotation={[-1.585, -0.041, 2.223]}
          scale={[0.003, 0.019, 0.003]}
        />
        <mesh
          name="Cylinder008"
          geometry={nodes.Cylinder008.geometry}
          material={materials["Material.002"]}
          position={[-38.237, 7.195, -1.473]}
          rotation={[1.578, 0.036, 1.557]}
          scale={0.002}
        />
        <mesh
          name="Icosphere016"
          geometry={nodes.Icosphere016.geometry}
          material={materials["Material.037"]}
          position={[-39.655, 11.793, -1.407]}
          scale={0.056}
        />
        <group
          name="Circle007"
          position={[-35.435, 10.228, 18.147]}
          rotation={[-0.063, -0.053, -0.205]}
          scale={[0.117, 0.102, 0.117]}
        >
          <mesh
            name="Circle020"
            geometry={nodes.Circle020.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Circle020_1"
            geometry={nodes.Circle020_1.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Circle013"
          position={[-39.832, 6.723, -4.553]}
          scale={[0.364, 0.39, 0.364]}
        >
          <mesh
            name="Circle019"
            geometry={nodes.Circle019.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Circle019_1"
            geometry={nodes.Circle019_1.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Circle012"
          position={[-42.884, 7.405, -0.711]}
          scale={[0.364, 0.39, 0.364]}
        >
          <mesh
            name="Circle018"
            geometry={nodes.Circle018.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Circle018_1"
            geometry={nodes.Circle018_1.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Cylinder000"
          position={[-39.697, 8.312, -1.501]}
          scale={[0.452, 0.858, 0.452]}
        >
          <mesh
            name="Cylinder009_1"
            geometry={nodes.Cylinder009_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder009_2"
            geometry={nodes.Cylinder009_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Cylinder003"
          position={[-45.868, 10.163, 0.624]}
          scale={[0.569, 1.105, 0.569]}
        >
          <mesh
            name="Cylinder008_1"
            geometry={nodes.Cylinder008_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder008_2"
            geometry={nodes.Cylinder008_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Cylinder007"
          position={[-33.777, 8.35, 11.556]}
          rotation={[0.014, 0.051, -0.159]}
          scale={0.706}
        >
          <mesh
            name="Cylinder007_1"
            geometry={nodes.Cylinder007_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder007_2"
            geometry={nodes.Cylinder007_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Circle011"
          position={[-39.86, 9.303, 5.856]}
          scale={[0.364, 0.39, 0.364]}
        >
          <mesh
            name="Circle017_1"
            geometry={nodes.Circle017_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Circle017_2"
            geometry={nodes.Circle017_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials["Material.003"]}
          position={[-39.22, 9.483, 4.988]}
          rotation={[-0.052, -1.464, -0.241]}
          scale={[0.081, 0.376, 2.098]}
        />
        <group
          name="Cylinder006"
          position={[-40.72, 10.163, 6.738]}
          scale={[0.569, 1.105, 0.569]}
        >
          <mesh
            name="Cylinder002_1"
            geometry={nodes.Cylinder002_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder002_2"
            geometry={nodes.Cylinder002_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        {/* <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={materials.OCean}
          position={[-102.342, 2.317, -2.82]}
          scale={[93.858, 1.06, 49.012]}
        /> */}
        <group
          name="Cylinder002"
          position={[-40.649, 11.977, 10.127]}
          rotation={[-0.034, -0.004, 0.023]}
          scale={[0.681, 4.272, 0.682]}
        >
          <mesh
            name="Cylinder006_1"
            geometry={nodes.Cylinder006_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder006_2"
            geometry={nodes.Cylinder006_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Circle010"
          position={[-43.104, 10.991, 7.38]}
          rotation={[-0.111, 0.722, 0.055]}
          scale={[0.126, 0.207, 0.259]}
        >
          <mesh
            name="Circle016_1"
            geometry={nodes.Circle016_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Circle016_2"
            geometry={nodes.Circle016_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="Circle017"
          geometry={nodes.Circle017.geometry}
          material={nodes.Circle017.material}
          position={[-42.97, 8.943, -0.319]}
          rotation={[-0.003, 0.081, -0.01]}
          scale={[0.183, 0.283, 0.183]}
        />
        <mesh
          name="Circle016"
          geometry={nodes.Circle016.geometry}
          material={nodes.Circle016.material}
          position={[-41.296, 8.926, -0.809]}
          rotation={[-0.003, 0.081, -0.01]}
          scale={[0.183, 0.283, 0.183]}
        />
        <mesh
          name="Circle015"
          geometry={nodes.Circle015.geometry}
          material={nodes.Circle015.material}
          position={[-45.468, 10.533, 1.311]}
          scale={[0.07, 0.075, 0.07]}
        />
        <mesh
          name="Circle014"
          geometry={nodes.Circle014.geometry}
          material={nodes.Circle014.material}
          position={[-45.44, 10.533, 3.382]}
          scale={[0.07, 0.075, 0.07]}
        />
        <group
          name="Cube004"
          position={[-41.824, 9.457, -2.867]}
          rotation={[0, 0.155, 0]}
          scale={2.049}
        >
          <mesh
            name="Cube002_1"
            geometry={nodes.Cube002_1.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cube002_2"
            geometry={nodes.Cube002_2.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group
          name="Cylinder005"
          position={[-46.013, 10.515, 4.109]}
          scale={[0.655, 0.902, 0.655]}
        >
          <mesh
            name="Cylinder005_1"
            geometry={nodes.Cylinder005_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder005_2"
            geometry={nodes.Cylinder005_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Circle009"
          position={[-38.023, 19.868, 12.456]}
          rotation={[-3.078, 0.053, 2.936]}
          scale={[0.148, 0.207, 0.147]}
        >
          <mesh
            name="Circle014_1"
            geometry={nodes.Circle014_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Circle014_2"
            geometry={nodes.Circle014_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials["Material.003"]}
          position={[-34.933, 8.547, 11.758]}
          rotation={[-0.007, -0.037, -0.396]}
          scale={[0.081, 0.376, 2.098]}
        />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={materials["Material.003"]}
          position={[-30.53, 7.754, 1.369]}
          rotation={[0, -0.338, 0]}
          scale={[0.168, 0.171, 6.96]}
        />
        <group
          name="Cylinder001"
          position={[-33.926, 8.118, 18.382]}
          scale={0.878}
        >
          <mesh
            name="Cylinder001_1"
            geometry={nodes.Cylinder001_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder001_2"
            geometry={nodes.Cylinder001_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="Circle005"
          geometry={nodes.Circle005.geometry}
          material={materials["Material.001"]}
          position={[-35.431, 10.966, 13.222]}
          rotation={[-0.063, -0.053, -0.205]}
          scale={[0.183, 0.207, 0.183]}
        />
        <mesh
          name="Circle004"
          geometry={nodes.Circle004.geometry}
          material={nodes.Circle004.material}
          position={[-35.814, 7.481, 14.113]}
          rotation={[-0.063, -0.053, -0.205]}
          scale={[0.183, 0.207, 0.183]}
        />
        <mesh
          name="Circle003"
          geometry={nodes.Circle003.geometry}
          material={nodes.Circle003.material}
          position={[-35.916, 7.603, 16.041]}
          rotation={[-0.063, -0.053, -0.205]}
          scale={[0.183, 0.207, 0.183]}
        />
        <mesh
          name="Circle001"
          geometry={nodes.Circle001.geometry}
          material={materials["Material.004"]}
          position={[-36.19, 8.297, 15.983]}
          rotation={[-0.063, -0.053, -0.205]}
          scale={[0.183, 0.207, 0.183]}
        />
        <mesh
          name="Circle000"
          geometry={nodes.Circle000.geometry}
          material={nodes.Circle000.material}
          position={[-35.431, 10.966, 13.222]}
          rotation={[-0.063, -0.053, -0.205]}
          scale={[0.183, 0.207, 0.183]}
        />
        <group
          name="Circle002"
          position={[-35.431, 10.966, 13.222]}
          rotation={[-0.063, -0.053, -0.205]}
          scale={[0.183, 0.207, 0.183]}
        >
          <mesh
            name="Circle002_1"
            geometry={nodes.Circle002_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Circle002_2"
            geometry={nodes.Circle002_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Circle006"
          position={[-35.12, 9.939, 13.304]}
          rotation={[-0.063, -0.053, -0.205]}
          scale={[0.117, 0.102, 0.117]}
        >
          <mesh
            name="Circle010_1"
            geometry={nodes.Circle010_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Circle010_2"
            geometry={nodes.Circle010_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials["Material.001"]}
          position={[-38.884, 6.592, 12.001]}
          scale={[5.827, 3.092, 5.827]}
        />
        <mesh
          name="Cylinder004"
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.002"]}
          position={[-36.298, 8.895, 9.803]}
          rotation={[1.475, -0.256, -0.692]}
          scale={0.002}
        />
        <group
          name="BezierCurve001"
          position={[-34.087, 8.364, 10.43]}
          rotation={[3.069, 0.799, 0.259]}
          scale={[0.261, 0.27, 0.262]}
        >
          <mesh
            name="Mesh"
            geometry={nodes.Mesh.geometry}
            material={materials["Bow wood"]}
          />
          <mesh
            name="Mesh_1"
            geometry={nodes.Mesh_1.geometry}
            material={materials.Brass}
          />
        </group>
        <group
          name="BezierCurve002"
          position={[-34.081, 8.423, 9.905]}
          rotation={[0.294, 0.776, -0.253]}
          scale={[0.261, 0.27, 0.262]}
        >
          <mesh
            name="Mesh002"
            geometry={nodes.Mesh002.geometry}
            material={materials["Bow wood"]}
          />
          <mesh
            name="Mesh002_1"
            geometry={nodes.Mesh002_1.geometry}
            material={materials.Brass}
          />
        </group>
        <mesh
          name="BezierCurve003"
          geometry={nodes.BezierCurve003.geometry}
          material={materials.Staff}
          position={[-38.863, 9.085, 11.914]}
          rotation={[0.028, 1.571, 0]}
          scale={0.317}
        />
        <mesh
          name="BezierCurve004"
          geometry={nodes.BezierCurve004.geometry}
          material={materials.Staff}
          position={[-38.862, 9.098, 11.56]}
          rotation={[Math.PI / 2, 0.412, -Math.PI / 2]}
          scale={0.041}
        />
        <mesh
          name="BezierCurve005"
          geometry={nodes.BezierCurve005.geometry}
          material={materials.Staff}
          position={[-38.861, 9.096, 11.56]}
          rotation={[-Math.PI / 2, -0.487, Math.PI / 2]}
          scale={0.041}
        />
        <mesh
          name="BezierCurve006"
          geometry={nodes.BezierCurve006.geometry}
          material={materials.Staff}
          position={[-38.861, 9.096, 11.56]}
          rotation={[-Math.PI / 2, 0.724, Math.PI / 2]}
          scale={0.041}
        />
        <mesh
          name="BezierCurve007"
          geometry={nodes.BezierCurve007.geometry}
          material={materials.Staff}
          position={[-38.861, 9.097, 11.56]}
          rotation={[Math.PI / 2, -0.886, -Math.PI / 2]}
          scale={0.041}
        />
        <mesh
          name="BezierCurve008"
          geometry={nodes.BezierCurve008.geometry}
          material={materials.Staff}
          position={[-38.86, 9.097, 11.56]}
          rotation={[-Math.PI / 2, -1.309, 1.571]}
          scale={0.041}
        />
        <mesh
          name="BezierCurve009"
          geometry={nodes.BezierCurve009.geometry}
          material={materials.Staff}
          position={[-38.864, 9.097, 11.56]}
          rotation={[Math.PI / 2, 1.053, -Math.PI / 2]}
          scale={0.041}
        />
        <group
          name="Circle"
          position={[-34.262, 8.412, 10.291]}
          rotation={[1.686, -0.18, 0.012]}
          scale={[0.037, 0.037, 0.024]}
        >
          <mesh
            name="Circle000_1"
            geometry={nodes.Circle000_1.geometry}
            material={materials["Leather.001"]}
          />
          <mesh
            name="Circle000_2"
            geometry={nodes.Circle000_2.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Circle000_3"
            geometry={nodes.Circle000_3.geometry}
            material={materials.Black}
          />
        </group>
        <mesh
          name="Cone002"
          geometry={nodes.Cone002.geometry}
          material={nodes.Cone002.material}
          position={[-33.954, 8.431, 9.989]}
          rotation={[-1.61, 0.016, -0.264]}
          scale={[0.003, 0.019, 0.003]}
        />
        <mesh
          name="Cone"
          geometry={nodes.Cone.geometry}
          material={nodes.Cone.material}
          position={[-33.954, 8.431, 9.989]}
          rotation={[-1.61, 0.016, -0.264]}
          scale={[0.006, 0.012, 0.006]}
        />
        <group
          name="Cube010"
          position={[-39.362, 9.075, 12.092]}
          scale={[0.05, 0.013, 0.014]}
        >
          <mesh
            name="Cube015_1"
            geometry={nodes.Cube015_1.geometry}
            material={materials["Smooth Metal"]}
          />
          <mesh
            name="Cube015_2"
            geometry={nodes.Cube015_2.geometry}
            material={materials["Decorative Metal"]}
          />
        </group>
        <group
          name="Cube009"
          position={[-39.099, 9.067, 12.307]}
          scale={[0.007, 0.008, 0.008]}
        >
          <mesh
            name="Cube006"
            geometry={nodes.Cube006.geometry}
            material={materials["Dagger Handle"]}
          />
          <mesh
            name="Cube006_1"
            geometry={nodes.Cube006_1.geometry}
            material={materials["Hamer Silver"]}
          />
        </group>
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials.Dagger}
          position={[-39.108, 9.068, 12.306]}
          scale={[0.003, 0.006, 0.012]}
        />
        <group
          name="Cube007"
          position={[-39.042, 9.069, 11.953]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.021, 0.006, 0.153]}
        >
          <mesh
            name="Cube014_1"
            geometry={nodes.Cube014_1.geometry}
            material={materials["Scabre Leather"]}
          />
          <mesh
            name="Cube014_2"
            geometry={nodes.Cube014_2.geometry}
            material={materials["Hamer Silver"]}
          />
        </group>
        <mesh
          name="Cube011"
          geometry={nodes.Cube011.geometry}
          material={materials.Blade}
          position={[-38.719, 10.131, 7.442]}
          rotation={[-2.705, -0.074, 3.096]}
          scale={[0.007, 0.002, 0.01]}
        />
        <mesh
          name="Cylinder013"
          geometry={nodes.Cylinder013.geometry}
          material={materials["Smooth Metal"]}
          position={[-38.719, 10.131, 7.442]}
          rotation={[2.01, 0.046, 1.496]}
          scale={[0.004, 0.034, 0.003]}
        />
        <group
          name="Cylinder012"
          position={[-39.362, 9.075, 12.118]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.009, 0.01, 0.007]}
        >
          <mesh
            name="Cylinder018_1"
            geometry={nodes.Cylinder018_1.geometry}
            material={materials.Copper}
          />
          <mesh
            name="Cylinder018_2"
            geometry={nodes.Cylinder018_2.geometry}
            material={materials["Hamer Gold"]}
          />
          <mesh
            name="Cylinder018_3"
            geometry={nodes.Cylinder018_3.geometry}
            material={materials["Leather.001"]}
          />
        </group>
        <mesh
          name="Cylinder011"
          geometry={nodes.Cylinder011.geometry}
          material={materials["Bow String"]}
          position={[-34.166, 8.413, 10.16]}
          rotation={[1.686, -0.19, 0.001]}
          scale={[0, 0.503, 0]}
        />
        <mesh
          name="Cylinder010"
          geometry={nodes.Cylinder010.geometry}
          material={materials["Bow wood"]}
          position={[-33.954, 8.431, 9.989]}
          rotation={[1.531, -0.016, 0.264]}
          scale={[0.002, 0.199, 0.002]}
        />
        <mesh
          name="Cylinder009"
          geometry={nodes.Cylinder009.geometry}
          material={materials["Bow wood"]}
          position={[-33.892, 8.45, 9.911]}
          rotation={[1.632, -0.009, 0.275]}
          scale={[0.003, 0.294, 0.003]}
        />
        <group
          name="Cylinder"
          position={[-38.719, 10.131, 7.442]}
          rotation={[2.01, 0.046, 3.067]}
          scale={[0.005, 0.005, 0.004]}
        >
          <mesh
            name="Cylinder013_1"
            geometry={nodes.Cylinder013_1.geometry}
            material={materials.Brass}
          />
          <mesh
            name="Cylinder013_2"
            geometry={nodes.Cylinder013_2.geometry}
            material={materials["Hamer Silver"]}
          />
          <mesh
            name="Cylinder013_3"
            geometry={nodes.Cylinder013_3.geometry}
            material={materials.Leather}
          />
        </group>
        <mesh
          name="GG"
          geometry={nodes.GG.geometry}
          material={materials["Material.005"]}
          position={[-38.865, 9.096, 11.567]}
          scale={0.017}
        />
        <mesh
          name="affer"
          geometry={nodes.affer.geometry}
          material={materials["Material.006"]}
          position={[-34.729, 6.181, 8.18]}
          scale={0.032}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials.Feather}
          position={[-33.892, 8.45, 9.911]}
          rotation={[1.606, -0.016, -1.296]}
          scale={[0.064, 0.042, 0.042]}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials.Feather}
          position={[-33.892, 8.45, 9.911]}
          rotation={[-1.9, -0.99, 1.1]}
          scale={[0.064, 0.042, 0.042]}
        />
        <mesh
          name="Plane004"
          geometry={nodes.Plane004.geometry}
          material={materials.Feather}
          position={[-39.583, 9.072, 11.899]}
          rotation={[-1.517, 1.047, 1.524]}
          scale={[0.043, 0.028, 0.028]}
        />
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={materials["Feather 2"]}
          position={[-33.892, 8.45, 9.911]}
          rotation={[1.606, -0.016, -1.296]}
          scale={[0.064, 0.042, 0.042]}
        />
        <mesh
          name="Plane009"
          geometry={nodes.Plane009.geometry}
          material={materials["Feather 2"]}
          position={[-33.892, 8.45, 9.911]}
          rotation={[-1.9, -0.99, 1.1]}
          scale={[0.064, 0.042, 0.042]}
        />
        <mesh
          name="Plane010"
          geometry={nodes.Plane010.geometry}
          material={materials["Feather 2"]}
          position={[-39.533, 9.072, 11.899]}
          rotation={[-1.517, 1.047, 1.524]}
          scale={[0.043, 0.028, 0.028]}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials["Material.008"]}
          position={[-39.26, 9.063, 11.791]}
          scale={[1.871, 1.593, 1.916]}
        />
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials.Copper}
          position={[-39.362, 9.085, 12.092]}
          scale={0.005}
        />
      </group>
    </group>
  );
}

useGLTF.preload("assets/hogwartsc2.glb");
