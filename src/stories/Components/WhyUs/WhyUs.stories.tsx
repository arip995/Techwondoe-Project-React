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
  title: 'Large Client Networks',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .',
  iconUrl:
    'http://images.ctfassets.net/d7h9e09vtxna/3iXdwMVDf0EJllyJEAZcg1/e975fbf1243675bfa932622d70d34dfc/TickIcon.png',
};
