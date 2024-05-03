import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textbox, TextboxProps } from './Textbox';

const meta: Meta = {
  title: 'Example/Textbox',
  component: Textbox,  
  tags: ['autodocs'],
  argTypes: {
    color: {options: ['primary', 'secondary', 'tertiary' , 'quaternary' , 'quinary'],control: { type: 'select' }},
    size: {options: ['xs', 'sm', 'md', 'lg'],control: { type: 'select' }},
    value: {control: { type: 'text' }},
    placeholder: {control: { type: 'text' }},
    label: {control: { type: 'text' }}
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

function CustomTextbox(args: Omit<TextboxProps, "onChange" | "value">){
  const [value, setValue] = useState('');

  const handleInputChange = (newValue: string) => {
    setValue(newValue);
  };
  return <Textbox value={value} onChange={handleInputChange} {...args}/>;
};

export const Email: Story = {
  args: {
    color: 'primary',
    label: 'Email',
    placeholder: 'Enter your email here'
  },
  render: (args) => {
      return <CustomTextbox {...args} />
  }
}
