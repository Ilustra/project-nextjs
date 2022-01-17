import Icon from '@material-ui/core/Icon';
import Link from 'next/link';
import { Key, useState } from 'react';
import { Container, BodyMenu, Ul, Li, A, ExpanedMenu, Text } from './styled';

interface IMenu {
    menu: any[];
    // children: Array<NavModule | NavigationSubheading | NavigationLink | NavigationDropdown>;
}
interface IButton {
    icon?: string
}


export default function Menu({ menu }: IMenu): JSX.Element {
    const [expaned, setExpaned] = useState({ status: false, key: 0 })
    const [expanedMenu, setExpanedMenu] = useState(false)
    const [isMenu, setIsMenu] = useState(menu)

    function handleExpaned(index: number) {
        let modifyMenu = isMenu[index]
        modifyMenu.expaned = !modifyMenu.expaned;
        setIsMenu(isMenu.map(element => element.label == modifyMenu.label ? modifyMenu : element));
    }

    return (
        <Container expanedMenu={expanedMenu}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <div style={{ height: '10vh', padding: 10, border: 'solid', borderWidth: 'thin', borderColor: '#082a4b' }}>

            </div>
            <BodyMenu>
                <Ul style={{ height: '90vh' }}>{isMenu.map((value, index) => {
                    return (
                        <Link href={`${value.route}`}>
                            <Li key={index}>
                            <A onClick={() => { handleExpaned(index) }}>
                                {value.icon && <Icon style={{ marginRight: 15 }}>{value.icon}</Icon>}
                                <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <Text visible={!expanedMenu}>{value.label}</Text>
                                    {expanedMenu && value.children && <Icon style={{ opacity: 0.2 }}>{value.expaned ? 'arrow_drop_up' : 'arrow_drop_down'}</Icon>}
                                </div>
                            </A>
                            {value.expaned && value.children ?
                                <ExpanedMenu expaned={value.expaned}>
                                    <Ul style={{ backgroundColor: '' }}>
                                        {value.children.map((element: { label: any; }, key: Key | null | undefined) => {
                                            return (
                                                <Li key={key}>
                                                    <A style={{ paddingLeft: 55 }} >
                                                        <Text visible={!expanedMenu}>{element.label}</Text>
                                                    </A>
                                                </Li>
                                            )
                                        })}
                                    </Ul>
                                </ExpanedMenu>
                                : null}
                        </Li>
                        </Link>
      
                    )
                })}
                </Ul>
            </BodyMenu>

            <div style={{ padding: 5, position: 'absolute', bottom: 0, alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%', height: '5vh' }}>
                {expanedMenu && <Icon style={{ fontSize: 20 }}>settings</Icon>}
                <Icon onClick={() => setExpanedMenu(!expanedMenu)} style={{ marginRight: 15, fontSize: 38 }}>{expanedMenu ? 'arrow_left' : 'arrow_right'}</Icon>
            </div>
        </Container>

    )
}
