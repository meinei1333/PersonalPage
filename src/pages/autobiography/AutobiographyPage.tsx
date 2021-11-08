import React from "react";
import styles from "./AutobiographyPage.module.css"
import { Header } from "../../components"
import { Typography } from "antd";

export const AutobiographyPage: React.FC = () => {
    return <div className={styles["autobiography"]}>
        <Header></Header>
        <Typography.Title level={2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum natus doloremque illo sed repudiandae perferendis sint, voluptatum quisquam nobis pariatur earum quas nulla excepturi, dicta ipsam vero incidunt! Laborum voluptates architecto, eaque consequatur voluptatum possimus vel corrupti delectus ex sapiente odio labore, ea doloremque esse libero reiciendis velit eum hic cum minus ratione eos necessitatibus assumenda? Reiciendis optio vitae culpa, earum sequi veritatis nihil ipsam voluptas vero nobis in deserunt minima hic ut. Dicta temporibus quod error explicabo in voluptatem laudantium culpa assumenda accusamus veritatis recusandae rerum labore, optio cum, porro voluptates. Magnam ad mollitia consequuntur nesciunt omnis sunt veniam.</Typography.Title>
    </div>
}