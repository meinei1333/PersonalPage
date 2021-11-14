import React from "react";
import styles from "./PortfolioPage.module.css"
import { Header } from "../../components"
import { Typography } from 'antd';
import fishGame from "../../assets/fishGame.png";
import poker from "../../assets/poker.png";
import slot from "../../assets/slot.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";

export const PortfolioPage: React.FC = () => {
    function onclickImage(e: any) {
        switch (e.target.alt) {
            case "fishgame":
                window.open('https://drive.google.com/file/d/14gNoiLEhD15ZFRQNUGgd_I6nc6SjxrCP/view', '魚機');
                break;
            case "slot":
                window.open('https://drive.google.com/file/d/0B7gGLWDmnpyOZUZ0SEJIenE0RFE/view?resourcekey=0-Z2bPBkhAwPnTHRxno41rlQ', 'slot');
                break;
            case "poker":
                window.open('https://drive.google.com/file/d/1tnbQDR80BRiPcejSCS4gz5SGOdyh_xG8/view', 'poker');
                break;
        }
    }

    function onClickPage(e: any) {
        switch (e.target.alt) {
            case "p1":
                window.open('https://meinei1333.000webhostapp.com/p1/index.html', '個人網頁1');
                break;
            case "p2":
                window.open('https://meinei1333.000webhostapp.com/p2/index.html', '個人網頁2');
                break;
            case "p3":
                window.open('https://meinei1333.000webhostapp.com/p3/index.html', '個人網頁3');
                break;
        }
    }

    return <div>
        <Header></Header>
        <div className={styles["container"]}>
            <div className={styles["img_container"]}>
                <Typography.Title>遊戲</Typography.Title>
                <img className={styles["imgStyle"]} src={fishGame} alt="fishgame" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={poker} alt="poker" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={slot} alt="poker" onClick={onclickImage} />
            </div>
            <div className={styles["personalPag_container"]}>
                <Typography.Title>個人網頁</Typography.Title>
                <img className={styles["imgStyle"]} src={p1} alt="p1" onClick={onClickPage} />
                <img className={styles["imgStyle"]} src={p2} alt="p2" onClick={onClickPage} />
                <img className={styles["imgStyle"]} src={p3} alt="p3" onClick={onClickPage} />
            </div>
        </div>
    </div>
}