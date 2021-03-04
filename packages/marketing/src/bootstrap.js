import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

const mount =(el)=>{
    ReactDom.render(
        <h1><App/></h1>,
        el
    );
}

if(process.env.NODE_ENV === 'development'){
    const devRoot= document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}

export {mount}