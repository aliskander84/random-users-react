import React, {useEffect, useState} from 'react'
import {TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {cancelSearch, search, setSearchText} from '../../store/actions'
import {TState} from '../../store/types'

const useStyles = makeStyles({
  form: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8
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
  const searchText = useSelector<TState, string>(state => state.searchText)

  useEffect(() => {
    handleChange(searchText)
  }, [])

  const handleFocus = (isFocus: boolean): void => {
    setIsFocus(isFocus)
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
      />
    </form>
  )
}