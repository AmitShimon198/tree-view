import { FunctionComponent } from "react";
import TreeNode from "./TreeNode";

interface TreeProps {
    data: any[];
}

const Tree: FunctionComponent<TreeProps> = ({ data = [] }) => {
    return (<div>{
        data.map((tree) => <TreeNode key={tree.id+'treeNode'} node={tree} />)
    }</div>);
}

export default Tree;


