import React, { useEffect, useState } from 'react'

import ButtonBar from './ButtonBar'

import styles from './FittingPage.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import getProfileImage from '../common/getProfileImage'

function LeftFitContainer({
  setErrorCode,
  showAlert,
  fittingImage,
  isDefaultPage,
  setIsDefaultPage,
  changeBackground,
  setClosetUpdateTrigger,
}) {
  const [profileImage, setProfileImage] = useState('')

  useEffect(() => {
    getProfileImage(setProfileImage)
  }, [])

  return (
    <div>
      <ButtonBar
        setErrorCode={setErrorCode}
        showAlert={showAlert}
        setIsDefaultPage={setIsDefaultPage}
        image={isDefaultPage ? profileImage : fittingImage}
        changeBackground={changeBackground}
        setClosetUpdateTrigger={setClosetUpdateTrigger}
      />
      <div className={styles.imageContainer}>
        <img
          className={styles.fittingImage}
          src={isDefaultPage ? profileImage : fittingImage}
          alt="userImage"
        />
      </div>
    </div>
  )
}
export default LeftFitContainer
