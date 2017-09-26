import React from "react";
import PropTypes from "prop-types";

import AbstractItem from "../AbstractItem";

const propTypes = {
    items: PropTypes.array.isRequired,
    select: PropTypes.func.isRequired
};

function AbstractList({ items, select }) {
    const wholeList = items.map(
        item => (
            <AbstractItem
                item={item}
                key={item.id}
                onClick={()=>select()}
            />
        )
    );

    return (
        <aside className="abstract-list">
            {wholeList}
        </aside>
    );
}

AbstractList.propTypes = propTypes;

export default AbstractList;
