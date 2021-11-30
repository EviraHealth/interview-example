import BmiSdsPLotData from './BmiSdsPlotData'
import { fullXRange, setXRange, yRange, xLabel } from './BmiSdsPlotDataSettings'

export const getBmiSdsPlotData = () => {
  return BmiSdsPLotData
}

export const getBmiSdsPlotDataSettings = () => {
  return {
    fullXRange,
    setXRange,
    yRange,
    xLabel,
  }
}
