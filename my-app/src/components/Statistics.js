import dataStatsJson from '../data/Stats.json';
import statisticsCss from '../components/Style.css/Statistics.module.css';

export const Statistics = () => {
    return (
        <section className={statisticsCss.statistics}>
            <h2 className={statisticsCss.title}>Upload stats</h2>

            <ul className={statisticsCss.statList}>
                {dataStatsJson.map((item) => (
                    <li className="item" key={item.id}>
                        <span className={statisticsCss.statLabel}>{item.label}</span>
                        <span className={statisticsCss.percentage}>{item.percentage}</span>
                    </li>
                    ))}
                </ul>
        </section>
    )
}