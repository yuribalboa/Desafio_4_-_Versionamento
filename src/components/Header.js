import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.header}>
            <h2 className={styles.organizacao}>Organização</h2>
            <h2 className={styles.tarefas}>Tarefas</h2>
        </div>
    )
}

export default Header