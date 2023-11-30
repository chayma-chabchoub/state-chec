import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

 export default class App extends Component {
  constructor (props){
    super(props)
    this.state={
      // id state person
      person:{
      fullName:'Abdelhamid Bouchnak', 
      bio:' Abdelhamid Bouchnak est le fils du chanteur tunisien Lotfi Bouchnak. Il effectue ses études à lÉcole supérieure de laudiovisuel et du cinéma (ESAC) à Gammarth1.Ensuite, il devient réalisateur au sein de la société Shkoon Production.',
      imgSrc:'https://pictures.artify.tn/media/gcdqbipk7bxhx9l5rnvt.jpg', 
      profession:'Director',
      show:true},
      intervalId: null,
      timeSinceMount: 0,
    }  
  }
  // this is a button
  show=()=>{
    this.setState({show:!this.state.show})
  }
  // componentdidmount time (counteur)
  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState((prevState) => ({
          timeSinceMount: prevState.timeSinceMount + 1,
        }));
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
// card style
  render() {
    const { person,timeSinceMount } = this.state;
    return (
          <div className='App'>
            <h1 style={{color:'#FFFFFF',marginTop:'100px',marginBottom:'20px'}}> </h1> {this.state.show &&
            <Card style={{ width: '18rem',margin:'20px', borderRadius:'15px'}}>
      <Card.Img  src={person.imgSrc}/>
      <Card.Body>
      <Card.Title style={{color:'pink'}}>{person.fullName}</Card.Title>
      <Card.Text>
          {person.bio}  {person.profession}
        </Card.Text>
      </Card.Body>
       </Card>}
       <Button  onClick={this.show} style={{marginTop:'10px'}}>Show profile</Button>
    <p style={{color:'#FFFFFF'}}>Time since mount: {timeSinceMount} seconds</p>
    </div>
    )

            }}