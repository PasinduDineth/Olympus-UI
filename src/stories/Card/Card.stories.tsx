import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
    title: 'Card Title',
    content: 'This is a sample of a Card component. You can pass a string as a property to change this. Please change type or any other property to get a new look and feel or activate any other features such as buttons.',

  },
};
export const Secondary: Story = {
  args: {
    title: 'Card Title',
    content: 'This is a sample of a Card component. You can pass a string as a property to change this. Please change type or any other property to get a new look and feel or activate any other features such as buttons.',
  },
}
