import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WhyUs from './WhyUs';

export default {
  title: 'Techwondoe/WhyUs',
  component: WhyUs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WhyUs>;

const Template: ComponentStory<typeof WhyUs> = (args) => <WhyUs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headinglabel: 'Large Client Networks',
  headingType: 'h2',
  paragraphLabel:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .',
  paragraphType: 'p2',
  iconUrl:
    'http://images.ctfassets.net/d7h9e09vtxna/3iXdwMVDf0EJllyJEAZcg1/e975fbf1243675bfa932622d70d34dfc/TickIcon.png',
};
