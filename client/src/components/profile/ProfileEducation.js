import React from 'react'
import PropTypes from 'prop-types'
import Moment from "react-moment";

const ProfileEducation = ({
    education: { school, degree, location, current, to, from, description }
  }) => (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{" "}
        {!to ? "Now" : <Moment format=' YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
          <strong>Position: </strong> {degree}
      </p>
      <strong>Description:</strong>{description}
    </div>
  );
ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired,

}

export default ProfileEducation
