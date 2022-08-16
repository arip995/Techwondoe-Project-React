import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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

export const Paragraph = Template.bind({});

Paragraph.args = {
  type: 'paragraph',
  label: 'Lorem ipsum dolor sit amet,',
};
