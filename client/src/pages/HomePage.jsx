import React from "react";
import { soundLoadRandom } from "../services/sounds";
import { useEffect, useState } from "react";

const HomePage = () => {
  // write code for Randomized Track of the day //
  return (
    <div>
      <p>Welcome to EchoSound</p>
      <p>variety of music & sound</p>
      <br />
      <p>
        <i>The application which provides you with all sorts of sounds</i>
      </p>
      <p>
        EchoSound is the new music app in which you can find your favourite
        music & podcast. You are able to save you favourites in your own
        summarised playlist, so wherever you go you have your favourite music
        with you. In addition we opened a sample bank, for those who work in the
        field of sound this is the optimal way of finding quick new sounds to
        use. You can download samples and create your own samples, with only one
        click. Create your favorite sample list for quick excess. Enjoy your new
        sounds, which will echo in your ear for a while.{" "}
      </p>

      <p>Register to use all features of EchoSound</p>
    </div>
  );
};

export default HomePage;
