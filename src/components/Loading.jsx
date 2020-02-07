import React from 'react'
import { ClipLoader } from 'react-spinners'
import PropTypes from 'prop-types'

export default function Loading({ size, color }) {
  return (
    <div className="p-4 text-center">
      <ClipLoader size={size} color={color} />
    </div>
  )
}

Loading.defaultProps = {
  size: 24,
  color: '#345667'
}

Loading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}
