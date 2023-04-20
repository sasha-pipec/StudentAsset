import React, { useState } from "react";
import classes from "./CreateEvent.module.css";
import VoteStore from "../../store/VoteStore";
export const CreateEvent = () => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileButtonStyle, setFileButtonStyle] = useState({
    backgroundColor: "#1d1d1d",
    height: "217px",
    width: "100%",
  });
  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        setFileButtonStyle({
          ...fileButtonStyle,
          backgroundImage: `url(${reader.result})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        });
      };
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    const formData = new FormData();
    formData.append("title", value);
    formData.append("description", description);
    formData.append("image", selectedFile);
    let data = [value, description];
    console.log(data);
    console.log(formData.get("image"));
    event.preventDefault();
    VoteStore.createEvent(data, formData);

    // Добавьте здесь логику отправки выбранной фотографии на сервер
  };
  return (
    <div className={classes.wrapper}>
      <div>
        <p className={classes.title}>Есть идея для мероприятия?</p>
        <p className={classes.subTitle}>
          Поделитесь ею с нами, мы рассмотрим ваше предложение и, возможно,
          опубликуем во вкладке “афиша”
        </p>
      </div>
      <div className={classes.form}>
        <input
          value={value}
          type="text"
          placeholder="НАЗВАНИЕ СОБЫТИЯ"
          className={classes.name}
          onChange={(e) => setValue(e.target.value)}
        />
        <textarea
          value={description}
          className={classes.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          cols="30"
          rows="10"
          placeholder="ОПИСАНИЕ"></textarea>
        <label htmlFor="fileInput" style={fileButtonStyle}>
          <input
            id="fileInput"
            className={classes.file}
            type="file"
            onChange={handleFileChange}
            accept="image/*,.png,.jpg,.gif,.web"
          />
        </label>
        <p>Вы можете загрузить изображение в формате JPG, GIF или PNG.</p>
        <button className={classes.button} onClick={handleSubmit}>
          Отправить
        </button>
      </div>
    </div>
  );
};
