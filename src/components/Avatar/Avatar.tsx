import styles from "./Avatar.module.css";
import noIcon from "../../assets/no-icon.svg";
import { ImgHTMLAttributes } from "react";

type Props = {
  hasBorder?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export function Avatar({ hasBorder = true, ...props }: Props) {
  const hasIcon = props.src !== undefined;

  return (
    <img
      src={props.src ?? noIcon}
      className={`
        ${hasBorder ? styles.avatarWithBorder : styles.avatar}
        ${!hasIcon ? styles.avatarWithNoIcon : ""}
        `}
      {...props}
    />
  );
}
