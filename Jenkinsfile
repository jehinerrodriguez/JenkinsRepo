pipeline {
  agent any
  
  environment {

    PATH = "C:\\WINDOWS\\SYSTEM32"

	}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/jehinerrodriguez/JenkinsRepo'
      }
    }
        
    stage('Install dependencies') {
      steps {
        echo "Installing"
      }
    }
     
    stage('Test') {
      steps {
		    echo "Testing"
      }
    }      
  }
}