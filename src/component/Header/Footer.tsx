import React from 'react';
import { Header, Grid, Icon, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (

        <Grid>
            <Grid.Column width={3}>
                <Header as="h3" textAlign='center'>Follow Us</Header>
                <Grid columns="equal">
                    <Grid.Row centered>
                        <Grid.Column>
                            <Icon link name='facebook' size='big'></Icon>

                        </Grid.Column>
                        <Grid.Column>
                            <Icon link name='instagram' size='big'></Icon>
                        </Grid.Column>
                        <Grid.Column>
                            <Icon link name='twitter' size='big'></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header as="h2" textAlign='center'>Who are we?</Header>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptatum assumenda porro sit quo fuga nostrum nam laboriosam ut error nulla adipisci provident, minima, ratione quasi architecto aliquid, numquam et?</p>

            </Grid.Column>
            <Grid.Column width={5}>
                <Header as="h3" textAlign='center'>Site Links</Header>
                <List link celled horizontal>
                    <List.Item as={NavLink} to='/' active>Home</List.Item>
                    <List.Item as={NavLink} to='/about'>About</List.Item>
                    <List.Item as={NavLink} to='/cakesMenu'>Cakes Menue</List.Item>
                    <List.Item as={NavLink} to='/contacts'>Contact Us</List.Item>
                </List>

            </Grid.Column>
        </Grid>


    );
}

export default Footer;
