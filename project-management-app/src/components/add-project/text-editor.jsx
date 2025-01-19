import { useRef, useState } from "react";
import JoditEditor from 'jodit-react';
//View DOCS: https://medium.com/@subalerts/wysiwyg-editor-for-react-jodit-editor-with-vite-and-typescript-9e40c28fba8b
export default function TextEditor({updateDescription}) {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = {
        readonly: false,
        height: 400,
        toolbarButtonSize: 'middle',
        buttons: ['bold', 'italic', 'underline', 'link', 'unlink', 'source'],
        uploader: {
            insertImageAsBase64URI: true,
        },
    };

    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => updateDescription(newContent)}
                onChange={(newContent) =>{} }
                className="bg-gray-300"
            />
            {/* Can display the actual content
            <div className="mt-5">
                <h3>Content:</h3>
                <pre>{content}</pre>
            </div> */}
        </div>
    );
}