import React, { Component } from 'react'
import axios from 'axios'
import styled from "styled-components";
import UpdateCat from "./UpdateCat";



const PageStyle = styled.div`
  font-family: "EB Garamond", serif;
  margin: 12px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: column;
  img {
    border-radius: 50px;
    margin: 12px 0px;
  }
`;

const Leteter = styled.div`
  font-family: "EB Garamond", serif;
  margin: 12px 0px;
  color: #f57c00;
  font-weight: bolder;
  background: url("http://2.bp.blogspot.com/-MRwYeTOVaw0/VZ3IlIoQpyI/AAAAAAAAIr8/Wetii_b7KWs/s1600/flying%2Bthrough%2Bthe%2Bvoid.gif");
  border-radius: 20px;
  margin: 0px 80px 0px 80px;
`;

const Back = styled.div`
  font-family: "EB Garamond", serif;
  margin: 12px 0px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRNub8wGbW_aqxk-Hvo_yVZJzq3EXESJeNhFxv2f5m7UO2t1j");
  height: 20%;
  border-radius: 12px;
  margin: 0px 80px 0px 80px;
`;
const Form = styled.div`
  font-family: "EB Garamond", serif;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background: url("http://paperlief.com/images/blue-gradient-wallpaper-2.jpg");
  width: 40vw;
  background-repeat: no-repeat;
  background-position: fill;
  border-radius: 20px;
  margin: 0px 100px 0px 100px;
`;

const BothStuff = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 12px 0px;
`;
export default class SingleCat extends Component {
  state = {
    entertainment: []
  };

  componentDidMount() {
    const categoriesId = this.props.match.params.categoriesId;
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}/categories/${categoriesId}`).then(res => {
      console.log(res.data);
      this.setState({ entertainment: res.data });
    });
  }

  render() {
    return (
      <div>
        <PageStyle>
          <Leteter>
            <h3> {this.state.entertainment.name}</h3>
          </Leteter>
          <img src={this.state.entertainment.image} alt="gamePicture" />
        </PageStyle>
        <BothStuff>
          <Back>
            <h3>What console I played this game at:</h3>
            <h5> {this.state.entertainment.password}</h5>

            <h3>
              The year the game was released: <br />
            </h3>
            <h5>{this.state.entertainment.year}</h5>
          </Back>
          <Form>
            <h3>Update game:</h3>
            <UpdateCat {...this.props} />
          </Form>
        </BothStuff>
      </div>
    );
  }
}
