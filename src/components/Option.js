import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Paper, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '20rem',
    height: '20rem',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  text: {
    color: 'white',
    fontSize: '2rem',
    fontWeight: '600',
  },
}))

const Options = ({ optionText, location }) => {
  const classes = useStyles()
  const history = useHistory()

  const [elevation, setElevation] = React.useState(2)

  const handleClick = () => {
    history.push(`/${location}`)
  }
  return (
    <Paper
      onMouseOver={() => setElevation(5)}
      onMouseOut={() => setElevation(2)}
      elevation={elevation}
      className={classes.container}
      onClick={handleClick}
    >
      <Typography className={classes.text}>{optionText}</Typography>
    </Paper>
  )
}

export default Options
