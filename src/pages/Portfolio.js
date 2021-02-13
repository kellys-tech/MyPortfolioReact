import React from "react";
import BudgetBuddy from "../assets/BudgetBuddy.png";
import EmployeeDirectory from "../assets/EmployeeDirectory.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <Container>
        <Col xs="auto">
        My Portfolio
        </Col>
      <Row>
        <Col xs="auto">
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://github.com/japb1998/1_GroupProyect/raw/main/assets/MoviesGenerated.png" />
            <Card.Body>
              <Card.Title>D&M(Dinner and a Movie)</Card.Title>
              <Card.Text>Group Project</Card.Text>
              <Button variant="primary" href="https://kellys-tech.github.io/DinnerandMovie/movies.html">Pages</Button>
              <Button href="https://github.com/kellys-tech/DinnerandMovie">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto">
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://github.com/kellys-tech/NoteTaker-Express/raw/main/public/assets/Image/NoteTaker.png" />
            <Card.Body>
              <Card.Title>Note Taker</Card.Title>
              <Card.Text>Note Taking app using Express and deployed to Heroku</Card.Text>
              <Button variant="primary" href="https://gentle-river-99378.herokuapp.com/">Heroku</Button>
              <Button href="https://github.com/kellys-tech/NoteTaker-Express">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto">
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://github.com/kellys-tech/WeatherDashboard/raw/main/Assets/SearchAndDisplay.png" />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>Weather Dashboard using JQuery and a weather API</Card.Text>
              <Button variant="primary" href=" https://kellys-tech.github.io/WeatherDashboard/index.html">Pages</Button>
              <Button href=" https://github.com/kellys-tech/WeatherDashboard">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="auto">
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={BudgetBuddy} />
            <Card.Body>
              <Card.Title>My Budget Buddy</Card.Title>
              <Card.Text>Budget Tracker using Express, Sequelize and Chart.js</Card.Text>
              <Button variant="primary" href="https://kellys-tech.github.io/DinnerandMovie/movies.html">Pages</Button>
              <Button href="https://github.com/kellys-tech/Project2">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto">
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://github.com/kellys-tech/FitnessTracker/blob/main/public/images/Workout.png" />
            <Card.Body>
              <Card.Title>Fitness Tracker</Card.Title>
              <Card.Text>Fitness Tracker using Express, MongoDB and Mongo</Card.Text>
              <Button variant="primary" href="https://gentle-coast-70424.herokuapp.com/">Heroku</Button>
              <Button href="https://github.com/kellys-tech/FitnessTracker">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto">
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={EmployeeDirectory} />
            <Card.Body>
              <Card.Title>Employee Directory</Card.Title>
              <Card.Text>Employee Directory created using React</Card.Text>
              <Button variant="primary" href=" https://kellys-tech.github.io/EmployeeDirectory/">Pages</Button>
              <Button href="https://github.com/kellys-tech/EmployeeDirectory">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;