import { Box, Space, Text } from "@mantine/core";
import { useMemo } from "react";
import { Gallery, Image } from "react-grid-gallery";

type Props = {
  assets: any; // not ideal - I need to know how the API response type is defined.
};

export const Assets = ({ assets }: Props) => {
  console.log("assets: ", assets);
  const images: Image[] = useMemo(
    () =>
      assets.data.clips?.map((asset: any) => ({
        width: 216,
        height: 216,
        src: asset.assets?.image,
        caption: asset?.displayName,
        customOverlay: (
          <div className="custom-overlay__caption">
            <div>{asset?.displayName}</div>
            <Text style={{ textTransform: "uppercase" }}>
              {asset?.ext} • {Math.round((asset?.size ?? 0) / 1024 / 1024)} MB •{" "}
              {asset?.width} * {asset?.height}
            </Text>
          </div>
        ),
      })) ?? [],
    [assets]
  );
  console.log("images: ", images);

  return (
    <Box py={20}>
      <Text size="xs" c="dimmed">
        ASSETS ({assets.data.total})
      </Text>
      <Space h={"xs"} />
      <Gallery images={images} />
    </Box>
  );
};
