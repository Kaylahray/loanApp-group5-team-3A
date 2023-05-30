
import styles from './ApplicationTable.module.scss'
import ApplicationData from '../ApplicationData';

const ApplicationTable = () => {
  return (
    <div>
        <table className={styles.apptable}>
            <thead>
                <tr className={styles.appheader}>
                    <th>No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Analyst</th>
                    <th>Status</th>
                    <th className={styles.tableaction}>Action</th>
                </tr>
            </thead>
            
            <tbody>
                {ApplicationData.map((data) => {
                    return(
                        <tr key={data.id} className={styles.appbody}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.date}</td>
                            <td>{data.analyst}</td>
                            <td>{data.status}</td>
                            <td className='table-action'>{data.action}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ApplicationTable;