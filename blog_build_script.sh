echo "|-------- Beginning of Running P1 Clean Up Script --------|"
echo "Windows (Git Bash) Configuration for Angular Project"
time ng build --output-path docs --base-href='//CS5805-ML1-FinalProject\'
echo "Copying Blog Posts Into Angular Project Final Deployment Folder"
time cp -r blog-posts/ docs/
echo "|-------- End of Running P1 Clean Up Script --------|"