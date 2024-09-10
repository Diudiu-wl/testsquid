import React, { useState, useEffect } from "react";
import "./App.css";

// 图片资源的路径
const bodyImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/body1.png`},
  { id: 2, src: `${process.env.PUBLIC_URL}/images/body2.png` },
];

// 对应 body 1 的选项
const body1EyeImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/eye1_body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/eye2_body1.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/eye3_body1.png`},
  { id: 4, src: `${process.env.PUBLIC_URL}/images/eye4_body1.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/eye5_body1.png` },
  { id: 6, src: `${process.env.PUBLIC_URL}/images/eye6_body1.png` },
  { id: 7, src: `${process.env.PUBLIC_URL}/images/eye7_body1.png` },
  { id: 8, src: `${process.env.PUBLIC_URL}/images/eye8_body1.png` },

];

const body1MouthImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/mouth1_body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/mouth2_body1.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/mouth3_body1.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/mouth4_body1.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/mouth5_body1.png` },
  { id: 6, src: `${process.env.PUBLIC_URL}/images/mouth6_body1.png` },
  { id: 7, src: `${process.env.PUBLIC_URL}/images/mouth7_body1.png` },
  { id: 8, src: `${process.env.PUBLIC_URL}/images/mouth8_body1.png` },
  { id: 9, src: `${process.env.PUBLIC_URL}/images/mouth9_body1.png` },
  { id: 10, src: `${process.env.PUBLIC_URL}/images/mouth10_body1.png` },
];

const body1ClothImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/cloth1_body1.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/cloth2_body1.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/cloth3_body1.png`  },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/cloth4_body1.png`  },
];

// 对应 body 2 的选项
const body2EyeImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/eye1_body2.png`  },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/eye2_body2.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/eye3_body2.png` },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/eye4_body2.png` },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/eye5_body2.png` },
];

const body2MouthImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/mouth1_body2.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/mouth2_body2.png` },
];

const body2ClothImages = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/cloth1_body2.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/cloth2_body2.png`},
  { id: 3, src: `${process.env.PUBLIC_URL}/images/cloth3_body2.png`},
  { id: 4, src: `${process.env.PUBLIC_URL}/images/cloth4_body2.png` },
];



// 特殊嘴巴图像的路径
//const specialMouth = "/images/special-mouth.png"; // 当点击特殊图标时显示的嘴巴

function App() {
  const [selectedBody, setSelectedBody] = useState(null);
  const [selectedEyes, setSelectedEyes] = useState(null);
  const [selectedMouth, setSelectedMouth] = useState(null);
  const [selectedClothes, setSelectedClothes] = useState(null);
  const [showAbout, setShowAbout] = useState(false); // 控制是否显示关于作者的文本

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAbout && !event.target.closest(".about-author-container")) {
        setShowAbout(false); // 点击页面任意地方时隐藏
      }
    };

    // 添加全局点击事件监听器
    document.addEventListener("click", handleClickOutside);

    // 在组件卸载时移除监听器
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showAbout]);

  // 根据 selectedBody 动态加载选项
  const getEyeImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1EyeImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2EyeImages;
    return [];
  };

  const getMouthImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1MouthImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2MouthImages;
    return [];
  };

  const getClothImages = () => {
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body1.png`) return body1ClothImages;
    if (selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`) return body2ClothImages;
    return [];
  };

  // 判断是否禁用嘴巴选项
  const isMouthDisabled = () => {
    return selectedBody === `${process.env.PUBLIC_URL}/images/body2.png`;
  };

  return (
    
    <div className="container">
      {/* 左侧选择区域 */}
      <div className="left-panel">
        <h3>请选择物种</h3>
        <div className="row">
          {bodyImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`body ${image.id}`}
              onClick={() => {
                setSelectedBody(image.src);
                setSelectedEyes(null);
                setSelectedMouth(null);
                setSelectedClothes(null);
              }}
              className="image-item"
            />
          ))}
        </div>

        

        {selectedBody && (
          <>
            <h3>请选择眼型</h3>
            <div className="row">
              {getEyeImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`eye ${image.id}`}
                  onClick={() => setSelectedEyes(image.src)}
                  className="image-item"
                />
              ))}
            </div>

            <h3>请选择嘴型</h3>
            <div className="row">
              {/* No Mouth Icon 放在最前面 */}
              
              {selectedBody !== `${process.env.PUBLIC_URL}/images/body1.png` && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/none-icon.png`}  //none-icon.png
                  alt="No Mouth Icon"
                  onClick={() => setSelectedMouth(null)} // Click to hide mouth
                  className="image-item"
                />
              )}

              {!isMouthDisabled() && getMouthImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`mouth ${image.id}`}
                  onClick={() => setSelectedMouth(image.src)}
                  className="image-item"
                />
              ))}

              
            </div>

            <h3>请选择头饰</h3>
            <div className="row">
              {getClothImages().map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`clothes ${image.id}`}
                  onClick={() => setSelectedClothes(image.src)}
                  className="image-item"
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="about-author-container">
        <button onClick={() => setShowAbout(!showAbout)} className="about-button">
          关于作者
        </button>
        {showAbout && (
          <div className="about-info">
            
            <p>制作: tapioca</p>
          </div>
        )}
      </div>

      {/* 右侧展示区域 */}
      <div className="right-panel">
        <div className="display-box">
          {selectedBody && <img src={selectedBody} alt="Selected Body" className="selected-part" />}
          {selectedEyes && <img src={selectedEyes} alt="Selected Eyes" className="selected-part" />}
          {selectedMouth && <img src={selectedMouth} alt="Selected Mouth" className="selected-part" />}
          {selectedClothes && <img src={selectedClothes} alt="Selected Clothes" className="selected-part" />}
          
        </div>
      </div>
    </div>
  );
}

export default App;
