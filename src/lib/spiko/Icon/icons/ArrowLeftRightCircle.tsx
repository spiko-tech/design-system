/**
 * The two arrows are drawn as one sub-path each, so the hover gesture in
 * apps/app/src/iconAnimations.css can send each one off in the direction it points. Both outlines
 * are the original single path's, split at the `Z` that already separated them - at rest this
 * renders exactly as before, since the two never overlap and each is a simple closed outline.
 */
export const ArrowLeftRightCircle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="10"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* the upper arrow, pointing left */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0945 7.26293C10.3063 7.4535 10.3063 7.76249 10.0945 7.95306L8.85126 9.072H16.2178C16.5172 9.072 16.76 9.29048 16.76 9.56C16.76 9.82951 16.5172 10.048 16.2178 10.048H8.85126L10.0945 11.1669C10.3063 11.3575 10.3063 11.6665 10.0945 11.8571C9.88277 12.0476 9.53945 12.0476 9.3277 11.8571L7.15881 9.90506C6.94706 9.71449 6.94706 9.4055 7.15881 9.21493L9.3277 7.26293C9.53945 7.07235 9.88277 7.07235 10.0945 7.26293Z"
      fill="currentColor"
    />
    {/* the lower arrow, pointing right */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6655 12.1429C13.8772 11.9524 14.2205 11.9524 14.4323 12.1429L16.6012 14.0949C16.8129 14.2855 16.8129 14.5945 16.6012 14.7851L14.4323 16.7371C14.2205 16.9276 13.8772 16.9276 13.6655 16.7371C13.4537 16.5465 13.4537 16.2375 13.6655 16.0469L14.9087 14.928H7.54222C7.24276 14.928 7 14.7095 7 14.44C7 14.1705 7.24276 13.952 7.54222 13.952H14.9087L13.6655 12.8331C13.4537 12.6425 13.4537 12.3335 13.6655 12.1429Z"
      fill="currentColor"
    />
  </svg>
);
