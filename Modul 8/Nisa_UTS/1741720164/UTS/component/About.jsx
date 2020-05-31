import React from 'react';
import { Component } from 'react';
import Foto from '../nisa.jpg';

class About extends Component {
    render() {
        return (
            <div className="mt-4">
                <img src={Foto} className="w-25 h-25 mx-auto d-block mb-3" />
                <h1 className="text-center">Nisa' Nurrochmah Hani</h1>
                <h3 className="text-center">NIM : 1741720164</h3>
            </div>
        )
    }
}

export default About;