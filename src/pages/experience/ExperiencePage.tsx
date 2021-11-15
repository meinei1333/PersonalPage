import React from "react";
import styles from "./ExperiencePage.module.css"
import { Header } from "../../components"
import { Table } from 'antd';
import { list } from './experienceData'

const columns = [
    {
        title: '公司名稱',
        dataIndex: 'name',
        key: 'name',
        width: 50.
    },
    {
        title: '職位',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: '期間',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: '工作內容',
        dataIndex: 'content',
        key: 'content',
        render: (text:any, record:any) => (
            <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
              {text}
            </div>
          ),
    },
];



export const ExperiencePage: React.FC = () => {
    return <div className={styles["experience"]}>
        <Header></Header>
        <Table dataSource={list} columns={columns} pagination={false} />
    </div>
}