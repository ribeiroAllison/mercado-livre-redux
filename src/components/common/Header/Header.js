import logo from '../../../../public/images/mercadolivre.png'
import styles from './Header.module.css'
import Image from 'next/image'

const Header = () =>{
    return(
        <header className={styles.header}>
            <Image src={logo} width={150}/>
            <h1>Calculadora de Lucro para Mercado Livre</h1>
        </header>
    )
}

export default Header;