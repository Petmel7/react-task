import data from '../data/Stats.json'

export const NewPage = () => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {data.map((item) => (
                    <li className="item" key={item.id}>
                        <span className="stat-label">{item.label}</span>
                        <span className="percentage">{item.percentage}</span>
                    </li>
                    ))}
                </ul>
        </section>
    )
}