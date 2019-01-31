import React, { Component } from 'react'
import axios from 'axios'
import { Card, CardBody, Input } from 'reactstrap';
import styled from 'styled-components'

const Postion = styled.div`

display: flex;
justify-content: center;
 
`


const CategoryButton = styled.button`
display: flex;
justify-content: center;
background: #1d3557;
color: white;
font-size: 1.3rem;
padding: 7.5px 5px;
`

const CategoryContainerStyle = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-content: flex-start;
`


export default class CategoryPage extends Component {
    state = {
        user: {},
        category: []
    }

    componentDidMount() {
        this.getAllUsers()
        this.getAllCategories()
    }
    getAllUsers = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res) => {
            console.log(res.data)
            this.setState({ user: res.data })
        })
    }

    getAllCategories = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/category`).then(res => {
            console.log(res.data)
            this.setState({
                category: res.data
            })
        })
    }

    handleCreateNewCategory = () => {

        const userId = this.props.match.params.userId
        const payload = {
            name: 'Title',
            genre: 'name',
            year: 'number',
            category: 'type',
            image: 'image',
        }

        axios.post(`/api/users/${userId}/category`, payload).then(res => {
            console.log('clicked')
            const newCategories = res.data
            const newStateCategories = [...this.state.categories, newCategories]
            this.setState({ categories: newStateCategories })
        })
    }

    handleChange = (e, categoryId) => {
        const { value, name } = e.target
        const newCategories = [...this.state.categories]
        const mapCategory = newCategories.map(category => {
            if (category._id === categoryId) {
                category[name] = value
            }
            return category
        })
        this.setState({ categories: mapCategory })
    }

    handleDelete = (categoryId) => {
        console.log(categoryId)
        const userId = this.props.match.params.userId
        axios.delete(`/api/user/${userId}/category/${categoryId}`).then(() => {
            const newCategories = [...this.state.categories]
            const filterCategory = newCategories.filter(category => {
                return category._id !== categoryId
            })
            this.setState({ categories: filterCategory })
        })
    }
    handleUpdate = (categoryId) => {
        const userId = this.props.match.params.userId
        const findCategory = this.state.categories.find(category => {
            return category._id === categoryId
        })
        axios.patch(`/api/user/${userId}/category/${categoryId}`, findCategory).then(() => {
            console.log("updated category")
        })
    }


    render() {

        const cat = this.state.category.map((category, i) => {
            return (
                <div key={category._id}>

                            <Input onBlur={() => this.handleUpdate(category._id)} type="text" onChange={(event) => this.handleChange(event, category._id)} name="name" value={category.id} placehloder="name" />
                            <Input onBlur={() => this.handleUpdate(category._id)} type="text" onChange={(event) => this.handleChange(event, category._id)} name="genre" value={category.genre} />
                            <Input onBlur={() => this.handleUpdate(category._id)} type="text" onChange={(event) => this.handleChange(event, category._id)} name="year" value={category.year} />
                            <Input onBlur={() => this.handleUpdate(category._id)} type="text" onChange={(event) => this.handleChange(event, category._id)} name="category" value={category.category} />
                            <Input onBlur={() => this.handleUpdate(category._id)} type="text" onChange={(event) => this.handleChange(event, category._id)} name="image" value={category.image} />
                            <button onClick={() => this.handleDelete(category._id)}>delete</button>

                        </div>
            )
        })

        return (
            <div>

                <Postion>
                    <h1>{this.state.user.username} My Profile </h1>
                </Postion>
                <Postion>
                    <CategoryButton onClick={this.handleCreateNewCategory}>
                        Add Subject
        </CategoryButton>
        <h1>{cat}</h1>
                </Postion>
</div>
)
}
}