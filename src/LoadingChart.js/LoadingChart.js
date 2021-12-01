import React, { Component } from 'react'
import { Chart } from '../Chart/Chart'
import { Button } from '../Components'

// The data used for this chart is a public data set from the CDC. It is available
// for download at: https://data.cdc.gov/api/views/28df-2bwy/rows.json?accessType=DOWNLOAD
// The data is also included in this filder as an exported JS object in the file dataForTesting.
// import testinData from './dataForTesting'

const filterPlotData = (data, group) =>
  data
    .filter(point => point[9] === group)
    .map(point => ({
      x: point[8],
      y: point[12],
    }))
    .reduce(
      (acc, curr) => ({
        x: [...acc.x, curr.x],
        y: [...acc.y, curr.y],
        type: 'scatter',
        mode: 'lines+markers',
        name: group,
      }),
      {
        x: [],
        y: [],
      },
    )

export class LoadingChart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: undefined,
    }
  }

  handleButtonClick = () => {
    fetch('https://data.cdc.gov/api/views/28df-2bwy/rows.json?accessType=DOWNLOAD')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.data
          .filter(point => point[11] === 'Obesity')
          .filter(point => point[10] === '20 and over')
          .map(point => ({ ...point, 12: parseFloat(point[12]) }))

        this.setState({
          data: [
            filterPlotData(filteredData, 'All'),
            filterPlotData(filteredData, 'Male'),
            filterPlotData(filteredData, 'Female'),
          ],
        })
      })
  }

  render () {
    const { data } = this.state

    const { layout } = this.props
    const { width, height } = layout

    return (
      <div
        style={{
          backgroundColor: '#f5f5f5f5',
          display: 'flex',
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {data && <Chart data={data} layout={layout} />}
        {!data && (
          <Button
            onClick={this.handleButtonClick}
            text='Load obesity prevalence chart'
          />)}
      </div>
    )
  }
}
