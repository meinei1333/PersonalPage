import React from "react";
import styles from "./ExperiencePage.module.css"
import { Header } from "../../components"
import { Table } from 'antd';
import { list } from './experienceData'

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        position: 32,
        duration: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        position: 42,
        duration: '10 Downing Street',
    },
];

const columns = [
    {
        title: '公司名稱',
        dataIndex: 'name',
        key: 'name',
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
    },
];



export const ExperiencePage: React.FC = () => {
    return <div className={styles["experience"]}>
        <Header></Header>
        <Table dataSource={list} columns={columns} pagination={false} />
    </div>
}