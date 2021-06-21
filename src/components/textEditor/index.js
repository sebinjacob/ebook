import React from "react";
import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./editor.css";

const Editor = ({ data: parentData, onSave }) => (
    <div>
        <CKEditor
            config={{
                forcePasteAsPlainText: true,
            }}
            editor={ClassicEditor}
            data={parentData}
            onChange={(event, editor) => {
                const data = editor.getData();
                onSave(data);
            }}
        />
    </div>
);

Editor.propTypes = {
    data: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default Editor;
