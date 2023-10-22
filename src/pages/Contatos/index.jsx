import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'


function Contatos() {
    return (
        <>
            <section className={styles.contatos}>
                <h2>Contatos</h2>
                <h3>Entre em contato com o oMagrelinho</h3>
                <p>Para que possamos conversar mais sobre.</p>

                <div className={styles.icones}>
                    <a href="mailto:lando.s@hotmail.com" target='_blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icone} />
                    </a>
                    <BsInstagram className={styles.icone} />
                    <BsYoutube className={styles.icone} />
                    <a href="https://github.com/Lando80" target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icone} />
                    </a>
                    <BsLinkedin className={styles.icone} />
                </div>
            </section>
        </>
    )
}

export default Contatos