import React from 'react'
import { Chart } from '../Chart/Chart'
import { getBmiSdsPlotData, getBmiSdsPlotDataSettings } from '../Storage/actions'

export const Dashboard = () => {
  const plotSettings = {
    ...getBmiSdsPlotDataSettings(),
    yLabel: 'BMIz',
  }

  const plotData = getBmiSdsPlotData()

  const plotLayout = {
    width: 800,
    height: 500,
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
    </div>
  )
}
