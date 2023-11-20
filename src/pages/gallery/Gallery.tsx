import { useEffect, useState } from "react";
import { Boards } from "../../components/gallery/Boards/Boards";
import { GalleryHeader } from "../../components/gallery/GalleryHeader/GalleryHeader";
import { fetchAssets, fetchBoards } from "../../services/api/gallery";
import styled from "styled-components";
import { Assets } from "../../components/gallery/Assets/Assets";

const Content = styled.div`
  padding: 0 60px;
`;

export const Gallery = () => {
  const [boardsState, setBoardsState] = useState<any>({});
  const [assetsState, setAssetsState] = useState<any>({});

  useEffect(() => {
    fetchBoards()
      .then((res) => res.json())
      .then((response) => {
        setBoardsState(response);
      });

    fetchAssets()
      .then((res) => res.json())
      .then((response) => {
        setAssetsState(response);
      });
  }, []);

  return (
    <div>
      <GalleryHeader />
      <Content>
        {boardsState.total > 0 && <Boards boards={boardsState} />}
        {assetsState?.data?.total > 0 && <Assets assets={assetsState} />}
      </Content>
    </div>
  );
};
