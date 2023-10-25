pipeline {
  agent any
  stages {
    stage('Check out code') {
      steps {
        git(url: 'https://github.com/Achanandhi-M/Server-in-Nodejs-using-Docker.git', branch: 'master')
      }
    }

    stage('Listing') {
      parallel {
        stage('Listing') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Message') {
          steps {
            sh 'pwd'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'sudo docker build -t myimage .'
      }
    }

    stage('Push to Dockerhub') {
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

  }
  environment {
    DOCKERHUB_USER = 'achanandhi'
    DOCKERHUB_PASSWORD = 'Achanandhi@123'
  }
}