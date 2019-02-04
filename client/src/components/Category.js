import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default class Category extends Component {
    state ={
        user: {},
        categories:[]
    }
componentDidMount(){
    const userId = this.props.params.userId
    const payload ={
        name: 'Name',
        description:'Description',
        image:'image'
    }
axios.post(`/api.users/${userId}/categories`, payload).then(res =>{
    const newCategory = res.data
    const newStateCategories =[...this.state.categories, newCategory]
    this.setState({categories: newStateCategories})

})
}
handleDelete = categoryId =>{
    axios.delete(`/api/list/${categoryId}`).then(() =>{
        const newCategories =[...this.state.categories]
        const filtered = newCategories.filter(category =>{
            return category._id !==categoryId
        })
        this.setState({categories: filtered})
    })
}
handleChange =(event, categoryId) =>{
    const {value, name} = event.target
    const newCategories = [...this.state.categories]
    const updatedVals = newCategories.map(category =>{
        if(category.id === categoryId){
            category[name]=value
        }
        return category
    })
    handle.setState({categories: updatedVals})
}
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
