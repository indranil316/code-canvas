import CodeMirror from '@uiw/react-codemirror';
import { useState, useCallback } from 'react';
import Icon from 'react-icons-kit';
import {enlarge2} from 'react-icons-kit/icomoon/enlarge2';
import {shrink2} from 'react-icons-kit/icomoon/shrink2';

const expandClasses='w-1/3';
const contractClasses='w-[10%]';

function Editor(props: any) {
    const [enlarged, setEnlarged] = useState(true);
    const { title, extension, setContent, content, Logo } = props;

    const onChange = useCallback((value: String) => {
        setContent(value);
    }, []);

    return (
        <div className={`${enlarged?expandClasses:contractClasses} border border-[#5A5A5A] bg-[#000] text-[#fff] max-h-[50vh] overflow-auto`}>
            <div className="head flex justify-between">
                <div className='flex gap-2'>
                    <Logo/>
                    <h3 className="bold bg-[#282c34] px-4 py-2">{title}</h3>
                </div>
                <div className="flex items-center">
                    <Icon 
                        icon={enlarged?shrink2:enlarge2}
                        onClick={()=>{setEnlarged(!enlarged)}}
                        className='mr-2'
                    />
                </div>
            </div>
            <CodeMirror
                value={content}
                height="auto"
                extensions={[extension()]}
                onChange={onChange}
                theme="dark"
                style={{
                    border: '1px solid black',
                    maxHeight:'100%'
                }}
            />
        </div>
    )
}

export default Editor