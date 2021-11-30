import React from 'react'
import Plot from 'react-plotly.js'
import color from '../color'

class Chart extends React.Component {
  constructor (props) {
    super(props)

    const {
      layout = {},
      data = [],
      settings: {
        fullXRange: rangeSliderRange,
        setXRange: xRange,
        yRange,
        xLabel,
        yLabel,
      } = {},
    } = this.props

    this.state = {
      data,
      layout: Object.assign({
        plot_bgcolor: color.chartBackground,
        paper_bgcolor: color.chartPaper,
        showlegend: true,
        legend: {
          orientation: 'h',
          y: 1.2,
          xanchor: 'left',
          x: 0.01,
          yanchor: 'top',
          bgcolor: color.chartLegend,
        },
        margin: {
          t: 20,
          b: 0,
          r: 20,
          l: 40,
          autoexpand: true,
        },
        font: {
          family: '"Noah", sans-serif',
          size: '11',
          color: '#333',
        },
        yaxis: {
          automargin: true,
          title: {
            text: yLabel,
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
          rangeslider: rangeSliderRange && {
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
        width: 800,
        height: 500,
      }, layout),
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
