

import styles from "./navebar.module.css";


const Content = (props:any) => {

    return (
        <>
            <div>
                
                <h1>{props.tip.title}</h1>
                <div className={styles.spacer}></div> {/* Spacer element */}
                {props.tip.categoryes.map((cat:any) => ( // Consider renaming to 'categories'
                            <p >
                                {cat.name}
                            </p>
                        ))}
   


            </div>
        </>

    )

}


export default Content;