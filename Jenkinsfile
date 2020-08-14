pipeline {
    agent {
        label 'student-rating'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build docker images') {
            steps {
                bat 'docker build -t juhaszlevente/student-rating:v1.3 .'
            }
        }

        stage('Deploy docker images') {
            steps {
                bat 'docker push juhaszlevente/student-rating:v1.3'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'oc apply -f ./kube/k8s.yaml'
            }
        }
    }
}