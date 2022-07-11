import { useState } from 'react'
import axios from 'axios';

const Main = () => {
    const [photo, setPhoto] = useState("");
    const [result, setResult] = useState([]);
    const changePhoto = () => {
            axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=k_V5klGv1jJXy2dRhT1NJEDIIWpWEiStoBMsl9HP0JY`)
                .then((response) => {
                    setResult(response.data.results);
                })
        };
    return (
        <>
            <div className="bg-gradient-to-r from-slate-900 via-slate-500 to-slate-500 flex items-center py-10">
                <div className="max-w-md mx-auto w-full">
                    <h1 className="text-white text-center text-2xl font-bold mb-5">
                        Find Images
                    </h1>
                    <div className="flex p-2">
                        <input
                            className="bg-gray-50 border border-gray-300 text-black text-sm w-full indent-2 p-2.5 outline-none focus:border-gray-500 focus:ring-2 rounded-tl rounded-bl"
                            type="search"
                            placeholder="Search Anything..."
                            value={photo}
                            onChange={(e) => {
                                setPhoto(e.target.value)
                            }}
                        />
                        <button
                            onClick={changePhoto}
                            className="bg-gray-600 px-6 py-2.5  text-white rounded-tr rounded-br focus:ring-2 focus:ring-gray-300 disabled:bg-gray-400"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <h1 className="text-center mt-6 underline text-2xl">
        Results for {photo}
      </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
            {result.map((value) => {
                        return (
                            <a href={value.urls.regular} target="_blank" rel="noreferrer">
                            <img src={value.urls.small} className="h-72 w-full object-cover rounded-lg shadow-md" alt={value.alt_description}/>
                            </a>
                        )
                    })}
      
            </div>
        </>
    );

};
export default Main;