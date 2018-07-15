import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import projetcb from '../assets/img/crazybattle.jpg';

const Projets = (props) => {
  return (
    <div>
      <h3>Projet en Cours</h3>
      <Card>
          <CardImg top width="20%" src={projetcb} alt="Projet CB" />
          <CardBody>
            <CardTitle>CrazyBattle</CardTitle>
            <CardSubtitle>Projet en Construction</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button href="https://github.com/crazybattle"> GitHub</Button> <Button href="https://crazybattle.fr">SiteWeb</Button>
          </CardBody>
      </Card>
    </div>
  );
};

export default Projets;