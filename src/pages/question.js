import React, { useState, useEffect } from 'react'
import {
  Typography,
  Divider,
  Grid,
  Radio,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  CardActions
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import QuestionPaper from './questions.json'
// import Results from './Results'

const Questions = ({
  history
}) => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const lists = {}
    QuestionPaper.forEach(val => {
      lists[val.id] = ''
    })
    setSelectedValue(lists)
  }, [])

  const handleChange = (e, id) => {
    const listData = { ...selectedValue }
    console.log(listData)
    listData[id] = e.target.value
    console.log(listData)
    setSelectedValue(listData);
  }

  const seeResults = () => {
    console.log(Object.values(selectedValue))
    console.log(selectedValue)
    history.push({
      pathname: '/app/results',
      state: {
        questionKeys: selectedValue
      }
    })
  }

  const getQuestionPaper = () => {
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
                  <FormControlLabel
                    control={
                      <Radio
                        color="primary"
                        value={val}
                        checked={selectedValue[ele.id] === val}
                        onChange={(e) => handleChange(e, ele.id)}
                      />
                    }
                    label={val}
                  />
                </Grid>
              ))}
            </CardActions>
          </Card>
        </div>
      ))
    }
    return data
  }

  return (
    <React.Fragment>
      <Typography variant='h5' align='center'>Question Paper</Typography>
      <Divider style={{ marginBottom: '15px', marginTop: '15px' }} />
      <div>
        <div>
          {getQuestionPaper()}
        </div>
        <div style={{ position: 'relative', marginTop: '28px', marginBottom: '15px' }}>
          <Button
            style={{ position: 'absolute', left: '50%' }}
            color='primary'
            size='large'
            variant='outlined'
            onClick={seeResults}
          >
            See Results
        </Button>
        </div>
        </div>
    </React.Fragment>
  )
}

Questions.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
}

export default (withRouter(Questions));
