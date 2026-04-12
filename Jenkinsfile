pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/rajasalmanazim/fish-shop.git'
            }
        }

        stage('Tear Down Previous') {
            steps {
                sh 'docker-compose -f docker-compose-p2.yml down --remove-orphans || true'
            }
        }

        stage('Build and Deploy') {
            steps {
                sh 'docker-compose -f docker-compose-p2.yml up -d'
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo 'Fish Shop Part II deployed successfully!'
        }
        failure {
            echo 'Deployment failed. Check logs.'
        }
    }
}