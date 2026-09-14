import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../label/label.js';
import { Checkbox } from './checkbox.js';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'UI/Checkbox',
  tags: ['autodocs'],
  argTypes: { checked: { control: 'boolean' }, disabled: { control: 'boolean' } },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms-checkbox" name="terms-checkbox" />
      <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex gap-2">
      <Checkbox id="terms-checkbox-2" name="terms-checkbox-2" defaultChecked />
      <div className="flex flex-col gap-1">
        <Label htmlFor="terms-checkbox-2">Accept terms and conditions</Label>
        <p className="spiko-text-sm-regular text-muted-foreground">
          By clicking this checkbox, you agree to the terms.
        </p>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
      <Label htmlFor="toggle-checkbox">Enable notifications</Label>
    </div>
  ),
};

export const WrappedInLabel: Story = {
  render: () => (
    <Label className="flex items-start gap-2">
      <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
      <div className="flex flex-col gap-1">
        <span>Enable notifications</span>
        <p className="spiko-text-sm-regular text-muted-foreground">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Label>
  ),
};
