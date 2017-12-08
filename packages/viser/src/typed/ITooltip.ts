import * as IStyle from './IStyle';

interface ICrosshairs {
  type?: string;
  style?: IStyle.ILineStyle;
}

export interface ITooltip {
  showTitle?: boolean;
  offset?: number;
  crosshairs?: boolean | ICrosshairs;
  containerTpl?: string;
  itemTpl?: string;
  inPlot?: boolean;
  follow?: boolean;
  shared?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
}

type ITooltipConfig = boolean | ITooltip;

export default ITooltipConfig;
