pipeline {
  agent none
  stages {
    stage('nodejs init') {
      steps {
        node(label: 'nodejs') {
          bat 'npm run'
        }

      }
    }
  }
}