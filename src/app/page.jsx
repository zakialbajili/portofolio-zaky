import Image from 'next/image'
import hero from '../images/hero.png'
import monitor from '../images/monitor.svg'
import screencast from '../images/screencast.svg'
import githubLogo from '../images/github-logo.svg'
import airplaneTilt from '../images/airplane-tilt.svg'
import instagramLogo from '../images/instagram-logo.svg'
import linkedinLogo from '../images/linkedin-logo.svg'
import listChecks from '../images/list-checks.svg'
import TShirt from '../images/TShirt.svg'
export default function Home() {
    return (
        <>
            <header className="bg-color-dark sticky top-0">
                <div
                    className=" container mx-auto flex md:flex-row flex-col gap-2 justify-between items-center p-2 text-color-white">
                    <div className="flex flex-row gap-2 items-center font-extrabold text-yellow-500">
                        <h1 className="text-2xl bg-color-greenMiddle text-color-dark rounded-full py-1 px-3">Z</h1>
                        <h3 className=" text-white">zakialbajili</h3>
                    </div>
                    <div id="nav-menu" className=" text-sm text-color-greenLow">
                        <ul className="flex flex-row gap-4">
                            <li>
                                <a href="#" className="hover:underline hover:font-bold hover:text-md hover:text-color-white">HOME</a>
                            </li>
                            <li>
                                <a href="#about-me" className="hover:underline hover:font-bold hover:text-md hover:text-color-white">ABOUT</a>
                            </li>
                            <li>
                                <a href="#my-project" className="hover:underline hover:font-bold hover:text-md hover:text-color-white">PROJECT</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline hover:font-bold hover:text-md hover:text-color-white">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <div className="bg-gradient-to-r from-color-grey to-color-greenDark">
                    <div id="jumbotron" className="container mx-auto flex flex-row md:flex-row place-content-center pt-10 ">
                        <div className="flex place-content-center flex-col grow md:max-w-[45vw] px-4 py-8">
                            <h1 className="md:text-5xl text-2xl font-bold md:mb-2 text-color-greenLow">Hello,</h1>
                            <h1 className="md:text-5xl text-2xl font-bold text-color-greenLow">I am Zaky Maulana Al Bajili</h1>
                            <p className=" mt-4 text-color-white md:text-2xl text-xl">Fullstack Web Developer</p>
                            <a href="https://www.linkedin.com/in/zakyalbajili10/"
                                className=" bg-color-greenDark text-color-white text-center py-2 hover:p-3 mt-8 w-[125px] shadow-2xl">Lihat
                                Profil</a>
                        </div>
                        <div className="hidden md:flex md:justify-end grow pt-4 px-6 ">
                            <Image src={hero} alt="hero" width={450} height={450} className=" opacity-60" />
                        </div>
                    </div>
                </div>
                <div id="about-me" className="bg-color-dark">
                    <div className="container mx-auto text-color-greenMiddle py-5">
                        <h3 className="font-extralight text-center pt-10 text-xl text-color-white">About Me</h3>
                        <h1 className="text-5xl font-bold text-center">Who am I?</h1>
                        <div className="flex flex-row flex-wrap place-content-center py-10 gap-4">
                            <div className="">
                                <Image src={hero} alt="profile" width={150} height={150}
                                    className="md:h-[200px] md:w-[200px] opacity-75 rounded-full shadow-2xl bg-color-greenMiddle" />
                            </div>
                            <div className="md:max-w-[30vw] px-4 text-justify">My name is Zaky Maulana Al Bajili and i am domiciled in Tangerang Regency, Indonesia. Currently, I am a student of Sultan Ageng Tirtayasa University majoring in Electrical Engineering. I have an interest in the world of Technology, especially in Web Development and Development Operations (DevOps). Some of the skills I currently have are HTML, CSS, Javascript, PHP, Laravel, React, Next.js, Express.js, and Google Cloud Platform.</div>
                        </div>
                    </div>
                </div>
                <div id="my-project" className="bg-gradient-to-l from-color-grey to-color-greenDark pb-[30px]">
                    <div className="container mx-auto">
                        <h1 className="text-color-white px-5 pt-10 text-3xl font-bold">My Project</h1>
                        <div className="flex md:flex-row flex-col justify-between flex-wrap gap-4 p-6">
                            <div className="grow md:max-w-[30vw] text-color-white">
                                <p className="text-justify py-4">Over the past few years I have been quite actively involved in the creation of several projects. All the projects I have worked on are always documented and neatly organized in my GIthub profile.</p>
                            </div>
                            <div className="grow px-4 mt-[20px] grid grid-cols-2 gap-4 md:max-w-[40vw]">
                                <a href="https://github.com/zakialbajili/monitoring_lux" className=" bg-gradient-to-t from-color-dark to-color-greenDark h-[30vh] rounded-md text-color-greenLow shadow-2xl flex flex-col place-content-center text-center hover:text-color-white py-5 px-2">
                                    <div className=" flex justify-center">
                                    <Image src={monitor} height={96} width={96} alt='monitoring'/>
                                    </div>
                                    <div className="font-bold md:text-xl">REAL TIME MONITORING LIGHT INTESITY</div>
                                </a>
                                <a href="https://github.com/zakialbajili/cuyanimelist" className=" bg-gradient-to-t from-color-dark to-color-greenDark h-[30vh] rounded-md text-color-greenLow shadow-2xl flex flex-col place-content-center text-center hover:text-color-white py-5 px-2">
                                    <div className="flex justify-center">
                                    <Image src={screencast} height={96} width={96} alt='myanimelist'/>
                                    </div>
                                    <div className="font-bold md:text-xl">MY ANIME LIST</div>
                                </a>
                                <a href="https://github.com/zakialbajili/Todolist_Stechoq" className=" bg-gradient-to-t from-color-dark to-color-greenDark h-[30vh] rounded-md text-color-greenLow shadow-2xl flex flex-col place-content-center text-center hover:text-color-white py-5 px-2">
                                    <div className="flex justify-center">
                                    <Image src={listChecks} height={96} width={96} alt='todo'/>
                                    </div>
                                    <div className="font-bold md:text-xl">TO DO LIST</div>
                                </a>
                                <a href="https://github.com/zakialbajili/traveloku" className=" bg-gradient-to-t from-color-dark to-color-greenDark h-[30vh] rounded-md text-color-greenLow shadow-2xl flex flex-col place-content-center text-center hover:text-color-white py-5 px-2">
                                    <div className="flex justify-center">
                                    <Image src={airplaneTilt} height={96} width={96} alt='traveloku'/>
                                    </div>
                                    <div className="font-bold md:text-xl">TRAVELOKU</div>
                                </a>
                                <a href="https://github.com/Capstone-Bangkit-BeFitOutfit/BeFitOutfit-BE" className=" bg-gradient-to-t from-color-dark to-color-greenDark h-[30vh] rounded-md text-color-greenLow shadow-2xl flex flex-col place-content-center text-center hover:text-color-white py-5 px-2">
                                    <div className="flex justify-center">
                                    <Image src={TShirt} height={96} width={96} alt='befitoutdit'/>
                                    </div>
                                    <div className="font-bold md:text-xl">BEFITOUTFIT</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-color-greenMiddle p-0">
                <div className="container mx-auto flex flex-wrap md:flex-row flex-col md:justify-between place-content-center gap-2 h-[15vh]">
                    <div id="contact" className="px-5 flex flex-col">
                        <h3 className="md:text-xl text-color-dark">Copyright: Zaky Maulana Al Bajili &copy; 2023</h3>
                    </div>
                    <div className="px-5 flex flex-col ">
                        <div className=" flex flex-row justify-center gap-2">
                            <a href="https://github.com/zakialbajili" >
                                <Image src={githubLogo} alt="github-logo" width={35} height={35} />
                            </a>
                            <a href="https://www.linkedin.com/in/zakyalbajili10/">
                                <Image src={linkedinLogo} alt="linkedin-logo" width={35} height={35} />
                            </a>
                            <a href="https://www.instagram.com/zakialbajili/">
                                <Image src={instagramLogo} alt="instagram-logo" width={35} height={35} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
