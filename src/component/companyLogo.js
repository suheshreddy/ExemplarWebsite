import React from "react";
import azure from '../assets/images/client/azure.svg';
import snowflake from '../assets/images/client/snowflake.png';
import databricks from '../assets/images/client/databricks.png';
import dbt from '../assets/images/client/dbt.jpeg';
import shopify from '../assets/images/client/shopify.svg';
import spotify from '../assets/images/client/spotify.svg';
import gcp from '../assets/images/client/GCP.png';
import aws from '../assets/images/client/aws.svg';
export default function CompanyLogo(){
    return(
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
                <img src={gcp} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={aws} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={azure} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={snowflake} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={databricks} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
                <img src={dbt} className="h-6" alt="" />
            </div>
        </div>
    )
}