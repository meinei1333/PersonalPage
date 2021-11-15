import React from "react";
import styles from "./AutobiographyPage.module.css"
import { Header } from "../../components"
import { useTranslation } from "react-i18next";


export const AutobiographyPage: React.FC = () => {
    const { t } = useTranslation();
    return <div className={styles["autobiography"]}>
        <Header></Header>
        <h1 className={styles["content"]} dangerouslySetInnerHTML={{ __html: t("autogiography.content") }} ></h1>
    </div>
}