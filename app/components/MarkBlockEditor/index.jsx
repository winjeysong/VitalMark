import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    item: PropTypes.object,
    save: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired
}

function MarkBlockEditor({ item, save, cancel }) {
    const saveBtn = (<span><span className="glyphicon glyphicon-floppy-disk" /> 保存</span>);
    const addBtn = (<span><span className="glyphicon glyphicon-edit" /> 创建</span>);
    const showBtn = item.id ? saveBtn : addBtn;

    let titleInput = null;
    let contentInput = null;

    return (
        <section className="mark-block-editor">
            <div className="row">
                <div className="col-xs-10">
                    <div className="editor-box">
                        <div className="input-group title-input">
                            <span className="input-group-addon" id="addon1">
                                标题
                            </span>
                            <input
                                ref={(input) => { titleInput = input; }}
                                type="text"
                                defaultValue={item.title}
                                className="form-control"
                                placeholder="请输入标题"
                                aria-describedby="addon1"
                            />
                        </div>
                        <div className="input-group content-input">
                            <span className="input-group-addon" id="addon2">
                                正文
                            </span>
                            <textarea
                                ref={(input) => { contentInput = input; }}
                                defaultValue={item.content}
                                className="form-control"
                                aria-describedby="addon2"
                                placeholder="开始写作吧"
                                rows=""
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="control-btn">
                        <button
                            type="button"
                            className="save-btn btn btn-success"
                            onClick={() => save({
                                ...item,
                                title: titleInput.value,
                                content: contentInput.value
                            })}
                        >
                            {showBtn}
                        </button>
                        <button
                            type="button"
                            className="cancel-btn btn btn-warning"
                            onClick={cancel}
                        >
                            <span className="glyphicon glyphicon-off" aria-hidden="true" /> 取消
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

MarkBlockEditor.propTypes = propTypes;

export default MarkBlockEditor;
