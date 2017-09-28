/**
 * component for creating the list
 */

import React from "react";
import PropTypes from "prop-types";

import AbstractItem from "../AbstractItem";

const propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};

function AbstractList({ items, onSelect }) {
    const wholeList = items.map(
        item => (
            <AbstractItem
                item={item}
                key={item.id}
                click={() => onSelect()}
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
