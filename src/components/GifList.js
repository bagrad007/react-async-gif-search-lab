import React, { Component } from 'react'


export default class GifList extends Component {
    render() {
        return (
            <div>
                {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
            </div>
        )
    }
}
