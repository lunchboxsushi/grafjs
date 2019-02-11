pipeline {
  agent none
  stages {
    stage('msg') {
      steps {
        echo 'Working'
      }
    }
    stage('pull latest') {
      steps {
        bat 'java -jar jenkins.war'
      }
    }
  }
}