import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { Button } from '../button/button.js';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../form/form.js';
import { Input } from '../input/input.js';

const meta: Meta = { title: 'UI/Form', tags: ['autodocs'], parameters: { layout: 'centered' } };

export default meta;
type Story = StoryObj;

type FormValues = { username: string; email: string };

export const Default: Story = {
  render: function Render() {
    const form = useForm<FormValues>({ defaultValues: { username: '', email: '' } });

    return (
      <Form {...form}>
        <form
          className="flex w-80 flex-col gap-4"
          onSubmit={form.handleSubmit((values) => {
            console.log(values);
          })}
        >
          <FormField
            control={form.control}
            name="username"
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="spiko" {...field} />
                </FormControl>
                <FormDescription>Your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
