import React from "react";
import {connect} from "react-redux";

const MessageBlock = (props) => {
    return (
        <div className='block-message'>
            Message block
        </div>
    )
}

export default connect(null)(MessageBlock)