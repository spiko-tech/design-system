export type CircularProgressProps = {
    /** Starting percentage (0-100). Will animate from this value to 100% over animateDurationMs. */
    initialPercentage?: number;
    /** Duration in ms to animate from initialPercentage to 100%. */
    animateDurationMs: number;
    innerColor?: string;
    outerColor?: string;
    padding?: number;
    size?: number;
    /**
     * Duration (in ms) for the outer border to draw once around the full circle.
     * Set to 0 to hide the border animation.
     */
    outerLoopDurationMs?: number;
    borderColor?: string;
    borderWidth?: number;
};
export declare const CircularProgress: ({ initialPercentage, animateDurationMs, innerColor, outerColor, padding, size, outerLoopDurationMs, borderColor, borderWidth, }: CircularProgressProps) => import("react/jsx-runtime").JSX.Element;
