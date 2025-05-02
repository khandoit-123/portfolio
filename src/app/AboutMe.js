const AboutMe = () =>{
    return(
        <div className = 'text-3xl font-bold text-center text-blue-400'>
            <h1 className="pb-10 pt-10">About me</h1>
            <div className="p-4 border-4 border-blue-500 rounded-lg flex items-center justify-center space-x-6">
                <img src="/pics/man.png" width={100} height={100} alt="picture of a me" className="rounded-lg"></img>
                <p>Hello I'm Khan! I love programming and would like for you to provide me the opportunities to learn and grow!</p>
            </div>
            <div className="items-start flex flex-col sm:flex-row m-10 text-white bg-gray-700">
                <div className="sm:w-1/2 border m-2 bg-black opacity-75 p-5">
                    <h2>Education</h2>
                    <div className="flex">
                        <img src='/pics/tjc.png' width={100} height={100} alt="school" className="object-contain"></img>
                        <div className=" p-5 justify-center text-xl"> 
                            <p className="leading-relaxed">I graduated from Temasek Junior College with a subject combination of PCME, (AAA/B) achieving a total of 88.75 RP.
                                I am also a Peer Support Leader, where I promoted student well-being. Additionally participating in two Australian Mathematics Competitions.
                                I was a also a member of the First Aid Club, where I gained valuable skills in emergency response and first aid.</p>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 border m-2 bg-black opacity-75 p-5">
                    <h2>Experiences</h2>
                    <div className="flex">
                        <img src='/pics/ns.png' width={100} height={100} alt="army" className="object-contain"></img>
                        <div className=" p-5 justify-center text-xl"> 
                            <p className="leading-relaxed">In my time in the army, I learnt many practical skills such as Adobe Photoshop and Premier Pro.
                                I also acted as the primary point of contact between different branches liaising with others to secure coverage for events and content for 
                                video montages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe