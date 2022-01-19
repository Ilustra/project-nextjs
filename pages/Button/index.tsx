import { Button,Text } from "../components/packages";

interface IMenu {
    menu: any[];
    // children: Array<NavModule | NavigationSubheading | NavigationLink | NavigationDropdown>;
}
interface IButton {
    icon?: string
}


export default function Buttons({ menu }: IMenu): JSX.Element {

    return (
        <div className="items-center justify-center flex flex-col ">
                          <Text>Link</Text>
                <div className=" flex-row flex items-center justify-between" style={{width: 500, margin: 10,  padding: 10}}>
                    <Button     size='small'>small</Button>
                    <Button     disabled>Disabled</Button>
                    <Button     startIcon='person'>Perfil</Button>
                    <Button     endIcon='send'>Send</Button>
                </div> 
                <Text>Simples</Text>
                <div className=" flex-row flex items-center justify-between" style={{width: 500, margin: 10,  padding: 10}}>
                    <Button mode='simpled'     size='small'>small</Button>
                    <Button mode='simpled'     disabled>Disabled</Button>
                    <Button mode='simpled'     startIcon='person'>Perfil</Button>
                    <Button mode='simpled'     endIcon='send'>Send</Button>
                </div> 
                <Text>Outlined</Text>
                <div className=" flex-row flex items-center " style={{width: 500, margin: 10,   padding: 10}}>
                    <Button     mode='outlined'     >medium</Button>
                    <Button     mode='outlined'     disabled >Disabled</Button>
                    <Button     mode='outlined'     startIcon='person'  >Perfil</Button>
                    <Button     mode='outlined'     endIcon='send' >Send</Button>
                </div> 
                <Text>Contained</Text>
                <div className=" flex-row flex items-center justify-between" style={{width: 500, margin: 10,   padding: 10}}>
                    <Button className='m-2'     mode='contained'  size="largue">Largue</Button>
                    <Button className='m-2'     mode='contained'  disabled >Disabled</Button>
                    <Button className='m-2'     mode='contained'  startIcon='person'  >Perfil</Button>
                    <Button className='m-2'     mode='contained'  endIcon='send' >Send</Button>
                </div> 

        </div>
    )
}
