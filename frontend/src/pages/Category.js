import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export default function Category() {
    const { categoryId, category_detail_id } = useParams();

    console.log(categoryId);
    const breadcrumbs = useBreadcrumbs()

    console.log(breadcrumbs);

    return <div>{breadcrumbs.map(({ breadcrumb }) => breadcrumb)}</div>;
}
