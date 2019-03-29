pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(url: 'https://github.com/asuc-octo/berkeleytime', branch: 'react-temp', credentialsId: 'GitHubAcc')
        sh '''version=$(git rev-parse --short HEAD)
docker build -t berkeleytime/berkeleytimestage:$version -f berkeleytime/Dockerfile berkeleytime
docker push berkeleytime/berkeleytimestage:$version'''
      }
    }
  }
  environment {
    registryCredential = 'DockerHubAcc'
  }
}