/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React, {useState} from 'react';
import styles from './uploadLogo.module.scss';
import FormBox from '../../Component/FormBox/FormBox';
import Image from '../../Component/Image/Image';
import Button from '../../Component/Button/Button';
import Logo from '../../Component/Logo/Logo';

const UploadLogo = () => {
  const [selectedImage, setSelectedImage] = useState (null);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    setSelectedImage (URL.createObjectURL (file));
  };

  const handleFormSubmit = () => {
    // Handle form submission here
    console.log ('Complete Sign Up');
  };
  return (
    <div className={styles.main}>
      {/* Render the Image component */}
      <div ClassName={styles.image}>
        <Image />
      </div>

      {/* <ImageBox>
        {selectedImage && <Image src={selectedImage} />}
      </ImageBox> */}

      {/* Render the form box */}
      <FormBox>
        <div className={styles.formBox}>
          {/* Render the logo */}
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div>
            <h1>Upload Company Logo</h1>
            <p>
              Give your workspace a more pleasing feel with your company logo
            </p>

            <div>
              <label htmlFor="image-upload" className={styles.uploadLabel}>
                <input
                  id="image-upload"
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                  className={styles.uploadInput}
                />

                <div className={styles.uploadIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="uploadingIcon" />
                    <path
                      d="M1 13L1 14C1 15.6569 2.34315 17 4 17L14 17C15.6569 17 17 15.6569 17 14L17 13M13 5L9 1M9 1L5 5M9 1L9 13"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <span className={styles.uploadText}>
                  Drag and drop or select from device
                </span>
              </label>
              <div className={styles.lastLine}>
                <Button onClick={handleFormSubmit}>Complete Sign Up</Button>
              </div>
              <div className={styles.skipnav}>
                <p>Skip</p>
              </div>

            </div>
          </div>
        </div>
      </FormBox>
    </div>
  );
};
export default UploadLogo;
