import { CopyIcon } from '@radix-ui/react-icons';
import { cn } from '@spiko/ui/utils';
import { toast } from 'sonner';
import { useT } from 'talkr';

export const CopyToClipboard = (props: { text: string; className?: string }) => {
  const { T } = useT();
  return (
    <CopyIcon
      className={cn('shrink-0 text-information hover:cursor-pointer', props.className)}
      onClick={async () => {
        await navigator.clipboard.writeText(props.text);
        toast.success(T('infos.copiedToClipboard'));
      }}
    />
  );
};
