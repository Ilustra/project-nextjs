
import styled from "styled-components";
import CardS from "../components/Card";
import Button from "../components/packages/Button/Button";

import TextField from "../components/text-fields/TextField";
import TextFieldPass from "../components/text-fields/TextFieldPass";




export default function Home(): JSX.Element{
    return(
        <>
            <h1>
            
               
                <CardS className="p-8"> 
                <div className="">
                <Button   >Voiid</Button>
                <Button  startIcon='remove'  >Start</Button>
                <Button   endIcon='person' >Ebd</Button>
                <Button  disabled >dISABLED</Button>
                </div> 
       
                    <div className='column'>
                    <TextField mode='outlined' className='m-4' label='CPF' />
                    <TextField className='m-4' label='Nascimento' />
                    <TextField className='m-4' label='Nascimento' />
                    <TextField className='m-4' label='Nascimento' />
                    <TextField className='m-4' label='Nascimento' />
                    <TextField className='m-4' label='Nascimento' />
                    <TextField className='m-4' label='Nascimento' />
                    <TextFieldPass name='password' label='Password' />
                    </div>
                </CardS>
            </h1>
        </>
    )
}