#!/bin/bash

source ../.secrets/deploy-authentication.sh

thisDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
parentDir=$(cd -- "$thisDir/../" && pwd)

################## config

localPath="$parentDir/public/"
remotePath="$remoteServer:www/gatsby-test"

################## end config

rsync -av --delete "ssh -p 22" "$localPath" "$remotePath"
