pipeline {
  agent {
      label 'student-rating'
  }
  stages {
    stage('Build') {
      steps {
        bat 'npm install'
        bat 'npm run start'
      }
    }

    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }

  }
}