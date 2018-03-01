    let treeWalker = document.createTreeWalker(document.body,
        NodeFilter.SHOW_TEXT,
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT }},
        false
    );

    let nodeList = [];
    while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
    console.log(nodeList)
