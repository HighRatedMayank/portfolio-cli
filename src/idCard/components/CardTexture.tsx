import * as THREE from "three";
import { extend } from '@react-three/fiber';
import { OrthographicCamera, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";

import { User } from "../types/types";
import { RoundedPlaneGeometry } from "../lib/RoundedPlaneGeometry";
import { useBarcodeAndQrTextures } from "../hook/useBarcodeAndQRCode ";
import CreateText from "./CreateText";

extend({ RoundedPlaneGeometry })

export default function CardTexture({ firstName, lastName, userId, batch, profilePicture = '/images/mypic.jpg' }: User) {

    const templateTexture = useTexture('/images/template_v2.svg')

    const codeRef = useRef<THREE.Group>(null)

    const { barcodeTexture, qrTexture } = useBarcodeAndQrTextures({
        rollNo: userId,
        qrData: "https://github.com/Shre-shth"
    });

    const profilePictureTexture = useTexture(profilePicture)

    const logoTexture = useTexture('/images/new_logo.png')

    useMemo(() => { fixTexture(templateTexture) }, [templateTexture])
    useMemo(() => { fixTexture(profilePictureTexture) }, [profilePictureTexture])
    useMemo(() => { fixTexture(logoTexture) }, [logoTexture])

    function fixTexture(texture: THREE.Texture | THREE.CanvasTexture) {
        texture.flipY = false
        texture.minFilter = THREE.LinearMipmapLinearFilter
        texture.magFilter = THREE.LinearFilter
        texture.anisotropy = 16
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.needsUpdate = true
    }

    useEffect(() => {
        if (!qrTexture || !barcodeTexture || !codeRef.current) return;

        [qrTexture, barcodeTexture].forEach(fixTexture);

        codeRef.current.children.filter((c): c is THREE.Mesh => c instanceof THREE.Mesh).forEach(m => m.material instanceof THREE.Material && (m.material.needsUpdate = true));

    }, [qrTexture, barcodeTexture]);


    return (
        <>
            <OrthographicCamera makeDefault manual left={0} right={1024} bottom={0} top={1024} near={0.1} far={10} position={[0, 0, 1]} />

            <mesh position={[512, 512, 0]}>
                <planeGeometry args={[1024, 1024]} />
                <meshBasicMaterial map={templateTexture} />
            </mesh>

            {/* Top Left Logo */}
            <mesh position={[100, 150, 0.5]}>
                <planeGeometry args={[180, 180]} />
                <meshBasicMaterial map={logoTexture} transparent depthTest={false} />
            </mesh>

            <group position={[256, 360, 0]}>
                {/* First Name */}
                <CreateText fontSize={95} maxWidth={800} lineHeight={.9} setTransform={(e, width, height) => e.position.set(-230 + width! / 2, 0 - height! / 2, 0)}>
                    {firstName}
                </CreateText>
                {/* Last Name */}
                <CreateText fontSize={95} maxWidth={800} lineHeight={.9} setTransform={(e, width, height) => e.position.set(-230 + width! / 2, 110 - height! / 2, 0)}>
                    {lastName}
                </CreateText>

                <group position={[0, 85, 0.1]}>
                    <mesh position={[266, 0, 0]}>
                        <planeGeometry args={[20, 400]} />
                        <meshBasicMaterial color='#fff' />
                    </mesh>

                    <mesh position={[256, 0, 0]}>
                        <planeGeometry args={[5, 400]} />
                        <meshBasicMaterial color='#242424' />
                    </mesh>
                </group>

                <CreateText
                    fontSize={70}
                    fillOpacity={0}
                    strokeColor={"#77dd8a"}
                    strokeWidth={1.5}
                    lineHeight={.9}
                    setTransform={(e, width, height) => e.position.set(-230 + width! / 2, (height! / 2) + 110, 0)}
                >
                    {batch.replace(' ', '\n')}
                </CreateText>

                <CreateText
                    color={"#242424"}
                    fontSize={60}
                    font="/font/ApfelGrotezk.otf"
                    setTransform={(e, _width, height) => e.position.set(0, (360 - (height! / 2)) - 5, 0)}
                >
                    24095105
                </CreateText>

            </group >

            <group position={[768, 360, 0]}>
                <group ref={codeRef}>
                    <CreateText
                        position={[0, -190, 0]}
                        color={"#242424"}
                        fontSize={20}
                        letterSpacing={0.1}
                        font="/font/Minecraft.ttf"
                    >
                        {`${firstName} ${lastName}`}
                    </CreateText>

                    <mesh position={[0, -20, 0]}>
                        <planeGeometry args={[256, 256]} />
                        <meshBasicMaterial map={qrTexture} transparent />
                    </mesh>
                    <mesh position={[0, 200, 0]}>
                        <planeGeometry args={[512, 100]} />
                        <meshBasicMaterial map={barcodeTexture} transparent />
                    </mesh>
                </group>
            </group >



        </>
    );
}