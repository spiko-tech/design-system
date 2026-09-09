import LottieModule from 'lottie-react';
import AnimatedCheckJson from './AnimatedCheck.json' with { type: 'json' };

// Handle CJS/ESM interop: lottie-react may export { default: Component }
const Lottie =
  'default' in LottieModule && typeof LottieModule.default === 'function'
    ? (LottieModule.default as typeof LottieModule)
    : LottieModule;

export const AnimatedCheck = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Lottie animationData={AnimatedCheckJson} loop={false} />
    </div>
  );
};
