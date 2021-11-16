import React from "react";
import styles from "./Header.module.css";
import { Menu, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import {
  useHistory,
} from "react-router-dom";
import { GlobalOutlined } from "@ant-design/icons";
import store from "../../redux/store";
import { useSelector } from "../../redux/hooks";
import { LanguageState } from "../../redux/language/languageReducer";
import { changeLanguageActionCreator } from "../../redux/language/languageActions";
import { useDispatch } from "react-redux";

interface state extends LanguageState { }

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  const storeState = store.getState();
  const language = useSelector((state) => state.language);
  const languageList = useSelector((state) => state.languageList);

  const handleClick = (e: any) => {
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
      case '4':
        history.push('portfolioPage');
        break;
    }
  }

  function selectLanguage(e: any) {
    //console.log(e.key);
    dispatch(changeLanguageActionCreator(e.key))
  }

  return (
    <div className={styles["header"]}>
      <Dropdown.Button
        className={styles["dropdown"]}
        overlay={
          <Menu>
            {languageList.map((item) => {
              return <Menu.Item key={item.code} onClick={selectLanguage}>{item.name}</Menu.Item>
            })}
          </Menu>
        }
        icon={<GlobalOutlined />}
      >
      </Dropdown.Button>
      <Menu mode={"horizontal"} className={styles["main-menu"]} defaultSelectedKeys={['1']} onClick={handleClick}>
        <Menu.Item key="1">{t("header.autobiography")}</Menu.Item>
        <Menu.Item key="2">{t("header.experience")}</Menu.Item>
        <Menu.Item key="4">{t("header.portfolio")}</Menu.Item>
        <Menu.Item key="3">{t("header.contact")}</Menu.Item>
      </Menu>
    </div>
  );
};
