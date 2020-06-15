import { TreeItem } from "react-sortable-tree";
import { getRandomNo } from "./common";

export const getNewFile = (fileCount: number) => {
  const newFile = {
    title: `file-${fileCount}`,
    type: "file",
    parentId: "0",
    id: getRandomNo(),
  };
  return newFile;
};

export const getNewFolder = (folderCount: number) => {
  const newFolder = {
    title: `folder-${folderCount}`,
    type: "folder",
    children: [],
    parentId: "0",
    id: getRandomNo(),
  };
  return newFolder;
};

export const findIdsOfItemsToDelete = (
  node: any,
  idsOfItemsToDelete: Array<number>
) => {
  idsOfItemsToDelete.push(node.id);
  if (!node.children) {
    return;
  } else {
    node.children.forEach((child: TreeItem) => {
      findIdsOfItemsToDelete(child, idsOfItemsToDelete);
    });
  }
};

export const canDrop = ({ node, nextParent }: any) => {
  if (node && nextParent) {
    if (node.type === "file" && nextParent.type === "file") {
      return false;
    }
    if (node.type === "folder" && nextParent.type === "file") {
      return false;
    }
  }
  return true;
};
