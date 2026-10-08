"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiCode } from "react-icons/fi";

export default function Loading() {
    const [isVisible, setIsVisible] = useState(true);
    const [isLaunching, setIsLaunching] = useState(false);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const launchTimer = window.setTimeout(() => {
            setIsLaunching(true);
        }, 1700);

        const hideTimer = window.setTimeout(() => {
            setIsVisible(false);
        }, 2350);

        return () => {
            window.clearTimeout(launchTimer);
            window.clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="codly-loading"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isLaunching ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden bg-[#100a1d]"
                    role="status"
                    aria-label="Carregando Codly"
                    aria-live="polite"
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(124,58,237,0.22),transparent_55%)]" />

                    <div className="pointer-events-none absolute -left-32 top-1/4 size-80 rounded-full bg-primary/15 blur-[100px]" />
                    <div className="pointer-events-none absolute -right-32 bottom-1/4 size-80 rounded-full bg-violet-500/10 blur-[100px]" />

                    <motion.div
                        animate={reduceMotion ? undefined : { y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="pointer-events-none absolute left-[25%] top-[30%] size-1 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]"
                    />

                    <motion.div
                        animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="pointer-events-none absolute right-[28%] top-[60%] size-1 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                    />

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <motion.div
                            animate={reduceMotion ? undefined : isLaunching ? { y: -120, scale: 1.2, opacity: 0 } : { y: [0, -10, 0] }}
                            transition={isLaunching ? { duration: 0.65, ease: [0.76, 0, 0.24, 1] } : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="absolute inset-0 rounded-3xl bg-primary/40 blur-2xl" />

                            <div className="relative flex size-20 items-center justify-center rounded-3xl border border-white/15 bg-primary text-white shadow-[0_15px_45px_rgba(124,58,237,0.4)] sm:size-24">
                                <FiCode className="text-4xl sm:text-5xl" />
                            </div>

                            <motion.div
                                animate={{ opacity: isLaunching && !reduceMotion ? 1 : 0, scaleY: isLaunching && !reduceMotion ? 1.5 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute -bottom-16 left-1/2 h-16 w-4 -translate-x-1/2 origin-top rounded-full bg-linear-to-b from-primary via-violet-400 to-transparent blur-md"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ opacity: isLaunching ? 0 : 1, y: isLaunching && !reduceMotion ? 15 : 0 }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="flex flex-col items-center gap-1">
                                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                                    Codly<span className="text-violet-400">.</span>
                                </h2>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                                    Seu APP de Aprendizado
                                </p>
                            </div>

                            <div className="h-1 w-44 overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1.7, ease: "easeInOut" }}
                                    className="h-full w-full origin-left rounded-full bg-linear-to-r from-primary to-violet-300"
                                />
                            </div>

                            <p className="text-xs font-medium text-white/40">
                                Carregando experiência...
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
