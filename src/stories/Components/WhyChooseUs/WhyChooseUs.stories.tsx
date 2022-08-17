import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WhyChooseUs } from './WhyChooseUs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Techwondoe/WhyChooseUs',
  component: WhyChooseUs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WhyChooseUs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WhyChooseUs> = (args) => (
  <WhyChooseUs {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  headinglabel: 'Large Client Networks',
  headingType: 'h2',
  paragraphLabel:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .',
  paragraphType: 'p2',
  iconUrl:
    'http://images.ctfassets.net/d7h9e09vtxna/6ShjtD5bf6LKeXFUZaa1Ld/38907096b9b7bab27aa86a8a7c3e0abc/ReadMoreIcon.png',
};
