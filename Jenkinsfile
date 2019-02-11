pipeline {
  agent any
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