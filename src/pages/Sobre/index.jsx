import styles from './Sobre.module.css'
import avatar from './images/avatar2.jpg'

import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
import php from './images/icon-php.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>oMagrelinho</span> <br />
                    <strong>Dev Full stack</strong></p>
                    <p>Aperfeiçoando meu desenvolvimento Web desde 2001</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Icone do html" />
                    <img src={css} alt="Icone do css" />
                    <img src={js} alt="Icone do js" />
                    <img src={react} alt="Icone do react" />
                    <img src={node} alt="Icone do node" />
                    <img src={sql} alt="Icone do sql" />
                    <img src={php} alt="Icone do php" />
                </div>
            </div>
        </section>
    )
}

export default Sobre

