import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
abc: {

},

child:{
    
}
})

export default function Usestyle() {
    const classes = useStyles();
  return (
    <div className={classes.abc}>
        <div className={classes.child}></div>
    </div>
  )
}
