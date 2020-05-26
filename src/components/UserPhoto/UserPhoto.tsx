import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    // minWidth: 300,
    // height: 300,
    borderRadius: 16,
    // marginTop: 16
  },
  img: {
    width: '100%',
    marginBottom: -4
  }
})

type props = {
  src: string
}

export const UserPhoto: React.FC<props> = ({src}) => {
  const classes = useStyles()

  return (
    <Card
      elevation={4}
      className={classes.card}
    >
      <img
        src={src}
        alt={''}
        className={classes.img}
      />
    </Card>
  )
}