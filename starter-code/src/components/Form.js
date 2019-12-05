import React from 'react'

class Form extends React.Component {

    state = {
        name: '',
        calories: 0,
        image: ''
    }

    
    handleInput = e => {
        let { name, value } = e.target
        
        this.setState({ [name] : value })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        const { addFood } = this.props
        // console.log('state', this.state);
        this.props.addFood(this.state)

        this.setState({
            name: '',
            calories: 0,
            image: null
        })
    }

    render () {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input 
                        onChange={this.handleInput}
                        type="text" 
                        name="name" 
                        value={this.state.name}/>
    
                    <label>Calories: </label>
                    <input 
                        onChange={this.handleInput}
                        type="number" 
                        name="calories" 
                        value={this.state.calories}/>

                    <label>Image: </label>
                    <input 
                        onChange={this.handleInput}
                        type="text" 
                        name="image" 
                        value={this.state.image}/>
    
    
                    <button>Submit</button>
                </form>
            </div>
        )

    }
}

export default Form;
