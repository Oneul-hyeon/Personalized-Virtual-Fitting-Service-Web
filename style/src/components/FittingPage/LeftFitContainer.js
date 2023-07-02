import React, { useEffect, useState } from 'react'

import CardButton from './CardButton'
import ButtonBar from './ButtonBar'

import styles from './FittingPage.module.css'
import axios from 'axios'
import { API_URL } from '../../api/apiConfig'

// import peopleTest from '../../images/people-test.png'

function LeftFitContainer() {
  const [image, setImage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user || !user._id) {
          console.error('User ID not found')
          return
        }
        const userId = user._id
        const response = await axios.get(`${API_URL}/userinfo/api/userimage`, {
          params: {
            userId: userId,
          },
        })
        setImage(response.data.image)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <ButtonBar />
      <div className={styles.imageContainer}>
        {image && (
          <img
            className={styles.fittingImage}
            src={image}
            alt="after-fitting"
          />
        )}
      </div>
    </div>
  )
}
export default LeftFitContainer