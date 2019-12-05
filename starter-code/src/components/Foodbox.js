import React from 'react'
import Food from './Food';


function Foodbox (props) {

    // console.log('console log', props.foods);
    const { foods } = props
    // console.log('Foodbox component', props);
    
    return (
        <div className="Foodbox">

            {
                foods.map((food, index) => {
                    {/* console.log('food map', food.name); */}
                    
                    return (
                        <Food name={food.name} calories={food.calories} imageUrl={food.image} key={index}/>
                    )
                })
            }

        </div>
    )
}

export default Foodbox;