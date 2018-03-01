"use strict";

var treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: function acceptNode(node) {
        return NodeFilter.FILTER_ACCEPT;
    } }, false);

var nodeList = [];
while (treeWalker.nextNode()) {
    nodeList.push(treeWalker.currentNode);
}console.log(nodeList);
