import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, ISourceOptions } from "tsparticles-engine";

export default function ParticleBackground({ variant = 'default' }: { variant?: 'default' | 'bubbles' }) {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const defaultOptions: ISourceOptions = {
        fullScreen: { enable: false },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.5
                    }
                },
            },
        },
        particles: {
            color: {
                value: "#38bdf8", // Sky-400
            },
            links: {
                color: "#38bdf8",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 60,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }

    const bubblesOptions: ISourceOptions = {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        particles: {
            color: { value: "#ffffff" },
            move: {
                direction: "top",
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: { enable: true, area: 800 },
                value: 30,
            },
            opacity: {
                value: 0.3,
                random: true,
            },
            shape: { type: "circle" },
            size: {
                value: { min: 3, max: 8 },
                random: true,
            },
        },
        detectRetina: true,
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 z-0"
            options={variant === 'bubbles' ? bubblesOptions : defaultOptions}
        />
    );
}
