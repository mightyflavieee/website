import { IconSide } from "../models/ButtonProps.model";
import { PersonalLinksData } from "../models/PersonalLink.model";
import { ProjectData } from "../models/Project.model";

export function getPersonalLinks(): PersonalLinksData[] {
  const personalLinks: PersonalLinksData[] = [
    {
      linkName: "LinkedIn",
      linkUrl: "https://www.linkedin.com/in/flavio-rizzoglio/",
      icon: {
        name: "mdi:linkedin",
        side: IconSide.LEFT,
      },
      ariaLabel: "LinkedIn Profile",
    },
    {
      linkName: "GitHub",
      linkUrl: "https://github.com/mightyflavieee",
      icon: {
        name: "mdi:github",
        side: IconSide.LEFT,
      },
      ariaLabel: "GitHub Profile",
    },
    {
      linkName: "Mail",
      linkUrl: "mailto:flaviorizzoglio@gmail.com",
      icon: {
        name: "mdi:gmail",
        side: IconSide.LEFT,
      },
      ariaLabel: "Mail contact",
    },
  ];

  return personalLinks;
}
