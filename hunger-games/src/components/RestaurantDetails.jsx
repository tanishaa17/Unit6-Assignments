import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RestaurantDetails.css";
export const RestaurantDetails = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    // "id": "",
    // "restaurant_name": "",
    // "category": "",
    // "cost_for_one": "",
    // "payment_methods": {
    //     "card": "",
    //     "cash": "",
    //     "upi": ""
    // },
    // "total_votes": "",
    // "reviews": ""

    useEffect(() => {
        getDetails();
    }, [])
    const Prev = (value) => {
        setPage(page - value)
    }
    const Next = (value) => {
        setPage(page + value)
    }
    const handleClick = (e) => {

    }
    const getDetails = async () => {
        await axios.get(`http://localhost:8080/get-restaurants?_page=${page}&_limit=${4}`)
            .then((res) => {
                // console.log(res.data)
                setRestaurantData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    // function
    return (
        <div className="container">
            <h1>HUNGER GAMES</h1>
            <div className="buttons">
                <div className="ratings">
                    <h3>Sort by Ratings:</h3>
                    <button onClick={handleClick}>4 Star</button>
                    <button onClick={handleClick}>3 Star</button>
                    <button onClick={handleClick}>2 Star</button>
                    <button onClick={handleClick}>1 Star</button>
                </div>
                <div className="payment">
                    <h3>Sort by Payment:</h3>
                    <button onClick={handleClick}>Cash Only</button>
                    <button onClick={handleClick}>Card Only</button>
                    <button onClick={handleClick}>All</button>
                </div>
                <div className="price">
                    <h3>Sort by Price:</h3>
                    <button onClick={handleClick}>High to Low</button>
                    <button onClick={handleClick}>Low to High</button>
                </div>
            </div>
            <div className="allRestaurants">
                {restaurantData.map((value) => {
                    return (
                        <div className="mainBox" key={value.id}>
                            <div className="imgs"><img src={value.image} alt="" /></div>
                            <div className="resDetails">
                                <h2>{value.restaurant_name}</h2>
                                <p>Category: {value.category}</p>
                                <p>Price : ${value.cost_for_one}</p>
                                {/* "payment_methods"= {
                            "card": {value.id},
                        "cash": {value.id},
                        "upi": {value.id}
                            }, */}
                                <p>Votes: {value.total_votes}</p>
                                <p>Reviews: {value.reviews}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {loading && <div>....loading</div>}
            <button
                onClick={() => Prev(-1)}>Prev</button>
            <button
                onClick={() => Next(1)}>Next</button>
        </div>
    )
}
// disabled={loading || page == 1}
// disabled={loading || page.length - 1}