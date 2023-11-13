import { useState } from 'react';

import styles from './CreateCarForm.module.css';

const CreateCarForm = () => {

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [image,setImage] = useState('')
    
    const createCar = e => {
        e.preventDefault()
        console.log({name,price,image})
    }

    return <form className={styles.form}>

        <input className={styles.input} placeholder="Name" type="text" 
        onChange={e => setName(e.target.value)} value={name}/>
        <input className={styles.input} placeholder="Price" type="text" 
        onChange={e => setPrice(e.target.value)} value={price}/>
        <input className={styles.input} placeholder="Image" type="text" 
        onChange={e => setImage(e.target.value)} value={image}/>

        <button className={styles.btn} onClick={createCar}>Create</button>

    </form>
};

export default CreateCarForm;