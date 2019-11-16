import React from 'react';

interface IProps {
    nameButton: string,
    style: string,
    callback: ()=> void,
}

const Button = (props: IProps) => {
    return (
        <button className={props.style} onClick={props.callback}>{props.nameButton}</button>
    );
};

export default Button;
