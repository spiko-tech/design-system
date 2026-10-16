import { OTPInput } from 'input-otp';
import * as React from 'react';
declare global {
    interface OTPCredential extends Credential {
        code: string;
        type: 'otp';
    }
    interface CredentialRequestOptions {
        otp?: {
            transport: string[];
        };
    }
}
declare const InputOTP: ({ className, containerClassName, onComplete, value, onChange, disabled, ...props }: React.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}) => React.JSX.Element;
declare const InputOTPGroup: ({ className, ...props }: React.ComponentProps<"div">) => React.JSX.Element;
declare const InputOTPSlot: ({ index, className, ...props }: React.ComponentProps<"div"> & {
    index: number;
}) => React.JSX.Element;
declare const InputOTPSeparator: ({ ...props }: React.ComponentProps<"div">) => React.JSX.Element;
export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
