import React, {useEffect, useState} from 'react'
import {IconButton, InputAdornment, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {cancelSearch, search, setSearchText} from '../../store/actions'
import {TState} from '../../store/types'
import {Clear as ClearIcon} from '@material-ui/icons'

const useStyles = makeStyles({
  form: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8
  },
  clearBtn: {
    zIndex: 100
  }
})

export const SearchForm: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const limit = 5
  const helper = `Type search text here (no more than ${limit} symbols)`
  const error = `No more than ${limit} symbols, please!`
  const [helperText, setHelperText] = useState<string | null>(null)
  const [isValid, setIsValid] = useState<boolean>(true)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [isClearIcon, setIsClearIcon] = useState<boolean>(false)
  const searchText = useSelector<TState, string>(state => state.searchText)

  useEffect(() => {
    handleChange(searchText)
  }, [])

  const handleFocus = (isFocus: boolean): void => {
    setIsFocus(isFocus)
    if (isFocus) {
      setIsClearIcon(true)
    } else {
      setIsClearIcon(false)
    }
    if (isValid) {
      if (isFocus) {
        setHelperText(helper)
      } else {
        setHelperText(null)
      }
    }
  }

  const handleChange = (value: string): void => {
    dispatch(setSearchText(value))
    const length = value.length
    if (length === 0) {
      setIsValid(true)
      if (isFocus) setHelperText(helper)
      dispatch(cancelSearch())
    } else if (length > 5) {
      setIsValid(false)
      setHelperText(error)
    } else {
      setIsValid(true)
      if (isFocus) setHelperText(helper)
      dispatch(search())
    }
  }

  const clearInput = () => {
    console.log('clear')
    dispatch(cancelSearch())
    setIsValid(true)
    setHelperText(null)
    setIsClearIcon(false)
  }

  return (
    <form autoComplete={'off'} className={classes.form}>
      <TextField
        value={searchText}
        error={!isValid}
        id={'search'}
        variant={'outlined'}
        label={isValid ? 'Search user' : 'Error'}
        fullWidth
        helperText={helperText}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        onChange={event => handleChange(event.target.value)}
        InputProps={{
          endAdornment: isClearIcon ? (
            <InputAdornment position={'end'}>
              <IconButton
                color={'secondary'}
                edge={'end'}
                onClick={clearInput}
                className={classes.clearBtn}
              >
                <ClearIcon/>
              </IconButton>
            </InputAdornment>
          ) : null
        }}
      />
    </form>
  )
}