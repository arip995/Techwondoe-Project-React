import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WhyUs } from './WhyUs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Techwondoe/WhyUs',
  component: WhyUs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WhyUs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WhyUs> = (args) => <WhyUs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  headinglabel: 'Large Client Networks',
  headingType: 'h2',
  paragraphLabel:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .',
  paragraphType: 'p2',
  iconUrl:
    'http://images.ctfassets.net/d7h9e09vtxna/3iXdwMVDf0EJllyJEAZcg1/e975fbf1243675bfa932622d70d34dfc/TickIcon.png',
};
