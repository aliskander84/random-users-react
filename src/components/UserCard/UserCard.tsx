import React from 'react'
import {TUser} from 'store/types'
import {Avatar, Button, Card, CardContent, CardHeader, IconButton} from '@material-ui/core'
import {MoreVert as MoreVertIcon} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'
import {Title} from './components/Title'
import {Id} from './components/Id'
import {DetailsBtn} from './components/DetailsBtn'

const useStyles = makeStyles({
  card: {},
  content: {
    padding: 16,
    paddingBottom: '16 !important',
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 16
  },
  text: {
    flexGrow: 1
  },
  header: {
    // display: 'flex',
    // alignItems: 'stretch'
  },
  btn: {
    alignSelf: 'flex-end'
  }
})

interface IProps {
  user: TUser
}

export const UserCard: React.FC<IProps> = ({user}) => {
  const classes = useStyles()
  const {
    name: {title, first, last},
    id: {name: idName},
    picture: {thumbnail: pic}
  } = user

  return <>
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Avatar
          src={pic}
          className={classes.avatar}
        />
        <div className={classes.text}>
          <Title text={`${title} ${first} ${last}`}/>
          <Id text={idName}/>
        </div>
        <div className={classes.btn}>
          <DetailsBtn/>
        </div>
      </CardContent>
    </Card>
  </>
}