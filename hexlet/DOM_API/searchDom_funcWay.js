
// BEGIN

const search = (element, tagName) => {
    const coll = [...element.children];
    // collect tags
    const initAcc = coll.filter(child => child.tagName === tagName);

    // for better experience use flatten instead
    return coll.reduce((acc, child) =>
        acc.concat(search(child, tagName)), initAcc);
    )
};

export default (doc, tagName) => {
    const normalizedTagName = tagName.toUpperCase();
    if ( normalizedTagName === 'HTML' ){
        return [doc.documentElement];
    }
    return search(doc.documentElement, normalizedTagName);
}
