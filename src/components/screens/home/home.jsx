//css
import styles from "./home.module.css";
//cars
import {cars} from "./cars.data.js";
//const cars = []

function Home() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Car Catalog
            </h1>

            <div>

                {cars.length ? cars.map(car => (
                    <div key={car.id} className={styles.item}>
                        <div
                        className={styles.img}
                        style={{
                            backgroundImage:`url(${car.image})`,
                        }}
                        />
                        <div className={styles.info}>
                            <h2>{car.name}</h2>
                            <p>{car.price}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))
                : <p>There are no cars</p>
            }

            </div>

        </div>
    )
};

export default Home;