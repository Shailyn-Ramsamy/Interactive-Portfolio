import React from 'react'


const renderContent = {
    1: (
        <h1>Hi, I'm Shailyn, welcome to my world!</h1>
    ),
    2: (
        <h1>2</h1>
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    )
}

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo