import { Link } from "react-router-dom"

const Start = () => {
  return (
    <div>
      <div className="bg-[url(https://images.unsplash.com/photo-1617479582427-e67ee0e3c0cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8)] w-full pt-8 h-screen flex justify-between flex-col bg-cover">
        <img src="https://cdn.pixabay.com/photo/2014/04/04/22/59/taxi-314011_1280.png" alt=""  className="w-24 ml-8"/>
        <div className="bg-white py-4 pb-7 px-4">
          <h2 className="text-3xl font-bold">Get Started with Taxi</h2>
          <Link to='/login' className="w-full bg-black text-white py-3 rounded-lg mt-5 flex items-center justify-center">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start