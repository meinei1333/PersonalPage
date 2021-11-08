import React from "react";
import styles from "./ContactMePage.module.css"
import { Header } from "../../components"
import { Form, Button, Input } from 'antd';
import { useTranslation } from "react-i18next";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export const ContactMePage: React.FC = () => {

    const { t } = useTranslation();

    const onFinish = (values: any) => {
        console.log(values);
    };

    return <div className={styles["contactMePage"]}>
        <Header></Header>
        <div className={styles["formCenter"]}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}
                    label={t('contactMePage.name')}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label={t('contactMePage.email')}
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'content']} label={t('contactMePage.content')}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" shape="round">
                        {t('contactMePage.submit')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}