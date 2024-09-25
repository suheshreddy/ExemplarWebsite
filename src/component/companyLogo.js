import React from 'react';
import azure from '../assets/images/client/azure.svg';
import snowflake from '../assets/images/partners/snowfake.png';
import databricks from '../assets/images/client/databricks.png';
import dbt from '../assets/images/partners/datadog.png';
import shopify from '../assets/images/partners/shopify.png';
import powerbi from '../assets/images/partners/Microsoft-Power-BI-Logo_PNG.png';
import gcp from '../assets/images/partners/gitlab.png';
import aws from '../assets/images/partners/amazon.png';
export default function CompanyLogo() {
  return (
    <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
      <div className="mx-auto py-4">
        <img src={powerbi} className="h-16" alt="" />
      </div>
      <div className="mx-auto py-4">
        <img src={gcp} className="h-16" alt="" />
      </div>

      <div className="mx-auto py-4">
        <img src={aws} className="h-16" alt="" />
      </div>

      <div className="mx-auto py-4">
        <img src={snowflake} className="h-16" alt="" />
      </div>

      <div className="mx-auto py-4">
        <img src={databricks} className="h-16" alt="" />
      </div>

      <div className="mx-auto py-4">
        <img src={dbt} className="h-16" alt="" />
      </div>
    </div>
  );
}
