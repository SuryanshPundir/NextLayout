export default function NavBar() {
    return (
        <>
            <div className="backdrop-blur-sm p-6 flex sticky bottom-0 justify-around" style={{ backgroundColor: 'rgba(11, 29, 38, 0.8)' }}>

                <div className="flex space-x-4 sm:hidden">
                    <div className="text-white px-4 mx-1">Home</div>
                    <div className="text-white px-4 mx-1">About Us</div>
                    <div className="text-white px-4 mx-1">Contact</div>
                </div>
            </div>
            <p className=" text-white bg-[#0B1D26] p-6 hidden text-center"> Copyright 2024 TREK.com, Inc. Terms & Privacy</p>
        </>
    )
}
