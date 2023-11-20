import { Box, Space, Text } from "@mantine/core";
import { useMemo } from "react";
import { Gallery, Image } from "react-grid-gallery";

type Props = {
  boards: any; // not ideal - I need to know how the API response type is defined.
};

export const Boards = ({ boards }: Props) => {
  const images: Image[] = useMemo(
    () =>
      boards.data.map((board: any) => ({
        src: board?.thumbnails?.[0],
        width: 216,
        height: 216,
        caption: board.title,
        thumbnailCaption: board.title,
      })),
    [boards]
  );

  return (
    <Box py={20}>
      <Text size="xs" c="dimmed">
        BOARDS ({boards.total})
      </Text>
      <Space h={"xs"} />
      <Gallery images={images} />
    </Box>
  );
};
