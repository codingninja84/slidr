import React from 'react';
import Button from 'material-ui/Button';
import IntlMessages from 'util/IntlMessages';

const Footer = () => {
        return (
            <footer className="app-footer">
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <span> Copyright Analytics Pros &copy; 2018</span>

                    </div>
                    <div>
                        <Button
                            href="https://www.analyticspros.com"
                            target="_blank"
                            size="small"
                            className="text-secondary"
                            color="secondary"
                        >AP Website</Button>
                    </div>
                </div>
            </footer>
        );
    }
;

export default Footer;
