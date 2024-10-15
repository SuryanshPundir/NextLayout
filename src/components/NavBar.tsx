export default function NavBar() {
  return (
    <>
      <div className=" p-10 flex justify-between sticky top-0">

        <h1 className="font-semibold text-3xl text-white font-times -mt-2">TREK.com</h1>

        <div className="flex space-x-4 hidden sm:flex">
          <div className="text-white px-4 mx-1">Home</div>
          <div className="text-white px-4 mx-1">About Us</div>
          <div className="text-white px-4 mx-1">Contact</div>
        </div>

        <div className="text-white px-4">Sign In</div>

      </div>
    </>
  )
}
