import React from 'react'

import './News.css'

export default function News() {
  return (
    <div className='news-container'>
      <ul>
        <li>
          <p className='news-date'>March 31, 2020</p>
          <p className='news-title'>NAHL Season is cancelled</p>
        </li>
        <li>
          <p className='news-date'>Feb 20, 2020</p>
          <p className='news-title'>NAHL - Guidance for resumption of League Play</p>
        </li>
        <li>
          <p className='news-date'>Feb 1, 2020</p>
          <p className='news-title'>A message to all NAHL teams and players</p>
        </li>
        <li>
          <p className='news-date'>Jan 24, 2020</p>
          <p className='news-title'>NAHL - Newsletter</p>
        </li>
        <li>
          <p className='news-date'>Nov 20, 2020</p>
          <p className='news-title'>New 2019-2020 Crack down rules</p>
        </li>
        <li>
          <p className='news-date'>Dec, 12 2018</p>
          <p className='news-title'>NAHL Newsletter</p>
        </li>
        <li>
          <p className='news-date'>March, 26 2018</p>
          <p className='news-title'>NAHL Newsletter</p>
        </li>
      </ul>

    </div>
  )
}
