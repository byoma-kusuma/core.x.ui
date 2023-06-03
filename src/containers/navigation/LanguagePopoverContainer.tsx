import * as React from "react";
import DropdownMenuSelect from "../../components/DropdownMenuSelect";

const LANGS = [
  {
    onClick: () => null,
    label: "English",
    icon: "/static/icons/ic_flag_en.svg"
  },
  {
    onClick: () => null,
    label: "German",
    icon: "/static/icons/ic_flag_de.svg"
  },
  {
    onClick: () => null,
    label: "French",
    icon: "/static/icons/ic_flag_fr.svg"
  }
];

export default function LanguagePopover() {
  return <DropdownMenuSelect items={LANGS} />;
}
