import React from 'react';

//Conceito de Propriedades
interface HeaderProps{
    title?: string; //Se nao for obrigatorio colocar ? antes de :
}

const Header: React.FC <HeaderProps> = (props) => {
    return (  //{props.title} Inserindo HTML dentro do JAVASCRIPT
        <header>
            <h1>{props.title}</h1> 
        </header>
    );
}

export default Header;