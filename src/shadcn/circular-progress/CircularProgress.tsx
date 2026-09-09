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

export const CircularProgress = ({
  initialPercentage = 0,
  animateDurationMs,
  innerColor = '#16A34A',
  outerColor = '#DCFCE7',
  padding = 2,
  size = 16,
  outerLoopDurationMs = 10000,
  borderColor = '#16A34A',
  borderWidth = 1,
}: CircularProgressProps) => {
  const radius = size / 2;
  // Content (background + fill) is inset so the border can sit outside
  const contentRadius = radius - borderWidth;
  const innerRadius = contentRadius - padding;
  const borderCircumference = 2 * Math.PI * (radius - borderWidth / 2);
  const drawBorder = (outerLoopDurationMs ?? 0) > 0;

  // For the animated fill, we use a circle with stroke-dasharray technique
  const fillCircumference = 2 * Math.PI * innerRadius;
  const initialOffset = fillCircumference * (1 - initialPercentage / 100);
  const finalOffset = 0; // 100% = no offset

  const borderDurationSeconds = drawBorder ? (outerLoopDurationMs ?? 0) / 1000 : 0;
  const fillDurationSeconds = animateDurationMs / 1000;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle */}
      <circle cx={radius} cy={radius} r={contentRadius} fill={outerColor} />

      {/* Animated border */}
      {drawBorder && (
        <circle
          cx={radius}
          cy={radius}
          r={radius - borderWidth / 2}
          fill="none"
          stroke={borderColor}
          strokeWidth={borderWidth}
          strokeDasharray={borderCircumference}
          strokeDashoffset={borderCircumference}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from={borderCircumference}
            to={0}
            dur={`${borderDurationSeconds}s`}
            repeatCount="indefinite"
          />
        </circle>
      )}

      {/* Animated fill circle using stroke-dasharray technique */}
      <circle
        cx={radius}
        cy={radius}
        r={innerRadius / 2}
        fill="none"
        stroke={innerColor}
        strokeWidth={innerRadius}
        strokeDasharray={fillCircumference / 2}
        strokeDashoffset={initialOffset / 2}
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
      >
        <animate
          attributeName="stroke-dashoffset"
          from={initialOffset / 2}
          to={finalOffset}
          dur={`${fillDurationSeconds}s`}
          fill="freeze"
          calcMode="linear"
        />
      </circle>
    </svg>
  );
};
