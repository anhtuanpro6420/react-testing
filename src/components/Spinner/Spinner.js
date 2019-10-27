import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


export default function Spinner() {
  return (
    <FontAwesomeIcon className="fa fa-spinner fa-spin" icon={faSpinner} />
  )
}
