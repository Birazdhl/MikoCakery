import React from 'react'
import { Header, Image, Container, Grid, Menu, Item } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'

const HeaderMenu: React.FC = () => {
    return (
        <Grid fixed='Top'>
            <Grid.Column width={8}>

                <Container >

                    <Header as='h2' >
                        <Image className='imageLogo' id='lio' src='assets/mikosCake.png' />
                    </Header>

                </Container>
            </Grid.Column>

            <Grid.Column width={8}>
                <div className='section'>
                    <ul>
                        {/* <li><Menu.Item >About</Menu.Item></li>
                        <li><Menu.Item >Cakes Menu</Menu.Item></li>
                        <li><Menu.Item >Contacts</Menu.Item></li> */}
                        <Menu.Item>
                            <li><Item as={NavLink} to='/about'>About</Item></li>
                            <li><Item as={NavLink} to='/cakesMenu'>Cakes Menu</Item></li>
                            <li><Item as={NavLink} to='/contacts'>Contacts</Item></li>
                        </Menu.Item>
                    </ul>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default HeaderMenu
