
import { Node } from "../types";
type P5 = import("p5");

export const createNodes = () => {
    const nodeSize = parseInt(process.env.NODE_SIZE as string) || 50;
    const nodes: Array<Array<Node>> = []
    // const rows = Math.floor(5.height / nodeSize);
    // const cols = Math.floor(p5.width / nodeSize);
    const rows = 100;
    const cols = 100;
    let nodeRow: Array<Node> = []
    for (let indX = 0; indX < rows; indX++) {
        nodeRow = []
        for (let indY = 0; indY < cols; indY++) {
            nodeRow.push(constructNode(indX * nodeSize, indY * nodeSize))
        }
        nodes.push(nodeRow)
    }
    return nodes;
}

const constructNode = (posX: number, posY: number, isVisited: boolean = false, isStartNode: boolean = false, isEndNode: boolean = false): Node => {
    return {
        posX,
        posY,
        isEndNode,
        isStartNode,
        isVisited
    }
}