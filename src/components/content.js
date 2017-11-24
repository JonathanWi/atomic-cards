import React, { Component } from 'react';
import { connectToSpreadsheet } from "react-google-sheet-connector"

const Content = (props) => {
    return (
        <div className='cards'>
            {
                props.getSheet("Identity")
                    .map((row, i) => (
                        <div className='playing-card identity' key={row[0] + i}>
                            <img src={'../../img/identity.png'} alt=""/>
                            <h1>{row[0]}</h1>
                            <h3>{row[1]}</h3>
                            <div className='fonts'>
                                <h5>Fonts</h5>
                                <h4 style={{fontFamily: row[2]}}>{row[2]}</h4>
                                <h4 style={{fontFamily: row[3]}}>{row[3]}</h4>
                            </div>
                            <h5>Palette</h5>
                            <ul>
                                {
                                    row[4].split(',')
                                    .map((color) => (
                                        <li key={color}>
                                            <small>{color}</small> <b style={{height: '25px', backgroundColor: color}}></b>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                )
            }        
        </div>
    )
}

export default connectToSpreadsheet(Content) 