import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RestaurantDetails.css";
export const RestaurantDetails = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    console.log(restaurantData)
    const getDetails = async () => {
        setLoading(true);
        setError(false);
        await axios.get(`http://localhost:8080/get-restaurants?_page=${page}&_limit=${5}`)
            .then((res) => {
                // console.log(res.data)
                setLoading(false);
                setRestaurantData(res.data);
            }).catch((error) => {
                setLoading(false);
                setRestaurantData([]);
                setError(true);
            })
    }

    // const addRestaurant = () => {
    //     axios.post("http://localhost:8080/get-restaurants", restaurantData).then(() => {
    //         setRestaurantData(...restaurantData);
    //     })
    // }
    useEffect(() => {
        getDetails();
        AscPrice()
        // addRestaurant();
    }, [page]);

    function AscPrice() {
        setRestaurantData([...restaurantData.sort((a, b) => a.cost_for_one - b.cost_for_one)])
    }
    function DscPrice() {
        setRestaurantData([...restaurantData.sort((a, b) => b.cost_for_one - a.cost_for_one)])
    }
    return (
        <div className="container">
            <h1>HUNGER GAMES</h1>
            <div className="buttons">
                <div className="ratings">
                    <h3>Sort by Ratings:</h3>
                    <button >4 Star</button>
                    <button >3 Star</button>
                    <button >2 Star</button>
                    <button >1 Star</button>
                </div>
                <div className="payment">
                    <h3>Sort by Payment:</h3>
                    <button >Cash Only</button>
                    <button >Card Only</button>
                    <button >All</button>
                </div>
                <div className="price">
                    <h3>Sort by Price:</h3>
                    <button onClick={() => AscPrice()}>Low to High</button>
                    <button onClick={() => DscPrice()}>High to Low</button>
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
                                {/* <p>Payment :{value.payment_methods}</p> */}
                                {/* payment_methods= {
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
                disabled={loading || page == 1}
                onClick={() => setPage((page) => page - 1)}>PREV</button>

            <button
                disabled={loading || page == 10}
                onClick={() => setPage((page) => page + 1)}>NEXT</button>
            <h5>Current Page : {page}</h5>
        </div>
    )
}