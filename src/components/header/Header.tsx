import React from "react";
import styles from "./Header.module.css";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key="1">{t("header.autobiography")}</Menu.Item>
        <Menu.Item key="2">{t("header.experience")}</Menu.Item>
        <Menu.Item key="3">{t("header.contact")}</Menu.Item>
        <Menu.Item key="4">{t("header.portfolio")}</Menu.Item>
      </Menu>
    </div>
  );
};
