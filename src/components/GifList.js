import React, { Component } from 'react'


export default class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.gifs}</li>
                </ul>
            </div>
        )
    }
}
