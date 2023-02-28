import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Card(props) {
  return (
    <MDBCard>
      <MDBCardImage src={props?.url} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{props?.title}</MDBCardTitle>
        <MDBCardText>
          {props?.desc}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

    //   <div className="card" style={{width:'400px'}}>
    //   <img className="card-img-top" src={props?.url} alt="Card image" style={{width:'100%'}}/>
    //   <div className="card-body">
    //     <h4 className="card-title">{props?.title}</h4>
    //     <p className="card-text">{props?.desc}</p>
    //     <a href="#" className="btn btn-primary">See Profile</a>
    //   </div>
    // </div>
  );


}