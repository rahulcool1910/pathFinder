import { createNodes } from "../Components/Nodes";

type P5 = import("p5");
const nodeSize = parseInt(process.env.NODE_SIZE as string) || 50;
const nodes̵ = createNodes();

export const draw = (p5: P5) => {
    nodes̵.forEach(row => {
        row.forEach(col => {
            p5.rect(col.posX, col.posY, nodeSize, nodeSize);
            if (col.isStartNode) {
                p5.fill("red")
            }

        })
    });
};

