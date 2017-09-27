/**
 * component for selecting things: todo, completed, all
 */

import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    selectAll: PropTypes.func.isRequired,
    selectTodo: PropTypes.func.isRequired,
    selectCompleted: PropTypes.func.isRequired
}

function SelectLabel({ selectAll, selectTodo, selectCompleted}) {
    return (
        <ul className="nav nav-pills">
            <li role="presentation" className="active">
                <a href="#" onClick={selectAll}>全部</a>
            </li>
            <li role="presentation" className="active">
                <a href="#" onClick={selectTodo}>待完成</a>
            </li>
            <li role="presentation" className="active">
                <a href="#" onClick={selectCompleted}>已完成</a>
            </li>
        </ul>
    )
}

SelectLabel.propTypes = propTypes;

export default SelectLabel;
