
import  styled  from 'styled-components'



export const Input =  styled.input`
    border-color: ${((props)=> props.error && 'rgb(248 113 113)')};
    background-color: ${(props)=> props.mode =='contained' ? '#fafafa': ''};
    border-color: #c7c7c7;    
    padding-top: 30px;
    padding-left: 5px;
    ::-webkit-input-placeholder {
        outline: none !important;
        color: ${props=> props.error && 'rgb(248 113 113)'  }
    }
    }
`;

export const Label =  styled.label`

   color: ${((props)=> props.error && 'rgb(248 113 113)')};
   font-weight: 500;
`;

export const Box =  styled.div`
   background-color: ${(props)=> props.mode =='contained' && '#fafafa'};
   border-bottom: solid;
   border-bottom-width: thin;
   border-bottom-color: ${(props)=> props.error ? 'rgb(248 113 113)' : '#c7c7c7' };
   z-index: 0;

`;
export const LabelError =  styled.div`
    transition: .3s;
    position: relative;
    margin-top: -10px;
    height: 0px;
    visibility:  ${props=> props.error ? 'visible' : ' hidden'};
    opacity:  ${props=> props.error ? 1 : 0};

`;