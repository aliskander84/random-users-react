import React from 'react'
import {Skeleton} from '@material-ui/lab'
import {Box, Grid} from '@material-ui/core'

interface props {
  limit: number
}

export const Loader: React.FC<props> = ({limit}) => <>
  {[...Array(limit)].map((e, idx) => (
    <Grid
      key={idx}
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={4}
    >
      <Box>
        <Skeleton variant="rect" height={100}/>
      </Box>
    </Grid>
  ))}
</>
