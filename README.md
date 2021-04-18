![Aerowave](https://raw.githubusercontent.com/Neilblaze/Aerowave/reader/main_logo.png)


# Assisting Repo : https://github.com/neilblaze/aerowave

## Background
𝐂𝐨𝐯𝐢𝐝-𝟏𝟗 has turned all of our lives upsides down. It's 2021 & currently, we are standing in front of the second wave of the same. Because of that, the concept of contact-less methods is growing quite rapidly. But unfortunately, there are few scopes where we are still lacking the option, for example, ATM, Stores, Malls, Reservation Counters, Airports, etc. In terms of ATM, **access to cash for many in society is remaining essential during the current lockdown around the globe.** This is because, it requires a touch, be it either the note or the machine, which certainly is a major source of spreading Coronavirus in the public. This chain needs to be stopped before it's too late.

![ATM](https://raw.githubusercontent.com/Neilblaze/Aerowave/front-end/media/atm-long.jpg)

And that's how our project **Aerowave** jumps in!  😎

## What it does
**Aerowave** is a revolutionary POC (Proof of Concept) infused in a web application that utilizes cutting-edge technology to help the public experience the perfect contactless interaction with any interfaces. We designed it from scratch to ensure that *everyone* is a perfect fit for Aerowave. Aerowave is primarily built with React.js & Tailwind CSS and the front-end is running on Javascript (vanilla), HTML & Bulma CSS. It's utilizing various 3rd party API's to run the lightweight ML models inside it. The result is visible on the demo video itself! 😉  

It just requires a system with a minimum of 4GB of RAM & is preferred to run on Chrome Browser. All of the data is taken through the input webcam video feed and is directly computed on the client side itself using Tensorflow.js and ml5.js, ensuring 100% GDPR compatability, meaning we have no database - so in terms of **user privacy** users can feel **100% safe** about using our product.

A further explanation of how each of these works can be found in the Engineering section below.

### Features
Although Aerowave is currently a POC, it currently supports all of the following features!

- Minimalistic UI
- Optimized for Low-spec systems.
- Customizable more than 10+ gestures for different operations. 
- Easy to integrate into any web-based app or interface.
- Fully functioning components including buttons, containers, images, and more!
- Firebase for encrypted Data-logging.
- Keeping track of faces (Gender, Emotion, Age) using Facemesh-API
- Auto font-scaling.
- Customizable Teachable inspired Gesture Keyboard
- S2S interaction (removed due to CORS)
- One-click deploy to Heroku

---

# Engineering
### System Architecture
- Watch Video (TODO)


## How we built it
**Aerowave** is crafted with ❤️.  All computations of those gestures are directly computed on the client side itself using Tensorflow.js and ml5.js. The front-end of the application is made with React.js and Tailwind CSS. Rest, the landing page was developed with HTML, CSS, Javascript (vanilla) with jQuery. The authentication of the platform is done via Firebase. For the execution, we've utilized Shard1 & Mobilenet v3 for the models along with a few 3rd party API's like Posenet-API & Facemesh-API and a few ml5 ones.

**So, how everything works?**

• We train our baseline 3D-CNN model till convergence and obtain the softmax output for each training sample.
![info](https://raw.githubusercontent.com/Neilblaze/Aerowave/reader/Research-assets/joint_3d_lstm_cnn.JPG)

• Then we trained smaller variants (referred to as medium and small) of our joint model obtained by reducing the number of feature maps (channels) in each layer by two and four times, respectively.

• To supervise the likelihood for each keypoint, we generate a sort of heatmap, wherein the mean of Gaussian peak is positioned at the ground-truth joint location as follows: 
![info](https://raw.githubusercontent.com/Neilblaze/Aerowave/reader/Research-assets/net_train_1.JPG)

• Also, we adopt the mean square error as a loss function L as follows:
![info](https://raw.githubusercontent.com/Neilblaze/Aerowave/reader/Research-assets/net_train_2.JPG)

• Specifically, we save the trained model for each epoch in the training stage, and then in the testing stage, we average all the estimated 3D coordinates from the trained models. As we trained our model by 15 epochs, we used 15 models to obtain the final estimation. Skipping the surface, the final output of the gesture training looks like this:
![info](https://raw.githubusercontent.com/Neilblaze/Aerowave/reader/Research-assets/gesture_training.JPG)

• The comparisons were made using **Cosine Similarity**, a model which allows us to measure similarity between two non-zero vectors, where each vector consists of the positions of the person's body parts. After normalizing the vectors and calculating the cosine similarity, we would find the **Euclidean Distance** which takes into account a user's relative positioning in the rating calculations. These calculations are made in real-time to output a final confidence score, between 1 and 100, that is used to rate the output confidence.

## Challenges we ran into
**A lot!** As I previously mentioned, the whole execution was done from scratch, even the advent of **idea** in our mind literally came during the opening ceremony from Sandipan. Initially, we were facing some issues while training the model on our system, including underfitting errors as we had to reduce the dataset parameters to optimize it so that it can run seamlessly on low-end devices. Also, it was a bit difficult for us to collaborate in a virtual setting but we somehow managed to finish the project on time.

## What We Learned
**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon 😆

## Takeaways
In order for the Aerowave system to work, there were a lot of features that needed to be implemented. Apart from setting up the front end, we had to leverage a lot of extra hours to redefine the Tensorflow model that we have used. The existing Tf model has been refactored to fix the issue of underfitting of the input vectors. We learned about how to analyze the video feed and return an array of coordinates corresponding to the current positions of a user's hand, including the elbows, shoulders, and of course face. Using these data points, we needed to determine if a specific gesture was being executed. We learned about built-in math functions that Javascript offered, in order to match up position vectors to a pre-set condition for each position. Finally, we needed to compare two unique poses and return a metric to indicate how similar they were. To accomplish this, we used cosine similarity to return a single numeric value determining the similarity of the poses. After all these steps complete, we provide feedback to the user regarding the data that was just analyzed. Over the past weekend, we learned a lot about new web technologies and libraries that we could incorporate into our project to meet our unique needs.

## Accomplishments

Turning a Proof of Concept idea into a working prototype is not an easy deal. It was a tad difficult for us to collaborate in a virtual setting but we are proud of finishing the project on time which seemed like a tough task initially but happily were also able to add most of the concepts that we envisioned for the app during ideation. Lastly, we think the impact our project could have is a significant accomplishment. Especially, trailing the current scenario of COVID19, this could really be a product that people find useful!

This project was especially an achievement for us because this time the experience was very different than what we have while building typical hackathon projects, which also includes heavy brainstorming, extensive research, and yes, hitting the final pin on the board.

![Team](https://raw.githubusercontent.com/Neilblaze/Aerowave/reader/team.png)

### What we learned
A lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon 😆

---
## Research

V2V-PoseNet: Voxel-to-Voxel Prediction Network for Accurate 3D Hand and
Human Pose Estimation from a Single Depth Map. https://arxiv.org/pdf/1711.07399v3.pdf

Face and hand tracking in the browser with MediaPipe and TensorFlow.js. https://blog.tensorflow.org/2020/03/face-and-hand-tracking-in-browser-with-mediapipe-and-tensorflowjs.html

Confronting COVID-19: An Analysis of Surface Contamination Risks. https://bit.ly/3mZ3vqo

Face landmarks detection with MediaPipe Facemesh.  https://towardsdatascience.com/face-landmarks-detection-with-mediapipe-facemesh-555fa2e10b06

Community Transmission of SARS-CoV-2 by Surfaces: Risks and Risk Reduction Strategies. https://pubs.acs.org/doi/10.1021/acs.estlett.0c00966

---

### What's next for Aerowave
A big challenge of the project was being able to detect the specific gesture and computing the action directly on client-side. Given more time, we'd be able to add an integrator that can take live input of a combination of gestures and recognize them. Also, we'd like to add more features to the app aesthetically intuitive and refactor the existing codebase to make it more suitable for Low-spec systems.
