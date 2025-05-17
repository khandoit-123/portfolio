import ReactPlayer from "react-player/youtube"
const pad = 'pb-5'
const desc = 'border bg-black text-white m-5 text-lg opacity-75'

const Projects = () => {
    return(
        <div className="text-3xl font-bold text-center text-blue-400 bg-gray-700">
            <h1 className="pb-10 pt-10">My projects</h1>
            <div className = {pad}>
                <p>Project 1 ~ Company homepage</p>
                <div className='flex justify-center mt-5 '>
                    <ReactPlayer url='https://www.youtube.com/watch?v=SYVRbiW1wGo' controls={true} muted={true}/>
                </div>
                <div className={desc}>
                    <p>This experimental company website was developed in HTML, CSS and Javascript. It was made to show the company's services and its description.
                        I implemented some features such as animations and also tried enhancing the SEO. Additionally I learnt many things to better 
                        improve my code and UI/UX such as learning how to make tabs, a user input form and components using React which helped me in developing the very
                        portfolio website you are on.
                    </p>
                </div>
            </div>
            <div className = {pad}>
                <p>Project 2 ~ To-do list (With GUI)</p>
                <div className='flex justify-center mt-5'>
                    <ReactPlayer url='https://youtu.be/GzzJyXFLNpg' controls={true} muted={true}/>
                </div>
                <div className={desc}>
                    <p>I created this To-do list with Python's Tkinter library. It features a user-friendly GUI that can enables users to add and delete tasks easily.
                        Additionally I utilized json to save the actions inside the list so that the user will not lose their data upon reopening the app.
                    </p>
                </div>
            </div>
            <div className = {pad}>
                <p>Project 3 ~ Text based shopping list</p>
                <div className='flex justify-center mt-5'>
                    <ReactPlayer url='https://youtu.be/WtihwdSF2Wk'controls={true} muted={true}/>
                </div>
                <div className={desc}>
                    <p>A command-line shopping cart system developed in Python that allows users to add and remove products from their list.
                        The program was tested as well to recieve wrong inputs and prompt the user to correct their input.
                    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects