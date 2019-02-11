pipeline {
  agent none
  stages {
    stage('build') {
      steps {
        echo 'Hello'
      }
    }
    stage('git') {
      steps {
        git(url: 'https://github.com/lunchboxsushi/grafjs', branch: 'master')
        sh '''#!/bin/sh

git fetch'''
      }
    }
  }
}