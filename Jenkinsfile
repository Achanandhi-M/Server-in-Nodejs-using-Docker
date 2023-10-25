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
        sh 'docker build -t myimage .'
      }
    }

  }
}