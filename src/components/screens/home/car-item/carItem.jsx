//css
import styles from "../home.module.css";

function CarItem({car}) {

    //isURL?
    function isURL(str) {
        // A regular expression to check the format of a URL
        var urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        return urlRegex.test(str);
    }

    //isLinkForIMG?
    function isFileLink(str) {
        // A regular expression to check if a string is similar to a file path or URL
        var fileLinkRegex = /^(file:\/\/|https?:\/\/)?([a-zA-Z]:)?(\/[^\s\/]+)+(\.\w+)?$/;
    
        return fileLinkRegex.test(str);
    }
    let filleIS = isFileLink(car.image)

    const carsIMG = () => {
        //we have car img? else we have error
        if (isURL(car.image) || filleIS) {
            return (
                <div
                className={styles.img}
                style={{
                    backgroundImage:`url(${car.image})`,
                }}
                />
            )
        } else {
            return (
                <div className={styles.error}>
                    ERROR!!!<span>(We havent img try Restart orr add normal img link)</span>
                </div>
            )
        }
    }

    return(
        <div className={styles.item}>
            {
            /*we have img?*/
            carsIMG()
            }
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>{`${car.price}$`}</p>
                <button>Read more</button>
            </div>
        </div>
    )
}

export default CarItem;