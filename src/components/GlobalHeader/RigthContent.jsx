import React from "react";
import styles from "./index.module.less";
import AvatarDropDown from "./AvatarDropDown";

const RightContent = props => {
  return (
    <div className={styles.rightContent}>
      <AvatarDropDown />
    </div>
  );
};

export default RightContent;
