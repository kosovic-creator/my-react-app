/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ChildPage = (props) => {

  const sabiranje = props.sabiranje
  const ime = props.ime
  const log_child = props.napisiLog
  return (
    <>
      <div>Child Ime je : {ime}, Rezultat sabiranja: {sabiranje(5, 10)}, {log_child()}</div>
    </>
  )
}

export default ChildPage