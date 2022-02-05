/* react */
import { memo } from "react";
/* @chakra-ui */
import {
  Avatar,
  Box,
  Stack,
  Text
} from "@chakra-ui/react";

/**
 * Props
 */
type Props = {
  id: number;
  userName: string;
  fullName: string;
}

/**
 * UserCard
 * @param {Props} props
 * @returns
 */
export const UserCard = memo((props: Props) => {
  const { id, userName, fullName } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
      <Avatar 
        name={fullName}
        src='https://bit.ly/broken-link'
        boxSize='160px'
        m='auto'
      />
      <Text fontSize="lg" fontWeight="bold">
        {userName}
      </Text>
      <Text fontSize="sm" color="gray">
        {fullName}
      </Text>
      </Stack>
    </Box>
  );
});
