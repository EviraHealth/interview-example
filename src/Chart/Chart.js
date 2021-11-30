import React from 'react'
import Plot from 'react-plotly.js'
import { getBmiSdsPlotData, getBmiSdsPlotDataSettings } from '../Storage/actions'
import { setXRange } from '../Storage/BmiSdsPlotDataSettings'

class Chart extends React.Component {
  constructor (props) {
    super(props)

    const layout = {}

    const {
      fullXRange: rangeSliderRange,
      setXRange: xRange,
      yRange,
      xLabel,
    } = getBmiSdsPlotDataSettings()

    console.log('chart constructor', setXRange, rangeSliderRange)

    this.state = {
      data: getBmiSdsPlotData(),
      layout: Object.assign({
        showlegend: true,
        legend: {
          orientation: 'h',
          y: 1.2,
          xanchor: 'left',
          x: 0.01,
          yanchor: 'top',
          // bgcolor: addAlpha(COLOR.white, 'B0'),
        },
        margin: {
          // t: marginTop,
          // b: marginBottom,
          // r: marginRight,
          // l: marginLeft,
          autoexpand: true,
        },
        // plot_bgcolor: COLOR.darkWhite,
        font: {
          family: '"Noah", sans-serif',
          size: '11',
          color: '#333',
        },
        yaxis: {
          automargin: true,
          title: {
            text: 'THIS IS A CHART TITLE',
            standoff: 10,
          },
          showticklabels: true,
          range: yRange ? [...yRange] : [],
          fixedrange: false,
          hoverformat: '.1f',
          showgrid: false,
        },
        xaxis: {
          range: xRange ? [...xRange] : [],
          showgrid: false,
          showticklabels: true,
          rangeslider: true && rangeSliderRange && {
            range: rangeSliderRange,
          },
          automargin: true,
          title: {
            text: xLabel,
          },
        },
        uirevision: true,
        // hovermode,
        hoverdistance: 40,
        clickmode: 'event+select',
        autosize: true,
      }, layout || {}),
      config: {
        displayModeBar: false,
        staticPlot: false,
        responsive: true,
        doubleClick: 'reset+autosize',
      },
    }
  }

  render () {
    const { data, config, layout } = this.state

    console.log('settings', data, config, layout)

    return (
      <Plot
        data={data}
        config={config}
        layout={layout}
      />

    )
  }
}

export { Chart }
