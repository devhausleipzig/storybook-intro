import React from "react";
import { Badge, Box, BoxProps, VStack, Heading, Stack, Text, useColorModeValue, Avatar } from "@chakra-ui/react";

export interface CardProps extends BoxProps {
  /**
   * The name of the user.
   * @default "Dan Abrahmov"
   */
  avatar?: JSX.Element;
  /**
   * The name of the user.
   */
  name: string | JSX.Element;
  /**
   * The username of the user.
   * @default "@unknown"
   */
  username?: string;
  /**
   * The content of the card.
   */
  content: string | JSX.Element;
}

export const Card: React.FC<CardProps> = ({
  avatar = <Avatar size="lg" name="anonymous" />,
  children,
  name,
  username = "@unknown",
  content,
  ...props
}) => {
  return (
    <Box backgroundColor={useColorModeValue("gray.50", "gray.700")} p="6" rounded="lg" shadow="md" maxW="lg" {...props}>
      <VStack>
        {avatar}
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text fontWeight={600} color={useColorModeValue("gray.700", "white")} mb={4}>
          {username}
        </Text>
        <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
          {content}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #art
          </Badge>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #photography
          </Badge>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #music
          </Badge>
        </Stack>
      </VStack>
    </Box>
  );
};
