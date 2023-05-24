import './scss/index.scss';
import Editor from './components/Editor';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import {useRef, useState, useEffect} from 'react';
import {HtmlLogo, CssLogo, JsLogo} from './components/Logo';

function App() {
  const iframe = useRef<any>(null);
  const [htmlContent, setHtmlContent] = useState('<h1>Hello World</h1>');
  const [cssContent, setCssContent] = useState('h1{color:blue;}');
  const [jsContent, setJsContent] = useState('console.log("hi there!")');

  useEffect(function(){
    let template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Code Canvas Iframe</title>
        <style>
          ${cssContent}
        </style>
    </head>
    <body>
        ${htmlContent}
        <script>
          ${jsContent}
        </script>
    </body>
    </html>`;
    if(iframe && iframe.current){
      var iframeDoc = iframe.current.contentDocument || iframe.current.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(template);
      iframeDoc.close();
    }
  },[htmlContent,cssContent,jsContent])
  
  return (
    <div id='app' className='flex flex-col items-center min-h-[100vh] w-full'>
      <div id='top-panel' className='flex flex-row bg-[#000] w-full min-h-[50vh]'>
        <Editor extension={html} title="HTML" setContent={setHtmlContent} content={htmlContent} Logo={HtmlLogo}/>
        <Editor extension={css} title="CSS" setContent={setCssContent} content={cssContent} Logo={CssLogo}/>
        <Editor extension={javascript} title="JavaScript" setContent={setJsContent} content={jsContent} Logo={JsLogo}/> 
      </div>
      <div id='bottom-panel' className='w-full'>
        <iframe
          className='min-h-[50vh]'
          title='output'
          sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
          width="100%"
          height="100%"
          allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"
          ref={iframe}
        />
      </div>
    </div>
  )
}

export default App