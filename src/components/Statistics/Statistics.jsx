import PropTypes from 'prop-types';
import {StatTitle, StatList, StatKey, StatLabel, Percentage} from 'components/Statistics/Statistics.styled'
import { Box } from '../Box';

export const Statistics = ({title, stats}) => {
    return (
        <Box
        display='flex'
        flexDirection='column' 
        alignItems='center'
        width={350}
        mb={7}
        bg='secondBackground'
        as='section'>
         {title&&<StatTitle>{title}</StatTitle>}

  <StatList>
  {stats.map(stat => (
        <StatKey key={stat.id}>
          <StatLabel>{stat.label}</StatLabel >
          <Percentage>{stat.percentage}%</Percentage>
        </StatKey>
      ))}
  </StatList>
  </Box>
    )};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape ({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    )};