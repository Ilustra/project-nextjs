import React, { useState } from "react"
import { Input, Label, Box, LabelError } from './style';
import Icon from '@material-ui/core/Icon';

interface TextField {
    label?: string,
    placeholder?: string,
    type?: string,
    name?: string,
    error?: any,
    mode?: string,
    className?: string,
    icon?: string
}

export default function TextField({
    label = '',
    placeholder = 'digite seu texto aqui',
    type = 'text',
    name = 'name',
    error,
    mode = 'contained',
    className,
    icon
}: TextField): JSX.Element {
    return (
        <div>
            <Box className={"relative block border-grey " + className} error={error} mode={mode}>
                <Label className="absolute top-0 left-1 z-10" error={error}>{label}</Label>
                <div className="relative block items-center flex ">
                    {icon && <Icon className="mx-2 flex items-center  " 
                    style={{ fontSize: 30, opacity: 0.8, color: error ? 'rgb(248 113 113)' : '#c7c7c7' }}>{icon}</Icon>}
                    <Input type={type} name={name} placeholder={placeholder} errors={error} mode={mode}
                        className="relative w-full border-none bg-white p-0 outline-none "
                    />
                </div>
            </Box>
                <LabelError error={error} className="flex justify-between">
                    <p className="text-red-400  text-sm ml-4" style={{ marginTop: -5 }}>{error}</p>
                    <p></p>
                </LabelError>      
        </div>
    )
}
