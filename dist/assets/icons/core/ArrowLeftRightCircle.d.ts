/**
 * The two arrows are drawn as one sub-path each, so the hover gesture in
 * apps/app/src/iconAnimations.css can send each one off in the direction it points. Both outlines
 * are the original single path's, split at the `Z` that already separated them - at rest this
 * renders exactly as before, since the two never overlap and each is a simple closed outline.
 */
export declare const ArrowLeftRightCircle: ({ className }: {
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
