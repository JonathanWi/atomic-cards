import React, { Component } from 'react';
import { connectToSpreadsheet } from "react-google-sheet-connector"

const Content = (props) => {
    return (
        <div className='cards'>
            {
                props.getSheet("Feuille 1")
                    .map((row, i) => (
                        <div className='playing-card identity'>
                            <h1>{row[0]}</h1>
                            <h3>{row[1]}</h3>
                            <div className='fonts'>
                                <h5>Fonts</h5>
                                <p>{row[2]}</p>
                                <p>{row[3]}</p>
                            </div>
                            <h5>Palette</h5>
                            <ul>
                                {
                                    row[4].split(',')
                                    .map((color) => (
                                        <li>
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