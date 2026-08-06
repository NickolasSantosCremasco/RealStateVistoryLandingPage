

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Material2: THREE.Mesh
    Material2_1: THREE.Mesh
    Material3: THREE.Mesh
    Material3_1: THREE.Mesh
    Material3_2: THREE.Mesh
    Material3_3: THREE.Mesh
    Material2_2: THREE.Mesh
    Material3_4: THREE.Mesh
    Material2_3?: THREE.LineSegments | THREE.Mesh
  }
  materials: {
    material_1: THREE.MeshStandardMaterial
    auto: THREE.MeshStandardMaterial
    auto_2: THREE.MeshStandardMaterial
    auto_3: THREE.MeshStandardMaterial
    auto_4: THREE.MeshStandardMaterial
    auto_5: THREE.MeshStandardMaterial
    auto_6: THREE.MeshStandardMaterial
    auto_7: THREE.MeshStandardMaterial
    edge_color646464255: THREE.LineBasicMaterial
  }
}

export function Model(props: React.ComponentPropsWithoutRef<'group'>) {
  const gltf = useGLTF('/models/apartment.glb')
  const { nodes, materials } = gltf as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
         {/* <mesh geometry={nodes.Material2.geometry} material={materials.material_1} /> */}
        <mesh geometry={nodes.Material2_1.geometry} material={materials.auto} /> 
        <mesh geometry={nodes.Material3.geometry} material={materials.auto_2} />
        <mesh geometry={nodes.Material3_1.geometry} material={materials.auto_3} />
        <mesh geometry={nodes.Material3_2.geometry} material={materials.auto_4} />
        <mesh geometry={nodes.Material3_3.geometry} material={materials.auto_5} />
        <mesh geometry={nodes.Material2_2.geometry} material={materials.auto_6} />
        <mesh geometry={nodes.Material3_4.geometry} material={materials.auto_7} />
        {nodes.Material2_3 && (
          <lineSegments
            geometry={nodes.Material2_3.geometry}
            material={materials.edge_color646464255}
          />
        )}
      </group>
    </group>
  )
}

useGLTF.preload('/models/apartment.glb')