node {

    def path_install="/opt/webserver/www/coravi/seguridad/"
    def mvn="/opt/apache-maven/bin/mvn"
    def cpnt_ws="seguridad-web-angular"
    def project="kapcom"
    def version="1.0.0"

    stage('Preparation') { // for display purposes
        checkout scm
    }

     stage('NPM Install') {
        sh "npm install"
     }

     stage('Build WebApp') {
        sh "ng build --prod --configuration prod --base-href ."
     }

    stage('Install WebApp') {
         sh "ssh tristan@gateway.kapcomperu.com mkdir -p '${path_install}'"
         sh "scp -r dist/. tristan@gateway.kapcomperu.com:'${path_install}'"
     }

 }