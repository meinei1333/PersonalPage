import React from "react";
import styles from "./PortfolioPage.module.css"
import { Header } from "../../components"
import { Typography } from 'antd';
import fishGame from "../../assets/fishGame.png";
import poker from "../../assets/poker.png";
import slot from "../../assets/slot.png";
import tank from "../../assets/tank.png";
import soapApp from "../../assets/soapApp.png";
import list from "../../assets/list.png";
import live from "../../assets/live.png";
import passwordACalendar from "../../assets/passwordACalendar.png";
import frequency from "../../assets/frequency.png";
import { useTranslation } from "react-i18next";

export const PortfolioPage: React.FC = () => {
    const { t } = useTranslation();
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
            case "tank":
                window.open('https://demo-tankgame.netlify.app/', 'tank');
                break;
            case "frequency":
                window.open('https://meinei1333.000webhostapp.com/frequency/index.html', 'frequency');
                break;
            case "live":
                window.open('https://drive.google.com/file/d/1y6C9ioxgZitMWCCMIHBfb0sCwfTiyccS/view?usp=sharing', 'live');
                break;
            case "passwordACalendar":
                window.open('https://passwordacalendar.netlify.app/', 'passwordACalendar');
                break;
            case "soap-app":
                window.open('https://soap-app.netlify.app/', 'soap-app');
                break;
            case "list":
                window.open('https://majestic-souffle-49a496.netlify.app/', 'list');
                break;
        }
    }

    return <div>
        <Header></Header>
        <div className={styles["container"]}>
            <div className={styles["img_container"]}>
                <Typography.Title>{t("portfolioPage.game")}</Typography.Title>
                <img className={styles["imgStyle"]} src={fishGame} alt="fishgame" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={poker} alt="poker" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={slot} alt="slot" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={tank} alt="tank" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={frequency} alt="frequency" onClick={onclickImage} />
            </div>
            <div className={styles["img_container"]}>
                <Typography.Title>{t("portfolioPage.web")}</Typography.Title>
                <img className={styles["imgStyle"]} src={live} alt="live" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={passwordACalendar} alt="passwordACalendar" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={soapApp} alt="soap-app" onClick={onclickImage} />
                <img className={styles["imgStyle"]} src={list} alt="list" onClick={onclickImage} />
            </div>
        </div>
    </div>
}