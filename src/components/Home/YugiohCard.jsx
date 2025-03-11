
function YugiohCard({ data }) {
    console.log(data);
    return (
        <div className="card">
            {data && <div>
                {data?.type === "Effect Monster" || data?.type === "Normal Monster" ? (
                    <div>
                        <h1>{data?.name}</h1>
                        <p>ATK {data?.atk}</p>
                        <p>DEF {data?.def}</p>
                        <img src={data?.card_images[0]?.image_url} alt={data?.name} />
                        <p>{data?.desc}</p>
                    </div>
                ) : (
                    <div>
                        <h1>{data?.name}</h1>
                        <p>{data?.type}</p>
                        <img src={data?.card_images[0]?.image_url} alt={data?.name} />
                        <p>{data?.desc}</p>
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