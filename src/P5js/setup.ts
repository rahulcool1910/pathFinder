type P5 = import("p5");
export const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(1000, 800).parent(canvasParentRef);
};


