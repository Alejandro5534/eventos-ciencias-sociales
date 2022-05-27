import React from 'react'
import MapView from '../ui/MapView'

export const EstanciasScreen = () => {
  return (
    <>
    <div>
        <MapView />
        <h1
          style={{
            left: '50vw',
            position: 'fixed',
            top: '16vh',
          }}
        >Lorem ipsum </h1>
        <p
          style={{
            textAlign: 'justify',
            left: '45vw',
            position: 'fixed',
            top: '25vh',
            right: '5vw',
          }}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor enim in libero pharetra, nec dapibus dui suscipit. Phasellus accumsan magna sit amet faucibus ornare. Nullam consectetur maximus scelerisque. Sed lorem nunc, iaculis ac egestas non, molestie in turpis. Vestibulum et nisi justo. Donec fermentum semper convallis. Duis dapibus libero vitae ultricies suscipit. Fusce sed nisi magna. Morbi ullamcorper luctus nunc nec tincidunt. Morbi vulputate aliquet mauris. Praesent scelerisque aliquam nisi.</p>
    </div></>
  )
}
