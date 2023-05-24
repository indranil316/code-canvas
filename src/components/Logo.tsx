import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.gif';
import {logo} from './types';

export function HtmlLogo(){
    return (
        <Logo src={htmlLogo} alt="HTML Logo"/>
    )
}

export function CssLogo(){
    return (
        <Logo src={cssLogo} alt="CSS Logo"/>
    )
}

export function JsLogo(){
    return (
        <Logo src={jsLogo} alt="Javascript Logo"/>
    )
}

export default function Logo(props:logo){
    return(
        <img className='w-10' src={props.src} alt={props.alt}/>
    )
}