import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from ".";
import { Avatar, Link, Heading, Text, VStack } from "@chakra-ui/react";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const All = () => {
  return (
    <div>
      <Heading mb="2">Card</Heading>
      <Text mb="2">The Card component can be used in multiple ways. Here are some examples:</Text>
      <VStack alignItems="left" maxW="full" spacing="4">
        <Card
          avatar={
            <Link>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="lg" />
            </Link>
          }
          name="DevHaus"
          username="@dan_abramov"
          content="Test Content"
        />
        Without Avatar
        <Card name="Anonymous" content="Test Content With Anonymous User" />
      </VStack>
    </div>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  avatar: (
    <Link>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="lg" />
    </Link>
  ),
  name: "Dan Abrahmov",
  username: "dan_abramov",
  content: "I am a software engineer at Facebook.",
};

export const NoAvatar = Template.bind({});
NoAvatar.args = {
  name: "Dan Abrahmov",
  username: "dan_abramov",
  content: "I am a software engineer at Facebook.",
};
