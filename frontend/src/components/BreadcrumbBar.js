import React from 'react'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import '../assets/css/Breadcrumb.css'

export default function BreadcrumbBar() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div className="breadcrumb-wrapper">
            <Container>
                <div className='breadcrumb'>
                    {breadcrumbs.map(({ breadcrumb, match }, index) => (
                        <span key={index}>
                            <Link to={match.url} className='me-1'>
                                {breadcrumb}{" "}
                                {index === breadcrumbs.length - 1 ? (
                                    ""
                                ) : (
                                    <i class='fas fa-caret-right'></i>
                                )}
                            </Link>
                        </span>
                    ))}
                </div>
                <div className='group-share'>
                    <i class='fas fa-share-alt'></i>
                    <span>Share</span>
                </div>
            </Container>
        </div>
    )
}
