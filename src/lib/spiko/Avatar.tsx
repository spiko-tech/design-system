import { Avatar } from '../shadcn/ui/avatar.js';
import { Icon } from './Icon/Icon.js';

export const NewActionAvatar = () => {
  return (
    <Avatar className="flex size-9 items-center justify-center bg-gray-100">
      <Icon.Plus className="size-6 text-gray-500" />
    </Avatar>
  );
};

export const LegalEntityAvatar = () => {
  return (
    <Avatar className="flex size-9 items-center justify-center bg-gray-100">
      <Icon.LegalEntity className="size-5 text-gray-500" />
    </Avatar>
  );
};

export const IndividualAvatar = () => {
  return (
    <Avatar className="flex size-9 items-center justify-center bg-gray-100">
      <Icon.Individual className="size-5 text-gray-500" />
    </Avatar>
  );
};
