/**
 * component for creating the main blocks
 * markdown available
 */

import React from "react";
import PropTypes from "prop-types";
import marked from "marked";

const propTypes = {
    item: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

function MarkBlock({ item, onComplete, onEdit }) {
    if (!item || !item.id) {
        return (
            <section className="mark-block no-marks">
                开始创建你的备忘吧！
            </section>
        );
    }

    const markContent = marked(item.content);

    return (
        <section className="mark-block">
            <div className="row">
                <div className="col-xs-10">
                    <div className="mark-block-article">
                        <h1>{item.title}</h1>
                        <hr />
                        <div className="content">
                            <div dangerouslySetInnerHTML={{ _html: markContent }} />
                        </div>
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="control-btn">
                        <button
                            type="button"
                            className="complete-btn btn btn-default"
                            onClick={() => onComplete(item.id)}
                        >
                            <span className="glyphicon glyphicon-remove" aria-hidden="true" /> 完成
                        </button>
                        <button
                            type="button"
                            className="edit-btn btn btn-default"
                            onClick={() => onEdit(item.id)}
                        >
                            <span className="glyphicon glyphicon-pencil" aria-hidden="true" /> 编辑
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

MarkBlock.propTypes = propTypes;

MarkBlock.defaultProps = {
    item: []
};

export default MarkBlock;
