
# CS-5805-Final-Project Blog Posts

### Link to Website: [https://andrewtran03.github.io/CS5805-ML1-FinalProject/](https://andrewtran03.github.io/CS5805-ML1-FinalProject/)

### Author

Andrew Tran (andrewt03@vt.edu)

### Introduction

- This repository contains all of the blog posts I have created for my CS 5805 - Machine Learning I Final Project. Please enjoy! Topics are listed below. 

### Blog Posts

1. **Probability Theory and Random Variables**: `Spam or Ham Email Analysis - An Exploration Into Probability Theory and Random Variables in Machine Learning`
2. **Clustering**: `(K-Means) Clustering on Chocolate Bar Ratings`
3. **Linear / Non-Linear Regression**: `International US Foreign Currency Exchange Rates Predictor`
4. **Classification**: `Auctioning Used-Car Classifier`
5. **Anomaly / Outlier Detection**: `Financial Institution Fraud Detection Analysis`
6. **Extra 1 (Neural Networks)**: `Book Recommender (RNN) System`

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Disclaimer about Jupyer / Quarto Blog Post Creation: Please note that I originally developed these blog posts on a Jupyter Notebook (`.ipynb`). To get it into the other formats as I did here, I would highly recommend you look into how to use Quarto, please look at the [Quarto](https://quarto.org/docs/get-started/hello/text-editor.html) link here. I have detailed the steps to convert a Jupyter Notebook into a Quarto file (`.qmd`) and then finally into any other format your device can support as shown below - 

## Directions for Copying Quarto Blogs into the Angular Application: #

```
$ cp <name of file>.ipynb index.ipynb
$ quarto convert index.ipynb --output index.qmd
$ (Copy Quarto Header from Another QMD file)
$ (Ctrl+Shift+P > Quarto: Render Document > Render All Declared Formats)
$ (Copy (Alternative Formats) Comment Above to the generated "index.html" file)
```

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# CS-5805-Final-Project Front-End (Angular Description)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Disclaimer about Integrating Jupyter / Quarto Blog Posts with Angular Front-End: Please note that these usually don't go together. I had to configure my GitHub Pages to accept the `docs/` folder as my public-displayed folder in the repository settings. Additionally, with Windows configurations, I had to override the GitBash quirkyness with special adjustments to typical Angular CLI commands. For more information, please see the `blog_build_script.sh` file -

## Main Contents of `blog_build_script.sh` (Copied Here):
```
echo "|-------- Beginning of Running Project Clean Up Script --------|"
echo "Windows (Git Bash) Configuration for Angular Project"
time ng build --output-path docs --base-href='//CS5805-ML1-FinalProject\'
echo "Copying Blog Posts Into Angular Project Final Deployment Folder"
time cp -r blog-posts/ docs/
echo "|-------- End of Running Project Clean Up Script --------|"
```
