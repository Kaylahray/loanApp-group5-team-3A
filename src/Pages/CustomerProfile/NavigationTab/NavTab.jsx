import { NavLink } from "react-router-dom"
import styles from './NavTab.module.scss'

const NavTab = () => {
  return (
    <nav>
        <div className={styles.tab_container}>
            <ul className={styles.nav_container}>
                <li><NavLink>Loan History</NavLink></li>
                <div id={styles.tabs}><li><NavLink>Bank statement analysis</NavLink></li></div>
                <li><NavLink>Credit report analysis</NavLink></li>
                <li><NavLink>Prediction model analysis</NavLink></li>
            </ul>
        </div>
    </nav>
   
  )
}

export default NavTab