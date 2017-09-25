/**
 * component for generating an abstract item of abstractList
 */

import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    item: PropTypes.object.isRequired,
    click: PropTypes.func.isRequired
}

function abstractItem({ item, click }) {
    //time
    let currentTime = new Date().getTime();
    let itemTime = item.time;
    let diffTime = (currentTime - itemTime) / 1000;
    let timeInfo = "无信息";
    if (item.time) {
        if (diffTime < 60) {
            timeInfo = `${diffTime}秒钟前`;
        } else if (diffTime >= 60 && diffTime < 3600) {
            timeInfo = `${Math.floor(diffTime / 60)}分钟前`;
        } else if (diffTime >= 3600 && diffTime < 86400) {
            timeInfo = `${Math.floor(diffTime / 3600)}小时前`;
        } else if (diffTime >= 86400 && diffTime < 31536000) {
            timeInfo = `${Math.floor(diffTime / 86400)}天前`;
        } else {
            timeInfo = `${Math.floor(diffTime / 31536000)}年前`;
        }
    }

    //title
    let titleString = item.title.toString();
    let titleInfo = titleString.length <= 8 ? item.title : `${titleString.slice(0, 7)}...`;

    //DOM
    return (
        <div className="abstract-item" onClick={click} role="presentation">
            <ul>
                <li className="abstract-item-title">
                    {titleInfo}
                </li>
                <li className="abstract-item-time">
                    {timeInfo}
                </li>
            </ul>
        </div>
    );
}

abstractItem.propTypes = propTypes;

export default abstractItem;
