import React from "react";
import SortableTree, {
  getTreeFromFlatData,
  getFlatDataFromTree,
  TreeItem,
} from "react-sortable-tree";
// @ts-ignore
import FileExplorerTheme from "react-sortable-tree-theme-minimal";

import { canDrop } from "../../../utils/files-and-folders";

const StyledSortableTree = (props: any) => {
  const {
    flatData,
    updateFlatData,
    onMoveNode,
    getNodeKey,
    generateNodeProps,
  } = props;

  const handleChange = (treeData: Array<TreeItem>) => {
    const flatData = getFlatDataFromTree({ treeData, getNodeKey }).map(
      (nodeDetails) => {
        return nodeDetails.node;
      }
    );
    updateFlatData(flatData);
  };

  const treeData = getTreeFromFlatData({
    flatData,
  });

  return (
    <>
      <style>{style}</style>
      <div className="tree-container" style={{ height: "65vh" }}>
        <SortableTree
          generateNodeProps={generateNodeProps}
          canDrop={canDrop}
          treeData={treeData}
          onChange={handleChange}
          onMoveNode={onMoveNode}
          theme={FileExplorerTheme}
        />
      </div>
    </>
  );
};

const style = `
  .ReactVirtualized__Grid.ReactVirtualized__List.rst__virtualScrollOverride {
    outline:none;
    border:none;
  }
  .tree-container {
    background-color:white !important;
    border:1px solid lightgrey !important;
    outline: none !important;
  }
  .rstcustom__rowContents {
    background-color:white;;
    box-shadow:none;
    border-bottom:1px solid  darkgrey;
    font-weight:bold;
    color:black;
  }
  .rstcustom__rowContents:hover {
    box-shadow:none;
    background-color:lightgrey;
    z-index:10 !important;
    color:black;
  }
  .rstcustom__node {
    background-color:white;
    color:black;
  }
`;

export default StyledSortableTree;
