import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function randomColor() {
  return '#' + Math.random().toString(16).slice(2, 8); 
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s['statistics']}>
      {title && <h2 className={s['title']}>{title}</h2>}

      <ul className={s['list']}>
        {stats.map(data => {
          return (
            <li
              key={data.id}
              style={{ backgroundColor: randomColor() }}
              className={s['item']}
            >
              <span className={s['label']}>{data.label}</span>
              <span>{data.percentage}%</span>
            </li>
        )})}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}

export default Statistics