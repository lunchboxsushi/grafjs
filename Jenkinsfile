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
        git(url: 'https://github.com/lunchboxsushi/grafjs', branch: 'Master', changelog: true)
      }
    }
  }
}