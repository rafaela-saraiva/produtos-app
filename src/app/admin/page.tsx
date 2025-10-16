'use client'

import {Alert, Button} from 'react-bootstrap'
import styles from './page.module.css';
import FeaturesPage from './features/page';



function meuAlert(){
    console.log('alert');
    return <Alert variant='warning'>Sucesso! Página carregada</Alert>;
}

export default function HomePage(){
    return (
        <>
        <h1>HOME PAGE</h1>

        {meuAlert()}
        <Button onClick={meuAlert}>Teste</Button>
        </>
    );
        
     
     

}

