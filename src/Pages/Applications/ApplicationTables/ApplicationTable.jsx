
import styles from './ApplicationTable.module.scss'
import ApplicationData from '../ApplicationData';

const ApplicationTable = () => {
  return (
    <div>
        <table className={styles.appT}>
            <thead>
                <tr className={styles.appH}>
                    <th>No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Analyst</th>
                    <th>Status</th>
                    <th className={styles.tableA}>Action</th>
                </tr>
            </thead>
            
            <tbody>
                {ApplicationData.map((data) => {
                    return(
                        <tr key={data.id} className={styles.appB}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.date}</td>
                            <td>{data.analyst}</td>
                            <td>{data.status}</td>
                            <td className={styles.tableA}>{data.action}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ApplicationTable;