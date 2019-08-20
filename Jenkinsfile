pipeline {
  agent any
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/jehinerrodriguez/JenkinsRepo'
      }
    }
        
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         bat './script/test'
      }
    }      
  }
}