/**
 * component for creating new things
 */

import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    click: PropTypes.func.isRequired
};

function CreateBtn({ click }) {
    return (
        <button
            onClick={click}
            className="create-btn btn btn primary"
            type="button"
        >
            <span className="glyphicon glyphicon-plus" aria-hidden="true" /> 新建
        </button>
    );
}

CreateBtn.propTypes = propTypes;

export default CreateBtn;
