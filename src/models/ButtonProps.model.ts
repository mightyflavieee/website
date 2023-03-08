export interface ButtonProps {
  text: string;
  href: string;
  icon?: {
    name: string;
    side: IconSide;
  };
  textSize?: ButtonTextSize;
  isFilled?: boolean;
  isGradient?: boolean;
  classes?: string;
  color: ButtonPropsColor;
  ariaLabel: string;
}

export enum ButtonPropsColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonTextSize {
  BIG = "big",
  MEDIUM = "medium",
  SMALL = "small",
}

export enum IconSide {
  LEFT = "left",
  RIGHT = "right",
}
