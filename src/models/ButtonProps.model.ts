export interface ButtonProps {
  text: string;
  href: string;
  icon?: {
    name: string;
    side: IconSide;
  };
  isFilled?: boolean;
  disabled?: boolean;
  classes?: string;
  color: ButtonPropsColor;
}

export enum ButtonPropsColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum IconSide {
  LEFT = "left",
  RIGHT = "right",
}
