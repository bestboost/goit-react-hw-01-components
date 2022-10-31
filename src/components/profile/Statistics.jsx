import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    <li className="item" key={stats.id}>
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.precentage}</span>
    </li>
    <li className="item" key={stats.id}>
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.precentage}</span>
    </li>
    <li className="item" key={stats.id}>
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.precentage}</span>
    </li>
    <li className="item" key={stats.id}>
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.precentage}</span>
    </li>
  </ul>
</section>
    )
}