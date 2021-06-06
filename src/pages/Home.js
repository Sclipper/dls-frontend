import { useHistory } from 'react-router-dom'
import Options from 'components/Option'
import { makeStyles } from '@material-ui/core'
import { useAccessToken } from '../services/queries'

const useStyles = makeStyles((theme) => ({
  optionsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    rowGap: '15px',
    marginTop: '5rem',
    marginLeft: '5rem',
  },
}))

const Home = () => {
  const history = useHistory()
  const useAccessTokenQuery = useAccessToken()

  const classes = useStyles()
  const isLoggedIn = Boolean(useAccessTokenQuery.data)

  if (!isLoggedIn) {
    history.push('/login')
  }
  return (
    <div className={classes.optionsContainer}>
      <Options location="generate" optionText="Generate Code" />
      <Options location="handle-classes" optionText="Handle Classes" />
      <Options location="info" optionText="Attendance information" />
    </div>
  )
}

export default Home
