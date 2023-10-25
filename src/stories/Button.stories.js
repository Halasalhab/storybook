import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    color:'#1ea7fd',
    label: 'Primary',
  },
};

export const Secondary = {
  args: {
    variant: 'seconday',
    color:'#333',
    label: 'Secondary',
  },
};

export const Text = {
args: {
  variant: 'text',
  color: 'black',
  label: 'Text'
}
}

export const Large = {
  args: {
    size: 'large',
    label: 'Large',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small',
  },
};

export const Meduim = {
  args: {
    size: 'medium',
    label: 'Meduim'
  }
}
