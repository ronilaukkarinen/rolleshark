#!/bin/bash
VERSION="8660"
sudo cp rolleshark-madsonic.css /var/madsonic/jetty/${VERSION}/webapp/style/
sudo cp -R icons/rolleshark /var/madsonic/jetty/${VERSION}/webapp/icons/
sudo cp -R webfonts /var/madsonic/jetty/${VERSION}/webapp/
sudo cp -R WEB-INF/classes/org /var/madsonic/jetty/${VERSION}/webapp/WEB-INF/classes/
