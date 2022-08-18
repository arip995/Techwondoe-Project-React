import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';
export default {
  title: 'Techwondoe/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const H1 = Template.bind({});

H1.args = {
  type: 'h1',
  label: 'Lorem ipsum dolor sit amet,',
};

export const H2 = Template.bind({});

H2.args = {
  type: 'h2',
  label: 'Lorem ipsum dolor sit amet,',
};

export const P1 = Template.bind({});

P1.args = {
  type: 'p1',
  label: 'Lorem ipsum dolor sit amet,',
};

export const P2 = Template.bind({});

P2.args = {
  type: 'p2',
  label: 'Lorem ipsum dolor sit amet,',
};
