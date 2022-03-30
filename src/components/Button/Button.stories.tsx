import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  colorScheme: "primary",
  children: "Button Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  colorScheme: "secondary",
  children: "Button Secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Button Large",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Button Small",
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Button Loading",
  isLoading: true,
};
