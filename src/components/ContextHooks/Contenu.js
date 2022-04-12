import React, { useContext } from "react";
import "./Contenu.css";
import { ThemeContext } from "../Context/ThemeContext";

export default function Contenu() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? 'contenu light': "contenu dark"}
    
    >
      <h1>Lorem ipsum dolor sit amet.</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eveniet
      ratione cum reprehenderit illum, veniam, dolorum inventore maxime
      voluptatibus ab impedit. Deleniti, velit necessitatibus odio quibusdam
      nihil nulla repudiandae, illum nostrum id corrupti vero voluptate esse
      tempora dolorum consectetur aperiam excepturi. Esse aut odit mollitia quam
      ipsum perferendis cum porro? Nulla, voluptate soluta. Quia blanditiis
      mollitia deleniti beatae quam nulla. Numquam, nesciunt. Ea enim esse
      facere odit error, illum suscipit tenetur porro inventore magni nihil
      laborum fugit sint repudiandae modi, sed minus consectetur temporibus
      consequatur quasi, est qui ut. Consequatur laboriosam quasi dolore
      perspiciatis delectus amet excepturi a aperiam, minus iure similique earum
      dignissimos ducimus numquam nemo possimus reprehenderit voluptatem vero
      porro ipsa dolor nihil. Molestiae, quasi ex natus eaque, provident fugit
      omnis eos corrupti est aut suscipit expedita pariatur fuga voluptates ab
      rerum sit dicta accusantium voluptatum impedit rem incidunt nemo
      excepturi. Deleniti nesciunt rem nulla voluptatum quis dolor blanditiis
      praesentium quam. Laborum incidunt consequatur enim pariatur dignissimos
      debitis sint ea illum, eius, repudiandae explicabo asperiores expedita
      consectetur molestias. Delectus, nostrum provident nemo sint est accusamus
      ex ullam voluptatibus esse fuga nam corporis et commodi, dolorem modi
      animi, facere corrupti numquam doloremque tempora? Sapiente eaque earum
      sed minus quia.
    </div>
  );
}
