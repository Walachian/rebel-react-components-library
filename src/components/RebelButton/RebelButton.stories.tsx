import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RebelButton from "./RebelButton"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'COMPONENTS/RebelButton',
  component: RebelButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RebelButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RebelButton> = (args) => <RebelButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
//   primary: true,
  text: 'Rebel Button',
  onClick: () => console.log("I am the primary button")
};


export const Large = Template.bind({});
Large.args = {
  text: 'Large Rebel Button',
  onClick: () => console.log("Large button clicked"),
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small rebel Button',
  onClick: () => console.log("Small button clicked"),
};
