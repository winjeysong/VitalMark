/**
 * component for the list of marks
 */

import React from "react";
import PropTypes from "prop-types";

import MarkBlock from "../MarkBlock";

const propTypes = {
    items: PropTypes.array.isRequired,
    onComplete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

function MarkList({ items, onComplete, onEdit }) {
    const allMarks = items.map(
        item => (
            <MarkBlock
                item={item}
                key={item.id}
                complete={() => onComplete(item.id)}
                edit={() => onEdit(item.id)}
            />
        )
    );

    return (
        <article className="mark-list">
            {allMarks}
        </article>
    );
}

MarkList.propTypes = propTypes;

export default MarkList;
