import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paragraph } from './Paragraph';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Techwondoe/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  type: 'primary',
  label:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .',
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: 'secondary',
  label:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .',
};
