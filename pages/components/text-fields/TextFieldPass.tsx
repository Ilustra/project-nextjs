import React, { useState } from "react"
import { Input, Label, Box } from './style';
import Icon from '@material-ui/core/Icon';

interface TextField {
    label: string,
    placeholder?: string,
    type?: string,
    name?: string,
    error?: any,
    mode?: string,
    className?: string,

}

const TextFieldPass: React.FC<TextField> = (props: TextField) => {
    const [type, setType] = useState(props.type);
    const changeType = () => {
        setType(type == 'text' ? 'password' : 'text')
    }

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Box className={"relative border-grey  " + props.className} error={props.error} mode={props.mode}>
                <Label htmlFor={props.name} className="absolute top-0 left-1 z-40" error={props.error} >{props.label}</Label>
                <div>
                    <div className='flex justify-between'>
                        <div className="w-full relative block items-center flex">
                            <button style={{ left: '85%' }} type='button' onClick={changeType} className="absolute mt-5"><Icon className="relative z-40  flex items-center " style={{ opacity: 0.6, color: props.error ? 'rgb(248 113 113)' : '#c7c7c7' }}>{type == 'text' ? 'visibility_off' : 'visibility'}</Icon></button>
                            <Input type={type} name={props.name} placeholder={props.placeholder} error={props.error} mode={props.mode}
                                className="w-full border-none bg-white outline-none" />
                        </div>
                    </div>
                </div>
            </Box>
            {props.error ?
                <div className="flex justify-between">
                    <p className="text-red-400  text-sm ml-4" style={{ marginTop: -5 }}>{props.error}</p>
                    <p></p>
                </div>
                : null}
        </>
    )
}

export default TextFieldPass;