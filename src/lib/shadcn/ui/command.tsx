'use client';

import { cn } from '@spiko/ui/utils';
import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';
import { Icon } from '../../spiko/Icon/Icon.js';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog.js';

const Command = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) => {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
        className
      )}
      {...props}
    />
  );
};

const CommandDialog = ({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & { title?: string; description?: string }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Command className="**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:spiko-text-base-medium [&_[cmdk-group-heading]]:text-text-secondary [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) => {
  return (
    <div data-slot="command-input-wrapper" className="flex h-9 items-center gap-2 border-b px-3">
      <Icon.Search className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'flex h-10 w-full rounded-md bg-transparent py-3 spiko-text-sm-regular outline-hidden placeholder:text-text-secondary disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  );
};

const CommandDefaultInput = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) => {
  return (
    <CommandPrimitive.Input
      className={cn(
        'shadow-sm flex h-12 w-full [appearance:textfield] rounded-md border border-input bg-transparent px-3 py-3 text-base transition-colors file:border-0 file:bg-transparent file:spiko-text-base-medium file:text-base placeholder:text-text-secondary focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        className
      )}
      {...props}
    />
  );
};

const CommandList = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) => {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn('max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto', className)}
      {...props}
    />
  );
};

const CommandEmpty = ({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) => {
  return (
    <CommandPrimitive.Empty data-slot="command-empty" className="py-6 text-center spiko-text-sm-regular" {...props} />
  );
};

const CommandGroup = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) => {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:spiko-text-base-medium [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-text-secondary',
        className
      )}
      {...props}
    />
  );
};

const CommandSeparator = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) => {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('-mx-1 h-px bg-border', className)}
      {...props}
    />
  );
};

const CommandItem = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) => {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 spiko-text-sm-regular outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-secondary",
        className
      )}
      {...props}
    />
  );
};

const CommandShortcut = ({ className, ...props }: React.ComponentProps<'span'>) => {
  return (
    <span
      data-slot="command-shortcut"
      className={cn('ml-auto text-xs tracking-widest text-text-secondary', className)}
      {...props}
    />
  );
};

export {
  Command,
  CommandDefaultInput,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
