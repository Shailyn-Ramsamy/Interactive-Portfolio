import React from 'react'


const renderContent = {
    1: (
        <h1 className="sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx5">Hi, I'm Shailyn, welcome to my world!</h1>
    ),
    2: (
        <h1 className="sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx5">Projects</h1>
    ),
    3: (
        <h1 className="sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx5">Contact</h1>
    ),
    4: (
        <h1 className="sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx5">About</h1>
    )
}


const HomeInfo = ({currentStage}) => {
    console.log('Current Stage in HomeInfo:', currentStage);
    return renderContent[currentStage] || null;
}

export default HomeInfo