import { useEffect, useState } from "react";

function YugiohCard({ cardName }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (!data) {
            fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + cardName)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(json => setData(json))
                .catch(error => console.log(error))
        }
        console.log(data);
        console.log(data?.data[0]?.name);
        console.log(data?.data[0]?.card_images[0]?.image_url);
    }, [data, cardName]);
    return (
        <div className="card">
            {data && <div>
                {data?.data[0]?.type === "Effect Monster" || data?.data[0]?.type === "Normal Monster" ? (
                    <div>
                        <h1>{data?.data[0]?.name}</h1>
                        <p>ATK {data?.data[0]?.atk}</p>
                        <p>DEF {data?.data[0]?.def}</p>
                        <img src={data?.data[0]?.card_images[0]?.image_url} alt={data?.data[0]?.name} />
                        <p>{data?.data[0]?.desc}</p>
                    </div>
                ) : (
                    <div>
                        <h1>{data?.data[0]?.name}</h1>
                        <p>{data?.data[0]?.type}</p>
                        <img src={data?.data[0]?.card_images[0]?.image_url} alt={data?.data[0]?.name} />
                        <p>{data?.data[0]?.desc}</p>
                    </div>
                )}
            </div>}
            <style jsx>{`
                .card {
                    width: 300px;
                    height: auto;
                    background: black;
                    border-radius: 10px;
                    margin: 10px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }
                h1 {
                    margin: 0;
                }
                img {
                    width: 200px;
                    height: 300px;
                }

            `}</style>
        </div>

    );
}

export default YugiohCard;