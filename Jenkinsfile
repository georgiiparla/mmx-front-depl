pipeline {
    agent any
    tools {
        nodejs 'node-20'
    }

    environment {
        ARTIFACT_ID = "frontend-nextjs"
        ZIP_NAME = 'frontend-build.zip'
        BASE_VERSION = '1.0'

        NEXUS_URL = '172.20.10.25:8081'
        NEXUS_CREDENTIALS_ID = '7d196d2f-f3c1-4803-bde9-2d17d18776b3'
        NEXUS_GROUP_ID = 'builds'
        NEXUS_REPO = 'frontend-releases'
    }

    stages {

        stage ('Install dependencies') {
            steps {
                echo "Installing..."
                sh "npm install --legacy-peer-deps"
            }
        }
        
        stage ('Build') {
            steps {
                echo "Building..."
                sh "npm run build"
            }
        }

        stage ('Test'){
            steps {
                echo 'Testing...'
            }
        }

        stage('Package Artifact') {
            steps {
                echo "Packaging the executable into a ZIP archive..."
                sh "zip -r ${ZIP_NAME} .next package.json"
            }
        }

        stage('Publish to Nexus') {
            steps {
                script {
                    def releaseVersion = sh(returnStdout: true, script: "jq -r .version package.json").trim()
                    echo "Uploading artifact version ${releaseVersion} to ${NEXUS_REPO}..."
                
                    nexusArtifactUploader(
                        nexusVersion: 'nexus3',
                        protocol: 'http',
                        nexusUrl: "${NEXUS_URL}",
                        credentialsId: "${NEXUS_CREDENTIALS_ID}",
                        repository: "${NEXUS_REPO}",
                    
                        groupId: "${NEXUS_GROUP_ID}",
                        version: "${releaseVersion}",
                    
                        artifacts: [
                            [
                                artifactId: "${ARTIFACT_ID}",
                                classifier: '',
                                file: "${ZIP_NAME}",
                                type: 'zip'
                            ]
                        ]
                    )
                }
            }
        }

        stage ('Deploy'){
            steps {
                echo 'Deploying...'
            }
        }
    }
}


