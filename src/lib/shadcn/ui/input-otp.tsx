'use client';

import { OTPInput, OTPInputContext } from 'input-otp';
import * as React from 'react';
import { cn } from '../../../utils.js';
import { Icon } from '../../spiko/Icon/Icon.js';

declare global {
  // eslint-disable-next-line
  interface OTPCredential extends Credential {
    code: string;
    type: 'otp';
  }

  interface CredentialRequestOptions {
    otp?: { transport: string[] };
  }
}

const useWebOTP = () => {
  const [isSupported, setIsSupported] = React.useState(false);

  React.useEffect(() => {
    setIsSupported('OTPCredential' in window && 'credentials' in navigator);
  }, []);

  const requestOTP = React.useCallback(
    async (signal: AbortSignal): Promise<string | null> => {
      if (!isSupported) return null;

      try {
        const credential = (await navigator.credentials.get({
          otp: { transport: ['sms'] },
          signal,
        })) as OTPCredential | null;

        return credential?.code || null;
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return null;
        }
        return null;
      }
    },
    [isSupported]
  );

  return { isSupported, requestOTP };
};

const InputOTP = ({
  className,
  containerClassName,
  onComplete,
  value = '',
  onChange,
  disabled,
  ...props
}: React.ComponentProps<typeof OTPInput> & { containerClassName?: string }) => {
  const { requestOTP } = useWebOTP();
  const abortControllerRef = React.useRef<AbortController | null>(null);
  const webOTPRequestedRef = React.useRef(false);

  const handleWebOTPComplete = React.useCallback(
    (code: string) => {
      if (onChange) {
        onChange(code);
      }
      if (onComplete) {
        onComplete(code);
      }
    },
    [onChange, onComplete]
  );

  const startWebOTPRequest = React.useCallback(() => {
    // Don't start if already requested, disabled, or field is already full
    if (webOTPRequestedRef.current || disabled || value.length >= (props.maxLength ?? 6)) {
      return;
    }

    webOTPRequestedRef.current = true;
    abortControllerRef.current = new AbortController();

    requestOTP(abortControllerRef.current.signal)
      .then((code) => {
        if (code) {
          handleWebOTPComplete(code);
        }
      })
      .catch(() => {
        // WebOTP request was aborted or failed, ignore
      })
      .finally(() => {
        webOTPRequestedRef.current = false;
      });
  }, [disabled, value, requestOTP, handleWebOTPComplete, props.maxLength]);

  // Start WebOTP request when component mounts or value changes
  React.useEffect(() => {
    startWebOTPRequest();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
      webOTPRequestedRef.current = false;
    };
  }, [startWebOTPRequest]);

  const handleChange = React.useCallback(
    (newValue: string) => {
      // Abort any ongoing WebOTP request when user starts typing
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
      webOTPRequestedRef.current = false;

      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange]
  );

  const handleComplete = React.useCallback(
    (code: string) => {
      // Abort any ongoing WebOTP request when manually completed
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
      webOTPRequestedRef.current = false;

      if (onComplete) {
        onComplete(code);
      }
    },
    [onComplete]
  );

  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn('flex items-center gap-2 has-disabled:opacity-50', containerClassName)}
      className={cn('disabled:cursor-not-allowed', className)}
      autoComplete="one-time-code"
      inputMode="numeric"
      value={value}
      onChange={handleChange}
      onComplete={handleComplete}
      onFocus={startWebOTPRequest}
      disabled={disabled}
      {...props}
    />
  );
};

const InputOTPGroup = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot="input-otp-group" className={cn('flex items-center', className)} {...props} />
);

const InputOTPSlot = ({ index, className, ...props }: React.ComponentProps<'div'> & { index: number }) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'shadow-xs relative flex h-9 w-9 items-center justify-center rounded-md border border-input spiko-text-sm-regular transition-all outline-none aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
};

const InputOTPSeparator = ({ ...props }: React.ComponentProps<'div'>) => (
  <div data-slot="input-otp-separator" role="separator" {...props}>
    <Icon.Minus />
  </div>
);

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
