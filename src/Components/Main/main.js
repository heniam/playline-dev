import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import { Col, Image, Row } from 'react-bootstrap';

import './main.css';

class Main extends Component{


    state= {
        loading: true,
        people: []

    }

    
    async componentDidMount(){
        //CORS issue 
        //used proxyurl to solve it 
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // site that doesn’t send Access-Control-*
        const url = "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json"; 

        // to use it locally 
        // const url = "./data/playline-test.json" ;
        // const response = await fetch(url);

        const response = await fetch(proxyurl + url );
        const data = await response.json();
        console.log(data);
        this.setState({ people: data.players, loading:false });
    }
    

render(){
    
    function PlayerCases(person){
        switch(person.last_name){
            case "James": return <ul className="avatars" > <li className="avatars__item">
            <img src={process.env.PUBLIC_URL + '/assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png'} className="avatars__img"  alt=" "/>
            <p className="player-names">{person.last_name}</p>   
            </li></ul>;
            case "Davis": return <ul className="avatars" > <li className="avatars__item">
            <img src={process.env.PUBLIC_URL + '/assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png'} className="avatars__img"  alt=" "/>
            <p className="player-names">{person.last_name}</p>   
            </li></ul>;
            case "Gordon": return <ul className="avatars" > <li className="avatars__item">
            <img src={process.env.PUBLIC_URL + '/assets/headshots/Aaron Gordon -PLP59D7092156491v2.png'} className="avatars__img"  alt=" "/>
            <p className="player-names">{person.last_name}</p>   
            </li></ul>;
            case "Siakam": return <ul className="avatars" > <li className="avatars__item">
            <img src={process.env.PUBLIC_URL + '/assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png'} className="avatars__img"  alt=" "/>
            <p className="player-names">{person.last_name}</p>   
            </li></ul>;
            case "Leonard": return <ul className="avatars" > <li className="avatars__item">
            <img src={process.env.PUBLIC_URL + '/assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png'} className="avatars__img"  alt=" "/>
            <p className="player-names">{person.last_name}</p>   
            </li></ul>;
            case "Lowry": return <ul className="avatars" > <li className="avatars__item">
            <img src={process.env.PUBLIC_URL + '/assets/headshots/Kyle-Lowry-PLP59D70927DF104.png'} className="avatars__img"  alt=" "/>
            <p className="player-names">{person.last_name}</p>   
            </li></ul>;
            case "Russell": return <ul className="avatars" > <li className="avatars__item">
            <img src={process.env.PUBLIC_URL + '/assets/headshots/Dangelo Russell PLP59D709255D994v4.png'} className="avatars__img"  alt=" "/>
            <p className="player-names">{person.last_name}</p>   
            </li></ul>;
            default: return <p>xx</p>
        }
    }

  return (
    <div className="card-centered">
        <div className="card-position">
            <Row>
                <Col>
                <Card className="card-style">
                    <Card.Img className="prog-bar"  width= "10px" src={process.env.PUBLIC_URL + '/assets/icons/progress.svg'} alt="Progress Bar"  alt=" "/>
                    <Card.Body>
                        <Card.Title className="card-title "><h1>Your playline is set !</h1></Card.Title>
                        <Card.Subtitle className="card-subtitle "><h3>come back @ 7:30PM to track it live!</h3></Card.Subtitle>
                        <hr/>
                        <Card.Text className="card-text mb-4">
                        Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area
                        </Card.Text>
                       
                        
                        {/* PLAYER PICTURES and names  */}


                        <ul className="avatars">
                            {this.state.people.map((person, i) =>(
                                <li className="avatars__item" >
                                <li key = {i}>
                                    {this.state.loading || !this.state.people.length || !person.last_name  ? (
                                     <p> </p>) :(PlayerCases(person))}      
                                    </li>
                                    
                                </li>
                                
                            ))}
                        </ul>

                        
                        {/* POINTS */}
                        <ul className="points">
                            {this.state.people.map((person, i ) => (
                               
                                <li className="list-points" key={i}>
                                    { this.state.loading || !this.state.people.length || !person.points || !person.last_name ? (
                                        <span className="pts "> -- </span> ): 
                                            (<span className="pts "> {person.points} </span> )}
                                        <p className="player-points">PTS</p>
                                </li>
                               

                            )) }
                        </ul>
                       

                        <div className="bttn">
                        <Button className="btn-style mr-4 d-flex" variant="outline-secondary" >
                        <Image className=" ml-1 mr-2 "src={process.env.PUBLIC_URL + '/assets/icons/notify-me.svg'} width ="24" height="24"/>
                        
                        Notify me </Button>
                        <Button className="btn-style" variant="outline-secondary" >
                        <Image className="ml-1 mr-2 "src={process.env.PUBLIC_URL + '/assets/icons/money-bag.svg'}  width ="24" height="24" />
                            deposit</Button>
                        </div>
                        <hr/>
                        <Card.Text className="card-text-foot">
                        Download the app
                        </Card.Text>

                        <div className="app-store">
                        <Image className=" ml-1 mr-4 "src={process.env.PUBLIC_URL + '/assets/icons/ios-app.svg'} />
                        <Image className=" ml-1 mr-2 "src={process.env.PUBLIC_URL + '/assets/icons/google-play.svg'} />
                        </div>
                        
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    </div>
  );
};
}


export default Main;