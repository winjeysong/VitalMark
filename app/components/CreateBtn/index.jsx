/**
 * component for creating new things
 */

import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    onClick: PropTypes.func.isRequired
};

function CreateBtn({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="create-btn btn btn-primary"
            type="button"
        >
            <span className="glyphicon glyphicon-plus" aria-hidden="true" /> 新建
        </button>
    );
}

CreateBtn.propTypes = propTypes;

export default CreateBtn;
