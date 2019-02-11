pipeline {
  agent {
    node {
      label 'Agent_1'
    }

  }
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