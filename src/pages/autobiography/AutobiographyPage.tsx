import React from "react";
import styles from "./AutobiographyPage.module.css"
import { Header } from "../../components"
import { Typography } from "antd";
import { useTranslation } from "react-i18next";


export const AutobiographyPage: React.FC = () => {
    const { t } = useTranslation();
    const contenta = "從靜宜大學的資管系畢業後, 一直都從事軟体開發的工作,<br/>開發過的專案有<br/>在IBM AS/400大型主機上的銀行信託會計系統、HR系統、倉庫儲存系統(前後瑞一起)<br/>展覽/演唱會排位統、FB遊戲、抽獎遊戲(前瑞)<br/>Poker, Slot, 刮刮樂, 魚機, 區塊鏈遊戲(前瑞)<br/>主要使用 Canvas框架是pixijs, phaser. web框架是React, Redux<br/>"
    const content = contenta.replace(/(\r\n)|(\n)/g, '<br>')

    return <div className={styles["autobiography"]}>
        <Header></Header>
        <Typography.Title className={styles["autoContext"]} level={2}>從靜宜大學的資管系畢業後, 一直都從事軟体開發的工作,<br />開發過的專案有<br />在IBM AS/400大型主機上的銀行信託會計系統、HR系統、倉庫儲存系統(前後瑞一起)<br />展覽/演唱會排位統、FB遊戲、抽獎遊戲(前瑞)<br />Poker, Slot, 刮刮樂, 魚機, 區塊鏈遊戲(前瑞)<br />主要使用 Canvas框架是pixijs, phaser. web框架是React, Redux<br /></Typography.Title>
    </div>
}