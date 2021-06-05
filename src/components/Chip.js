import { makeStyles } from '@material-ui/core/styles'
import ChipInput from 'material-ui-chip-input'

const useStyles = makeStyles((theme) => ({
  chip: {
    fontSize: '1.5rem',
    backgroundColor: '#FFD08e',
    '&:hover': {
      backgroundColor: '#4f557c',
      color: 'white',
    },
    '&:focus': {
      backgroundColor: '#4f557c',
      color: 'white',
    },
  },
  chipText: {
    // color: 'white',
  },
}))

const Chip = ({ value, setChipValue }) => {
  const classes = useStyles()
  const updateChip = (chip) => {
    if (!chip) {
      return
    }
    setChipValue([...value, chip])
  }
  return (
    <ChipInput
      // disableUnderline
      variant="outlined"
      classes={{
        chip: classes.chip,
        root: classes.root,
        input: classes.chipText,
      }}
      fullWidth
      value={value}
      newChipKeyCodes={[188, 32, 9]}
      onAdd={(chip) => updateChip(chip)}
      onDelete={(chip) => setChipValue(value.filter((x) => x !== chip))}
    />
  )
}

export default Chip
