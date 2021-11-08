import React from "react";
import styles from "./ExperiencePage.module.css"
import { Header } from "../../components"
import { Table, Button, Space } from 'antd';

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        dataIndex: 'name',
        key: 'name',
    },
    {
        dataIndex: 'age',
        key: 'age',
    },
    {
        dataIndex: 'address',
        key: 'address',
    },
];



export const ExperiencePage: React.FC = () => {
    return <div className={styles["experience"]}>
        <Header></Header>
        <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />;
    </div>
}