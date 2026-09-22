import { Locale } from 'date-fns/locale';
export declare const DatePicker: ({ date, formatDate, disabled, locale, placeholder, onChange, availableDate, }: {
    date: Date | undefined;
    formatDate?: (date: Date) => string;
    disabled?: boolean;
    locale: Locale;
    placeholder: string;
    onChange: (date: Date | undefined) => void;
    availableDate?: (date: Date) => boolean;
}) => import("react/jsx-runtime").JSX.Element;
