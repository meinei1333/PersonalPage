import React from "react";
import styles from "./ExperiencePage.module.css"
import { Header } from "../../components"
import { Table } from 'antd';
import { list } from './experienceData'
import { useTranslation } from "react-i18next";

export const ExperiencePage: React.FC = () => {
    const { t } = useTranslation();

    const columns = [
        {
            title: t("experiencePage.companyName"),
            dataIndex: 'name',
            key: 'name',
            width: 50.
        },
        {
            title: t("experiencePage.position"),
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: t("experiencePage.duration"),
            dataIndex: 'duration',
            key: 'duration',
        },
        {
            title: t("experiencePage.content"),
            dataIndex: 'content',
            key: 'content',
            render: (text: any, record: any) => (
                <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
                    {text}
                </div>
            ),
        },
    ];

    return <div className={styles["experience"]}>
        <Header></Header>
        <Table dataSource={list} columns={columns} pagination={false} />
    </div>
}