import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

interface Props {
    siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
    <header
        style={{
            // tslint:disable-next-line: object-literal-sort-keys
            background: 'rebeccapurple',
            marginBottom: '1.45rem'
        }}
    >
        <div
            style={{
                // tslint:disable-next-line: object-literal-sort-keys
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem'
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        // tslint:disable-next-line: object-literal-sort-keys
                        color: 'white',
                        textDecoration: 'none'
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ''
};

export default Header;
