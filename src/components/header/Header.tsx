import React from "react";
import styles from "./Header.module.css";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import {
  useHistory,
} from "react-router-dom";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  console.log('useHistory:', useHistory);

  const handleClick = (e: any) => {
    console.log(e);

    switch (e.key) {
      case '1':
        history.push('autobiographyPage');
        break;
      case '2':
        history.push('experiencePage');
        break;
      case '3':
        history.push('contactMePage');
        break;
    }
  }

  return (
    <div className={styles["header"]}>
      <Menu mode={"horizontal"} className={styles["main-menu"]} defaultSelectedKeys={['1']} onClick={handleClick}>
        <Menu.Item key="1">{t("header.autobiography")}</Menu.Item>
        <Menu.Item key="2">{t("header.experience")}</Menu.Item>
        <Menu.Item key="3">{t("header.contact")}</Menu.Item>
        <Menu.Item key="4">{t("header.portfolio")}</Menu.Item>
      </Menu>
    </div>
  );
};
