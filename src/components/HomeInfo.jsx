import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useSpring, animated } from '@react-spring/web';
import '../pages/HomeInfo.css';
import '../index.css'
import { CloseButton } from '@chakra-ui/react'
import { IoClose } from "react-icons/io5";
const AnimatedH1 = ({ children, className, currentStage, onClickButton }) => {



// Step 2: Click event handler to toggle visibility

    const handleClick = () => {
        onClickButton();
    };

    return (
        <div className='card'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.96, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="example-container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.96, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 3, // Set a 10-second delay for the second motion.div
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={handleClick}
                    >
                        <IoClose size={17}/>
                    </motion.div>
                </div>
                {children}
            </motion.div>
        </div>
    );
};


const HomeInfo = ({ currentStage, onClickButton }) => {
    const [isVisible, setIsVisible] = useState(false);
    const openDiv1 = () => {
        setIsVisible(!isVisible);
    };

    const handleClick2 = () => {
        onClickButton();
    };

    const renderContent = {
        1: (
            <AnimatedH1 currentStage={1}>
                <div  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/src/assets/images/computerPic.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello, welcome to my world!</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a onClick={openDiv1} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {isVisible && (
                    <div className="fullscreen-overlay">
                        <div>
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                The Joke Tax Chronicles
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                Once upon a time, in a far-off land, there was a very lazy king who
                                spent all day lounging on his throne. One day, his advisors came to him
                                with a problem: the kingdom was running out of money.
                            </p>
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                                The King's Plan
                            </h2>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king thought long and hard, and finally came up with{" "}
                                <a
                                    href="#"
                                    className="font-medium text-primary underline underline-offset-4"
                                >
                                    a brilliant plan
                                </a>
                                : he would tax the jokes in the kingdom.
                            </p>
                            <blockquote className="mt-6 border-l-2 pl-6 italic">
                                "After all," he said, "everyone enjoys a good joke, so it's only fair
                                that they should pay for the privilege."
                            </blockquote>
                            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                                The Joke Tax
                            </h3>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king's subjects were not amused. They grumbled and complained, but
                                the king was firm:
                            </p>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                <li>1st level of puns: 5 gold coins</li>
                                <li>2nd level of jokes: 10 gold coins</li>
                                <li>3rd level of one-liners : 20 gold coins</li>
                            </ul>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                As a result, people stopped telling jokes, and the kingdom fell into a
                                gloom. But there was one person who refused to let the king's
                                foolishness get him down: a court jester named Jokester.
                            </p>
                            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                                Jokester's Revolt
                            </h3>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                Jokester began sneaking into the castle in the middle of the night and
                                leaving jokes all over the place: under the king's pillow, in his soup,
                                even in the royal toilet. The king was furious, but he couldn't seem to
                                stop Jokester.
                            </p>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                And then, one day, the people of the kingdom discovered that the jokes
                                left by Jokester were so funny that they couldn't help but laugh. And
                                once they started laughing, they couldn't stop.
                            </p>
                            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                                The People's Rebellion
                            </h3>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The people of the kingdom, feeling uplifted by the laughter, started to
                                tell jokes and puns again, and soon the entire kingdom was in on the
                                joke.
                            </p>
                            <div className="my-6 w-full overflow-y-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="m-0 border-t p-0 even:bg-muted">
                                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                            King's Treasury
                                        </th>
                                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                            People's happiness
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="m-0 border-t p-0 even:bg-muted">
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Empty
                                        </td>
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Overflowing
                                        </td>
                                    </tr>
                                    <tr className="m-0 border-t p-0 even:bg-muted">
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Modest
                                        </td>
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Satisfied
                                        </td>
                                    </tr>
                                    <tr className="m-0 border-t p-0 even:bg-muted">
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Full
                                        </td>
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Ecstatic
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king, seeing how much happier his subjects were, realized the error
                                of his ways and repealed the joke tax. Jokester was declared a hero, and
                                the kingdom lived happily ever after.
                            </p>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The moral of the story is: never underestimate the power of a good laugh
                                and always be careful of bad ideas.
                            </p>
                        </div>
                        <div className="example-container">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 0.96, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 3, // Set a 10-second delay for the second motion.div
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onClick={handleClick2}
                            >
                                <IoClose size={17}/>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatedH1>
        ),
        2: (
            <AnimatedH1 currentStage={1}>
                <div  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/src/assets/images/computerPic.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello, welcome to my world!</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a onClick={openDiv1} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {isVisible && (
                    <div className="fullscreen-overlay2">
                        <div>
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                The Joke Tax Chronicles
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                Once upon a time, in a far-off land, there was a very lazy king who
                                spent all day lounging on his throne. One day, his advisors came to him
                                with a problem: the kingdom was running out of money.
                            </p>
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                                The King's Plan
                            </h2>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king thought long and hard, and finally came up with{" "}
                                <a
                                    href="#"
                                    className="font-medium text-primary underline underline-offset-4"
                                >
                                    a brilliant plan
                                </a>
                                : he would tax the jokes in the kingdom.
                            </p>
                            <blockquote className="mt-6 border-l-2 pl-6 italic">
                                "After all," he said, "everyone enjoys a good joke, so it's only fair
                                that they should pay for the privilege."
                            </blockquote>
                            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                                The Joke Tax
                            </h3>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king's subjects were not amused. They grumbled and complained, but
                                the king was firm:
                            </p>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                <li>1st level of puns: 5 gold coins</li>
                                <li>2nd level of jokes: 10 gold coins</li>
                                <li>3rd level of one-liners : 20 gold coins</li>
                            </ul>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                As a result, people stopped telling jokes, and the kingdom fell into a
                                gloom. But there was one person who refused to let the king's
                                foolishness get him down: a court jester named Jokester.
                            </p>
                            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                                Jokester's Revolt
                            </h3>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                Jokester began sneaking into the castle in the middle of the night and
                                leaving jokes all over the place: under the king's pillow, in his soup,
                                even in the royal toilet. The king was furious, but he couldn't seem to
                                stop Jokester.
                            </p>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                And then, one day, the people of the kingdom discovered that the jokes
                                left by Jokester were so funny that they couldn't help but laugh. And
                                once they started laughing, they couldn't stop.
                            </p>
                            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                                The People's Rebellion
                            </h3>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The people of the kingdom, feeling uplifted by the laughter, started to
                                tell jokes and puns again, and soon the entire kingdom was in on the
                                joke.
                            </p>
                            <div className="my-6 w-full overflow-y-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="m-0 border-t p-0 even:bg-muted">
                                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                            King's Treasury
                                        </th>
                                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                            People's happiness
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="m-0 border-t p-0 even:bg-muted">
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Empty
                                        </td>
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Overflowing
                                        </td>
                                    </tr>
                                    <tr className="m-0 border-t p-0 even:bg-muted">
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Modest
                                        </td>
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Satisfied
                                        </td>
                                    </tr>
                                    <tr className="m-0 border-t p-0 even:bg-muted">
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Full
                                        </td>
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            Ecstatic
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king, seeing how much happier his subjects were, realized the error
                                of his ways and repealed the joke tax. Jokester was declared a hero, and
                                the kingdom lived happily ever after.
                            </p>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The moral of the story is: never underestimate the power of a good laugh
                                and always be careful of bad ideas.
                            </p>
                        </div>
                        <div className="example-container">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 0.96, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 3, // Set a 10-second delay for the second motion.div
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onClick={handleClick2}
                            >
                                <IoClose size={17}/>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatedH1>
        ),
        3: (
            <AnimatedH1 currentStage={1}>
                <div  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/src/assets/images/computerPic.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello, welcome to my world!</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a onClick={openDiv1} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {isVisible && (
                    <div className="fullscreen-overlay2">
                        This div becomes visible when openDiv1 is clicked.
                        <div className="example-container">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 0.96, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 3, // Set a 10-second delay for the second motion.div
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onClick={handleClick2}
                            >
                                <IoClose size={17}/>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatedH1>
        ),
        4: (
            <AnimatedH1 currentStage={1}>
                <div  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/src/assets/images/computerPic.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello, welcome to my world!</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a onClick={openDiv1} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {isVisible && (
                    <div className="fullscreen-overlay">
                        This div becomes visible when openDiv1 is clicked.
                        <div className="example-container">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 0.96, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 3, // Set a 10-second delay for the second motion.div
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onClick={handleClick2}
                            >
                                <IoClose size={17}/>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatedH1>
        ),
    };

    return renderContent[currentStage] ? (
        <div className="home-info-content z-20" >
            {React.cloneElement(renderContent[currentStage], { onClickButton })}
        </div>
    ) : null;
};

export default HomeInfo;
