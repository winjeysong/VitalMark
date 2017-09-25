/**
 * component for selecting things: todo, finished, all
 */

import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    selectAll: PropTypes.func.isRequired,
    selectTodo: PropTypes.func.isRequired,
    selectFinished: PropTypes.func.isRequired
}

function SelectLabel({ selectAll, selectTodo, selectFinished}) {
    return (
        <ul className="nav nav-pills">
            <li role="presentation" className="active">
                <a href="#" onClick={selectAll}>全部</a>
            </li>
            <li role="presentation" className="active">
                <a href="#" onClick={selectAll}>待完成</a>
            </li>
            <li role="presentation" className="active">
                <a href="#" onClick={selectAll}>已完成</a>
            </li>
        </ul>
    )
}

SelectLabel.propTypes = propTypes;

export default SelectLabel;
