import { createNodes } from "../Components/Nodes";

type P5 = import("p5");

export const mouseClicked = (p5: P5) => {
    console.log(p5.mouseX, p5.mouseY)
};

