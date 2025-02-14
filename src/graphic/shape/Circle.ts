/**
 * 圆形
 */

import Path, { PathProps } from '../Path';

export class CircleShape {
    cx = 0
    cy = 0
    r = 0
}

export interface CircleProps extends PathProps {
    shape?: Partial<CircleShape>
}
class Circle extends Path<CircleProps> {

    shape: CircleShape

    constructor(opts?: CircleProps) {
        super(opts);
    }

    getDefaultShape() {
        return new CircleShape();
    }

    buildPath(ctx: CanvasRenderingContext2D, shape: CircleShape) {
        ctx.arc(shape.cx, shape.cy, shape.r, 0, Math.PI * 2);
        ctx.closePath();
    }
};

Circle.prototype.type = 'circle';

export default Circle;