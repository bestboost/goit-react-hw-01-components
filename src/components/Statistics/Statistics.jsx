import PropTypes from 'prop-types';
import {StatCard, StatTitle, StatList, StatKey, StatLabel, Percentage} from 'components/Statistics/Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
        <StatCard>
          <StatTitle>{title}</StatTitle>

  <StatList>
  {stats.map(stat => (
        <StatKey key={stat.id}>
          <StatLabel>{stat.label}</StatLabel >
          <Percentage>{stat.percentage}%</Percentage>
        </StatKey>
      ))}
  </StatList>
  </StatCard>
    )};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}