import React from "react";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className="text-xl font-semibold bg-[#f9f9f9] border-[1px] border-[#dfe3e6] rounded-[5px] py-1 px-2 mr-2 cursor-pointer"
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;