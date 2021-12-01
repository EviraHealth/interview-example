import React from 'react'
import { Chart } from '../Chart/Chart'
import { LoadingChart } from '../LoadingChart.js'
import { getBmiSdsPlotData, getBmiSdsPlotDataSettings } from '../Storage/actions'

export const Dashboard = () => {
  const plotSettings = {
    ...getBmiSdsPlotDataSettings(),
    yLabel: 'BMIz',
  }

  const plotData = getBmiSdsPlotData()

  const plotLayout = {
    width: window.innerWidth * 0.4,
    height: window.innerHeight * 0.5,
  }

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Chart
        settings={plotSettings}
        data={plotData}
        layout={plotLayout}
      />
      <LoadingChart
        layout={plotLayout}
      />
    </div>
  )
}
