import Image from "next/image";
import picOne from "../assets/01.png";
import picTwo from "../assets/02.png";
import picThree from "../assets/03.png";
export default function Body() {
    return (
        <>
            <div className="text-white pt-[18rem] bg-[#0B1D26] sm:px-20 xl:flex px-10">
                <div className="sm:px-16">
                    <div className="bg-[#FBD784] h-[2px] w-[72px] top-[16px]"></div>{/* dash */}

                    <h1 className="lg: text-xl text-[#FBD784] ">GET STARTED :</h1>
                    <h1 className="lg:text-6xl text-5xl font-bold my-8 sm:w-2/3 font-times">1. What Level Of Hiker Are You?</h1>

                    <Image className="pt-10 mx-auto xl:hidden mb-10" src={picOne}
                        alt="01 Hiker"
                        height={500}
                    />
                    <p className="lg:text-2xl text-xl sm:w-4/5">
                        Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert, or expert backpacker?
                    </p>
                </div>

                <Image className="pt-10 mx-auto xl:flex hidden" src={picOne}
                    alt="01 Hiker"
                    height={500}
                />

            </div>
            <div className="text-white py-[10rem] bg-[#0B1D26] sm:px-20 xl:flex px-10">
                <Image className="pt-10 mx-auto xl:flex hidden" src={picTwo}
                    alt="01 Hiker"
                    height={500}
                />
                <div className="sm:px-16">

                    <div className="bg-[#FBD784] h-[2px] w-[72px] top-[16px]"></div>{/* dash */}

                    <h1 className="lg: text-xl text-[#FBD784] ">HIKING ESSENTIALS :</h1>
                    <h1 className="lg:text-6xl text-5xl font-bold my-8 sm:w-2/3 font-times">2. Picking The Right Hiking Gear</h1>

                    <Image className="pt-10 mx-auto xl:hidden mb-10" src={picTwo}
                        alt="01 Hiker"
                        height={500}
                    />
                    <p className="lg:text-2xl text-xl sm:w-4/5">
                        The nice thing about beginning hiking is that you don&apos;t really need any special gear, you can probably get away with things you already have. Let&apos;s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
                    </p>
                </div>



            </div>
            <div className="text-white py-[10rem] bg-[#0B1D26] sm:px-20 xl:flex px-10">
                <div className="sm:px-16">
                    <div className="bg-[#FBD784] h-[2px] w-[72px] top-[16px]"></div>{/* dash */}

                    <h1 className="lg: text-xl text-[#FBD784] ">WHERE YOU GO IS THE KEY:</h1>
                    <h1 className="lg:text-6xl text-5xl font-bold my-8 sm:w-2/3 font-times">3. Understand Your Map & Timing</h1>

                    <Image className="pt-10 mx-auto xl:hidden mb-10" src={picThree}
                        alt="01 Hiker"
                        height={500}
                    />
                    <p className="lg:text-2xl text-xl sm:w-4/5">
                        To start, print out the hiking guide and map. If it&apos;s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I&apos;ll read the guide and know that say, in a mile, I make a right turn at the junction..
                    </p>
                </div>

                <Image className="pt-10 mx-auto xl:flex hidden" src={picThree}
                    alt="01 Hiker"
                    height={500}
                />

            </div>
        </>

    )
}
