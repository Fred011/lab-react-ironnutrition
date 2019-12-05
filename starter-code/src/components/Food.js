import React from 'react'

export default function Food(props) {
    // console.log('Food component', props);

    const { name, calories, imageUrl } = props;
    
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <div className="image is-64x64">
                    <img src={imageUrl} alt="" />
                </div>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        value="1"
                    />
                    </div>
                    <div className="control">
                    <button className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>     
    )
}
