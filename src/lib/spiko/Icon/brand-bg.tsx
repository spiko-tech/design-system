const BrandBg: React.FC<{ height?: string; width?: string }> = (props) => (
  <svg
    className="bGMainDark"
    viewBox="0 0 720 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // preserveAspectRatio="xMinYMin meet"
    {...props}
  >
    <g clipPath="url(#clip0_818_24544)">
      <rect width={720} height={1024} transform="matrix(-1 0 0 1 720 0)" fill="black" />
      <g filter="url(#filter0_f_818_24544)">
        <ellipse
          cx="1073.81"
          cy="476.56"
          rx="1073.81"
          ry="476.56"
          transform="matrix(-0.927355 -0.374181 -0.374181 0.927355 2406.25 1006.6)"
          fill="#7AA2FF"
          fillOpacity="0.6"
        />
      </g>
      <g style={{ mixBlendMode: 'overlay' }} opacity="0.6" filter="url(#filter1_f_818_24544)">
        <ellipse
          cx="384.615"
          cy="379.016"
          rx="384.615"
          ry="379.016"
          transform="matrix(-0.97304 -0.230637 -0.230637 0.97304 882.322 100.413)"
          fill="#7AA2FF"
        />
      </g>
      <g opacity="0.6" filter="url(#filter2_f_818_24544)">
        <ellipse
          cx="849.056"
          cy="482.214"
          rx="849.056"
          ry="482.214"
          transform="matrix(-0.958327 0.285672 0.285672 0.958327 268.348 86)"
          fill="#702105"
          fillOpacity="0.8"
        />
      </g>
      <g style={{ mixBlendMode: 'screen' }} filter="url(#filter3_f_818_24544)">
        <ellipse
          cx="705.46"
          cy="370.3"
          rx="705.46"
          ry="370.3"
          transform="matrix(-0.804909 0.593399 0.593399 0.804909 104.662 678)"
          fill="#FF7527"
          fillOpacity="0.7"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_818_24544"
        x="-147.691"
        y="81.4463"
        width="2759.63"
        height="1930.59"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={184} result="effect1_foregroundBlur_818_24544" />
      </filter>
      <filter
        id="filter1_f_818_24544"
        x="-263.223"
        y="-298.377"
        width="1367.77"
        height="1357.76"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="149.74" result="effect1_foregroundBlur_818_24544" />
      </filter>
      <filter
        id="filter2_f_818_24544"
        x="-1653.59"
        y="-151.973"
        width="2492.03"
        height="1885.29"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="210.316" result="effect1_foregroundBlur_818_24544" />
      </filter>
      <filter
        id="filter3_f_818_24544"
        x="-1151.94"
        y="581.27"
        width="1817.01"
        height="1626.81"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="149.74" result="effect1_foregroundBlur_818_24544" />
      </filter>
      <clipPath id="clip0_818_24544">
        <rect width={720} height={1024} fill="white" transform="matrix(-1 0 0 1 720 0)" />
      </clipPath>
    </defs>
  </svg>
);

export default BrandBg;
