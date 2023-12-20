import React, { useEffect, useState } from "react";
import classes from "./Game.module.css";

const ImageComponent = ({ imagePath }) => {
  const [base64String, setBase64String] = useState(null);

  useEffect(() => {
    const fetchAndConvertImageToBase64 = async () => {
      try {
        const response = await fetch(imagePath);

        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const blob = await response.blob();

        // Convert blob to base64
        const reader = new FileReader();
        reader.onloadend = () => setBase64String(reader.result);
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error fetching and converting image to base64:", error);
      }
    };

    fetchAndConvertImageToBase64();
  }, [imagePath]);

  return (
    <div>
      {base64String && (
        <img
          className={classes.map_image}
          src={base64String}
          alt="Base64-Encoded"
          style={{ maxWidth: "100%", maxHeight: "100%", zIndex: -1000 }}
        />
      )}
    </div>
  );
};

// Usage in your component
const QPanel = (props) => {
  const imagePath = `maps/${props.map}`;

  return <ImageComponent imagePath={imagePath} />;
};

export default QPanel;
