import { ActionIcon, Button, Flex, TextInput } from "@mantine/core";
import {
  IconAdjustmentsHorizontal,
  IconSearch,
  IconX,
  IconShare3,
} from "@tabler/icons-react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  border-bottom: 1px solid rgb(239, 239, 239);
  padding: 16px 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GalleryHeader = () => {
  return (
    <HeaderContainer>
      <Flex align={"center"} gap={10}>
        <TextInput
          placeholder="Your board"
          leftSection={<IconSearch size={16} />}
          rightSection={<IconX size={16} />}
        />
        <ActionIcon variant="default" aria-label="Filters">
          <IconAdjustmentsHorizontal />
        </ActionIcon>
      </Flex>

      <Flex gap={10} align={"center"}>
        <ActionIcon variant="default" aria-label="Share">
          <IconShare3 />
        </ActionIcon>
        <Button>Save to...</Button>
      </Flex>
    </HeaderContainer>
  );
};
