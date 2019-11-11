node {

    stage('Preparation') {
        checkout scm
    }

     stage('NPM Install') {
        sh "npm install"
     }

     stage('Build WebApp') {
        sh "ng build --prod --configuration prod --base-href ."
     }

    stage('Install WebApp on Firebase') {
            withCredentials([usernamePassword(credentialsId: 'FIREBASE-TOKEN', variable: 'token')]) {
                sh "firebase deploy --token ${token}"
            }
     }

 }
