import React, { useEffect, useState } from 'react'
import {
  Typography,
  Divider,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button
} from '@material-ui/core'
import PropTypes from 'prop-types'

import QuestionPaper from './questions.json'

const Results = ({
  history,
  location
}) => {
  const [selectedAns, setSelectedAns] = useState('');
  const [totalQ] = useState(QuestionPaper.length);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (location.state.questionKeys) {
      setSelectedAns(location.state.questionKeys)
    }
  }, [location, history])

  useEffect(() => {
    if (selectedAns) {
      const currentData = { ...selectedAns }
      let count = 0
      QuestionPaper.forEach(val => {
        if (currentData[val.id] === val.correctAns) {
          count = count + 1
        }
      })
      setCount(count);
      }
  }, [selectedAns]);

  const goBackHandler = () => {
    history.push({
      pathname: '/app/question'
    })
  }

  const getData = () => {
    let data = null
    if (QuestionPaper && QuestionPaper.length > 0) {
      data = QuestionPaper.map((ele, index) => (
        <div>
          <Card>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: '20px' }}>
                {index + 1})&nbsp;{ele.questions}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {ele.options.map(val => (
                <Grid item xs={3}>
                  <p>->&nbsp;{val}</p>
                </Grid>
              ))}
            </CardActions>
            <CardActions>
              {selectedAns[ele.id] ? `You have choose : ${selectedAns[ele.id]}` : 'Unattempted'}
              <br />
              Correct Answer : {ele.correctAns}
            </CardActions>
          </Card>
        </div>
      ))
    }
    return data
  }

  return (
    <React.Fragment>
      <Typography variant='h5' align='center'>Results</Typography>
      <Divider style={{ marginBottom: '15px', marginTop: '15px' }} />
      <Typography variant='h5' align='center'>Corrected {count} of {totalQ}</Typography>
      <div>
        {getData()}
      </div>
      <div style={{ position: 'relative', marginTop: '28px', marginBottom: '15px' }}>
        <Button
          style={{ position: 'absolute', left: '50%' }}
          color='primary'
          size='large'
          variant='outlined'
          onClick={goBackHandler}
        >
          Go Back
      </Button>
      </div>
    </React.Fragment>
  )
}

Results.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired
}

export default (Results);