import { IconSide } from "./ButtonProps.model";

export class PersonalLinksData {
  linkName: string;
  linkUrl;
  icon: {
    name: string;
    side: IconSide;
  };
  ariaLabel: string;
}
