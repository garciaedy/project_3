import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ListStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border-radius: 25px;
  background: white;
  margin: 10px 0;
  button {
    width: 40px;
    right: 5px;
    top: 10px;
    font: 30px;
    background-color: ;
    border-radius: 5px;
    position: absolute;
    border: none;
  }
  input,
  textarea {
    background-color:beige;
    border: solid;
    border-radius: 25px;
    
  }
  input {
    height: 30%;
    font-size: 1.3rem;
    left: 40px;
  }
  textarea {
    height: 70%;
    border-radius:25px;
  }

  `
export default class Category extends Component {
    state = {
        user: {},
        categories:[]
    }
    componentDidMount(){
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res =>{
            console.log(res.data)
            this.setState({
                user: res.data,
                categories: res.data.categories
            })
        })
    }
  handleCreateNewCategory=() =>{
    const userId = this.props.match.params.userId
    const payload ={
        name: 'Name',
        description:'Description',
        image:'image'
    }
axios.post(`/api/users/${userId}/categories`, payload).then(res =>{
    const newCategory = res.data
    const newStateCategories = [...this.state.categories, newCategory]
    this.setState({categories: newStateCategories})

})
}
handleDelete = categoryId =>{
    axios.delete(`/api/categories/${categoryId}`).then(() =>{
        const newCategories = [...this.state.categories]
        const filtered = newCategories.filter(category =>{
            return category._id !== categoryId
        })
        this.setState({categories: filtered})
    })
}
handleChange = (event, categoryId) => {  
this.setState({ category: event.target.value})}
    // const {value, name} = event.target
//     const newCategories = [...this.state.categories]
//     const mapCategory = newCategories.map(category =>{
//         if(category._id === categoryId){
//             // category[name]=value
//         }
    
//     })
//     this.setState({categories: mapCategory})
// }

// handleChange = e => {
//     console.log("name", e.target.name);
//     console.log("value", e.target.value);
//     const updatedCategory = {...this.state.categories};
//     updatedCategory[e.target.name] = e.target.value;
//     this.setState({ categories: updatedCategory });
//   };

handleUpdate = (categoryId) =>{
    const userId = this.props.match.params.userId
    const findCategory = this.state.categories.find(category =>{
        return category._id === categoryId
    })
    // const categoryToUpdate = this.state.category.find(category =>{
    //     return category._id === categoryId
    // })
    axios.patch(`/api/categories${userId}.category${categoryId}`, findCategory).then(()=>{
        console.log("updated Category")
    })
}
  render() {
    return (
        <div className ="background4">
        <h1>Welcome User {this.state.user.username}</h1>
       
        <button className ='button' onClick={this.handleCreateNewCategory}>
          Create Item
          </button>
         
          
        <listStylesC>
          {this.state.categories.map(category => {
              const deleteCategory = () => {
              return this.handleDelete(category._id)
            }
            return (
              <ListStyles>
              <input
              onChange={this.handleChange}
              value={this.state.user.image}
              type="text"
              name="image"
              
            />
            <img src={this.state.categories.image} alt="mage" />
        
                <input 
                   onBlur={() => this.handleUpdate(category._id)}
                  onChange={(event) => this.handleChange(event, category._id)} 
                  type="text" name="title" 
                  value= {category.title} 
                />


                <textarea 
                  onBlur={() => this.handleUpdate(category._id)}
                  onChange={(event) => this.handleChange(event, category._id)} 
                  name="description" 
                  value={category.description} 
                />
                <button onClick={deleteCategory}>delete</button>
                </ListStyles>
            )
          })}
          </listStylesC>
      </div>
    )
  }
}
