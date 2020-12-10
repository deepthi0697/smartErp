import React from 'react'
import styled from 'styled-components'
// import Editor from "rich-markdown-editor";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Textarea(props){
    const {children, ...rest} = props
    const Wrapper = styled.div`
        width: 60%;
        height: 100px;
        resize: none;
        margin: 0px 0px 0px 20px    
    `
    return(
        <Wrapper>
            {/* <Textarea type='textarea' {...rest} /> */}
            {/* <Editor {...rest}/> */}
            {/* <TextareaMarkdownEditor /> */}
            <CKEditor editor={ ClassicEditor } {...rest}/>
        </Wrapper>
    )
}

export default Textarea