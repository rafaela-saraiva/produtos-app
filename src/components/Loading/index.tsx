import styles from  './styles.module.css'

function Loading() {
    return (
        <div className= {styles.Root}>
            <span className={styles.label}>Carregando...</span>
        </div>
    );
  }
 
  export default Loading;