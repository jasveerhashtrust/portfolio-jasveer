export const useDraggableMotion = (zIndex = 50) => {
    const constraints = { left: 0, right: 0, top: 0, bottom: 0 }

    return {
        drag: true,
        dragConstraints: constraints,
        initial: { x: 0, y: 0 },
        style: { zIndex },
    }
}
