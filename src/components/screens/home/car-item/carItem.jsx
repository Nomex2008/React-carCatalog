//css
import styles from "../home.module.css";

function CarItem({car}) {
    return(
        <div className={styles.item}>
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
    )
}

export default CarItem;